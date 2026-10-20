"use client";

import { Modal } from "@/components/ui/Modal";
import { careTips } from "@/config/site";
import { useCatalog } from "@/context/CatalogContext";

export function CareModal() {
  const { careOpen, closeCare } = useCatalog();
  const { modal } = careTips;

  return (
    <Modal open={careOpen} onClose={closeCare} title={modal.title} size="md">
      <ul className="space-y-4">
        {modal.body.map((item) => (
          <li
            key={item}
            className="border-l border-gold/40 pl-4 text-[15px] leading-relaxed text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-[13px] italic text-muted/80">{modal.disclaimer}</p>
    </Modal>
  );
}
