import type { Metadata } from "next";

import { PHProvider } from "@/providers/PHProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
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
    <PHProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </PHProvider>
  );
}
