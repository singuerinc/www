import type { Metadata } from "next";

// These styles apply to every route in the application
import "./globals.css";

export const metadata: Metadata = {
  title: "Nahuel Scotti. Frontend developer. Portfolio.",
  description: "My work as frontend developer and engineering manager.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full p-0 m-0">
      <body className="w-full p-0 m-0">{children}</body>
    </html>
  );
}
