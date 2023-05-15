import type { Metadata } from "next";

// These styles apply to every route in the application
import "./globals.css";
import { IBM_Plex_Mono, Inter } from "next/font/google";

const inter = Inter({
  weight: ["200", "400", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "block",
});

const ibmPlex = IBM_Plex_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  display: "block",
});

export const metadata: Metadata = {
  title: "Nahuel Scotti. Frontend developer. Portfolio.",
  description: "My work as frontend developer and engineering manager.",
};

export default function RootLayout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlex.variable} w-full p-0 m-0`}
    >
      <body className="flex flex-col w-full p-0 m-0">
        <main>
          {children}
          {modal}
        </main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
