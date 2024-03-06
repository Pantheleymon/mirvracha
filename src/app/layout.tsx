import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мир врача",
  description: "Тестовое задание на вакансию HTML-Верстальщик",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
