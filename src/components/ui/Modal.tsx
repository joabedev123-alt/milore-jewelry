"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  type ReactNode,
} from "react";
import { Icon } from "@/components/icons/BootstrapIcon";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  /** "center" modal or right "drawer" panel */
  variant?: "center" | "drawer";
  size?: "md" | "lg" | "xl";
};

export function Modal({
  open,
  onClose,
  title,
  children,
  variant = "center",
  size = "lg",
}: ModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    document.body.classList.add("modal-open");

    const timer = window.setTimeout(() => {
      const focusable = dialogRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    }, 50);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
      previouslyFocused.current?.focus();
    };
  }, [open, handleClose]);

  if (!open) return null;

  const sizeClass =
    size === "xl"
      ? "max-w-4xl"
      : size === "lg"
        ? "max-w-2xl"
        : "max-w-md";

  if (variant === "drawer") {
    return (
      <div className="fixed inset-0 z-50 flex justify-end" role="presentation">
        <button
          type="button"
          className="absolute inset-0 cursor-pointer bg-ink/30 transition-opacity duration-250"
          aria-label="Close dialog"
          onClick={handleClose}
        />
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="relative z-10 flex h-full w-full max-w-full flex-col bg-white shadow-[-8px_0_40px_rgba(37,35,34,0.08)] animate-[slide-up_0.28s_ease-out] sm:max-w-lg"
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-4 sm:px-6 sm:py-5">
            <h2
              id={titleId}
              className="pr-2 font-serif text-xl text-ink sm:text-2xl"
            >
              {title}
            </h2>
            <button
              type="button"
              onClick={handleClose}
              className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center text-ink transition-colors duration-200 hover:text-gold"
              aria-label="Close"
            >
              <Icon name="x-lg" size={18} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-5 safe-bottom sm:px-6 sm:py-6">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-pointer bg-ink/35 transition-opacity duration-250"
        aria-label="Close dialog"
        onClick={handleClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative z-10 max-h-[92dvh] w-full overflow-y-auto bg-white animate-[fade-in_0.25s_ease-out] sm:max-h-[90vh] ${sizeClass}`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-white px-4 py-4 sm:px-6 sm:py-5">
          <h2
            id={titleId}
            className="pr-2 font-serif text-xl text-ink sm:text-2xl"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center text-ink transition-colors duration-200 hover:text-gold"
            aria-label="Close"
          >
            <Icon name="x-lg" size={18} />
          </button>
        </div>
        <div className="px-4 py-5 safe-bottom sm:px-6 sm:py-6">{children}</div>
      </div>
    </div>
  );
}
