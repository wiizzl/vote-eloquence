import "./globals.css";

import type { Metadata } from "next";

import { config } from "@/config";

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s - ${config.title}`,
  },
  description: config.description,
  alternates: {
    canonical: "/",
  },
  keywords: config.keywords,
  authors: [{ name: config.creator.name, url: config.creator.url }],
  creator: config.creator.name,
  metadataBase: new URL("http://localhost:3000"),
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className="antialiased">{props.children}</body>
    </html>
  );
}
