import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChefAI - Your Intelligent Culinary Assistant",
  description: "Transform your cooking experience with AI-powered recipe management, voice control, and personalized meal suggestions from ingredients you have.",
  keywords: "recipe app, cooking assistant, AI chef, voice control, meal planning",
  authors: [{ name: "ChefAI Team" }],
  openGraph: {
    title: "ChefAI - Your Intelligent Culinary Assistant",
    description: "Transform your cooking experience with AI-powered recipe management",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
