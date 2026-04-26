import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "WolfTech Analytics",
    template: "%s | WolfTech Analytics",
  },
  description:
    "WolfTech Analytics builds business dashboards, MIS automation, intelligent alerts and ML risk models for NBFCs, banks and lending businesses.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
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