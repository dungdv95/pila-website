"use client";
import { useState } from "react";
import HeaderSection from "./header-section";
import { FollowerPointerCard } from "../ui/following-pointer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutPage({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <HeaderSection />
      {children}
    </div>
  );
}
