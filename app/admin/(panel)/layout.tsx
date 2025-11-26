import type { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import "../../globals.css";

export default function PanelLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
