"use client";

import { ProductModal } from "@/components/modals/ProductModal";
import { CareModal } from "@/components/modals/CareModal";
import { PolicyModal } from "@/components/modals/PolicyModal";

export function GlobalModals() {
  return (
    <>
      <ProductModal />
      <CareModal />
      <PolicyModal />
    </>
  );
}
