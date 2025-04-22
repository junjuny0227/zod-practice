import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "zod playground",
  description: "A playground for zod",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
