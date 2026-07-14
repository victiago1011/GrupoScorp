import type { NavLink } from "@/types/navigation";

export const desktopNavLinks: NavLink[] = [
  { label: "Home", href: "#", accent: true },
  { label: "Soluções", href: "#solucoes" },
  { label: "Simulador de ROI", href: "#calculadora" },
  { label: "Processo", href: "#processo" },
  { label: "Cases", href: "#cases" },
];

export const mobileNavLinks: NavLink[] = [
  { label: "Home", href: "#", accent: true },
  { label: "Soluções", href: "#solucoes" },
  { label: "Simulador de ROI", href: "#calculadora" },
  { label: "Processo", href: "#processo" },
  { label: "Cases", href: "#cases" },
];

export const contactCta: NavLink = {
  label: "Fale Conosco",
  href: "#contato",
};
