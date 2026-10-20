"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CategoryId, Product } from "@/config/site";
import { products } from "@/config/site";

type FilterValue = "all" | CategoryId;

type CatalogContextValue = {
  filter: FilterValue;
  setFilter: (f: FilterValue) => void;
  applyCategoryFilter: (category: CategoryId) => void;
  filteredProducts: Product[];
  selectedProduct: Product | null;
  openProduct: (product: Product) => void;
  closeProduct: () => void;
  careOpen: boolean;
  openCare: () => void;
  closeCare: () => void;
  policyModal: "shipping" | "returns" | "privacy" | "terms" | null;
  openPolicy: (key: "shipping" | "returns" | "privacy" | "terms") => void;
  closePolicy: () => void;
};

const CatalogContext = createContext<CatalogContextValue | null>(null);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [careOpen, setCareOpen] = useState(false);
  const [policyModal, setPolicyModal] = useState<
    "shipping" | "returns" | "privacy" | "terms" | null
  >(null);

  const filteredProducts = useMemo(() => {
    if (filter === "all") return products.filter((p) => p.featured !== false);
    return products.filter((p) => p.category === filter);
  }, [filter]);

  const applyCategoryFilter = useCallback((category: CategoryId) => {
    setFilter(category);
    const el = document.getElementById("jewelry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const value: CatalogContextValue = {
    filter,
    setFilter,
    applyCategoryFilter,
    filteredProducts,
    selectedProduct,
    openProduct: setSelectedProduct,
    closeProduct: () => setSelectedProduct(null),
    careOpen,
    openCare: () => setCareOpen(true),
    closeCare: () => setCareOpen(false),
    policyModal,
    openPolicy: setPolicyModal,
    closePolicy: () => setPolicyModal(null),
  };

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
}

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalog must be used within CatalogProvider");
  return ctx;
}
