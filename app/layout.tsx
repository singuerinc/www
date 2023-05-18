import { Navigation } from "@/components/Navigation";
import type { Metadata } from "next";

// These styles apply to every route in the application
import { IBM_Plex_Mono, Inter, Libre_Barcode_39, Lora } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "Nahuel Scotti. Frontend developer. Portfolio.",
    description: "My work as frontend developer and engineering manager.",
    url: "https://singuerinc.com/",
  },
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
      className={`${inter.variable} ${ibmPlex.variable} ${barcode.variable} ${lora.variable} lg:overflow-hidden lg:h-screen min-w-full p-0 m-0`}
    >
      <body className="flex flex-col justify-center min-w-full p-0 m-0 lg:h-screen lg:overflow-x-scroll lg:overflow-y-hidden">
        <Navigation />
        <main>
          {modal}
          {children}
        </main>
      </body>
    </html>
  );
}
