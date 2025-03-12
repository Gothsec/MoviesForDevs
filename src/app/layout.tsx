import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CineCommit",
  description: "Discover movies for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
