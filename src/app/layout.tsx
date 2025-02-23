// src/app/layout.tsx
import React from "react";

export const metadata = {
  title: "ShaefferFacts2",
  description: "The coolest website for awesome facts!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}