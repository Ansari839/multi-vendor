import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="space-y-6 w-52 bg-slate-800 text-slate-50 h-screen" >
      <Link className="mt-6" href="#">Logo</Link>
      <div className="flex flex-col space-y-3" >
        <Link className="" href="#">Catalogue</Link>
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
