import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hollywoo After Dark — a BoJack Horseman fan site",
  description:
    "An unofficial fan tribute to BoJack Horseman: the seasons, the cast, and the sad-funny heart of the show.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
