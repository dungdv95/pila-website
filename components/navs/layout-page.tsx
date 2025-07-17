"use client";
import { useState } from "react";
import HeaderSection from "./header-section";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutPage({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />
      {children}
    </div>
  );
}
