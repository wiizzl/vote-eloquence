import { Github, Instagram, Linkedin } from "lucide-react";

const config = {
  title: "Concours d'éloquence 2025 - La Chataîgneraie",
  description: "",
  keywords: ["vote", "concours"],

  creator: {
    name: "Pierre Houllière",
    url: "https://houlliere.com",
    socials: [
      {
        name: "GitHub",
        href: "https://github.com/wiizzl",
        icon: Github,
      },
      {
        name: "GitHub",
        href: "https://linkedin.com/in/pierrehoulliere",
        icon: Linkedin,
      },
      {
        name: "Instagram",
        href: "https://instagram.com/pierre.hlr",
        icon: Instagram,
      },
    ],
  },

  Navigation: [
    { name: "Accueil", href: "" },
    { name: "Boutique", href: "shop" },
    { name: "Avis", href: "reviews" },
    { name: "FAQ", href: "faq" },
  ],
  Links: [
    { name: "Contact", href: "contact" },
    { name: "Légal", href: "legal" },
    { name: "CGV", href: "cgv" },
  ],
};

export { config };
