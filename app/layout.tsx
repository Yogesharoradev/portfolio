import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hemant",
  description: "Aesthetic, minimalistic, and responsive portfolio website.",
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
