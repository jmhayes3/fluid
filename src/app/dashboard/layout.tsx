import React from "react";

const title = "Dashboard";

export const metadata = {
  title,
};

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return children;
}
