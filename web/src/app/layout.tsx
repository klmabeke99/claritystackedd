import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "ClarityStacked",
  description:
    "Command systems for money, food, focus, decisions, mental clarity, and life admin.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ClarityStacked",
    description:
      "Command systems for money, food, focus, decisions, mental clarity, and life admin.",
    url: "https://www.claritystacked.com",
    siteName: "ClarityStacked",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClarityStacked command systems for real life",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClarityStacked",
    description:
      "Command systems for money, food, focus, decisions, mental clarity, and life admin.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}