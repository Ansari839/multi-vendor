import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="space-y-6 w-64 bg-slate-700 text-slate-50 min-h-screen p-3" >
      <Link className="mb-6" href="#">Logo</Link>
      <div className="flex flex-col space-y-3" >
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Online Store</Link>
      </div>
    </div>
  );
}
