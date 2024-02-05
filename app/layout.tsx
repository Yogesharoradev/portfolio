import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hemant",
  description: "Aesthetic, minimalistic, and responsive portfolio website.",
  openGraph: {
    title: "Hemant",
    description: "not the only website ever",
    type: "website",
    url: "https://hemant.lol",
    images: "/dread.png",
  },
  twitter: {
    images: "/dread.png",
    card: "summary",
  },
  themeColor: "#EED1C6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
