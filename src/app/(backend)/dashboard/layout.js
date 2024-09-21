import React from "react";
import Nav from "@/app/components/backend/Nav";
import Sidebar from "@/app/components/backend/Sidebar";
export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Nav />
        <main className="p-4 bg-slate-50 dark:bg-slate-900 text-slate-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
