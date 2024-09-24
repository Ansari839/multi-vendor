"use client"
import React , {useState} from "react";
import Nav from "@/app/components/backend/Nav";
import Sidebar from "@/app/components/backend/Sidebar";
export default function Layout({ children }) {
  const [showSideBar ,  setShowSiderBar] = useState(false)

  return (
    <div className="flex">
      <Sidebar showSideBar={showSideBar} setShowSiderBar={setShowSiderBar} />
      <div className="w-full">
        <Nav showSideBar={showSideBar} setShowSiderBar={setShowSiderBar} />
        <main className="p-4 bg-slate-50 dark:bg-slate-900 text-slate-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
