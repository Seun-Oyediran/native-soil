import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared";
import ReactLenis from "lenis/react";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  // variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Native Soil",
  description:
    "Native Soil is an art exhibition exploring migration, metamorphosis, and the fractal nature of identity — where stories unfold across borders, time, and terrain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis
        root
        options={{
          smoothWheel: true,
          // wheelMultiplier: 0.5,
          infinite: false,
        }}
      >
        <body
          className={`antialiased ${ibmPlexMono} px-2 max-w-[1000px] mx-auto`}
        >
          <Header />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
