import type { ReactNode } from "react";

export const metadata = {
  title: "FLGP",
  description: "Family Law Growth Partners",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
