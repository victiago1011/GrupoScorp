import type { NavLink } from "@/types/navigation";

export const desktopNavLinks: NavLink[] = [
  { label: "Início", href: "#", accent: true },
  { label: "Soluções", href: "#solucoes" },
  { label: "Quem somos", href: "#sobre" },
  { label: "Como trabalhamos", href: "#processo" },
  { label: "Projetos", href: "#cases" },
];

export const mobileNavLinks: NavLink[] = [
  { label: "Início", href: "#", accent: true },
  { label: "Soluções", href: "#solucoes" },
  { label: "Quem somos", href: "#sobre" },
  { label: "Como trabalhamos", href: "#processo" },
  { label: "Projetos", href: "#cases" },
];

export const contactCta: NavLink = {
  label: "Conversar sobre seu projeto",
  href: "#contato",
};
