import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mindful Yogi",
  description:
    "Yoga for steadiness, strength, breath, and everyday inner balance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
