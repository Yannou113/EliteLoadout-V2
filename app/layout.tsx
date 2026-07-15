import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "EliteLoadout — FPS Meta Platform", description: "Classes meta, assistant IA et configurateur 3D pour les joueurs FPS." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
