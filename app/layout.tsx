import type { Metadata } from "next";

// These styles apply to every route in the application
import "./globals.css";
import {
  IBM_Plex_Mono,
  Inter,
  Josefin_Sans,
  Libre_Barcode_39,
  Libre_Barcode_39_Extended,
  Lora,
} from "next/font/google";

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

const barcode = Libre_Barcode_39({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-barcode",
  display: "block",
});

const lora = Lora({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-lora",
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
      className={`${inter.variable} ${ibmPlex.variable} ${barcode.variable} ${lora.variable} w-full p-0 m-0`}
    >
      <body className="flex flex-col w-full p-0 m-0">
        <main>
          {modal}
          {children}
        </main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
