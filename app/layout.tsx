"use client"
import "./globals.css";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
