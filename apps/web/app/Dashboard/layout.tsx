// app/Dashboard/layout.tsx
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Create stunning AI-generated photos and videos with YourFace AI.",
  };

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return children;
}