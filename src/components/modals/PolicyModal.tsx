"use client";

import { Modal } from "@/components/ui/Modal";
import { siteConfig } from "@/config/site";
import { useCatalog } from "@/context/CatalogContext";

const titles = {
  shipping: "Shipping Information",
  returns: "Returns & Exchanges",
  privacy: "Privacy Policy",
  terms: "Terms of Use",
} as const;

export function PolicyModal() {
  const { policyModal, closePolicy } = useCatalog();

  if (!policyModal) return null;

  const content = siteConfig.policies[policyModal];
  if (!content) return null;

  return (
    <Modal
      open={!!policyModal}
      onClose={closePolicy}
      title={content.title || titles[policyModal]}
      size="md"
    >
      <div className="space-y-4">
        {content.body.map((para) => (
          <p key={para} className="text-[15px] leading-relaxed text-muted">
            {para}
          </p>
        ))}
      </div>
    </Modal>
  );
}
