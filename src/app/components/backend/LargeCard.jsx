import {  Layers } from "lucide-react";
import React from "react";

export default function LargeCard({className}) {
  return (
    <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${className}`}>
        <Layers />
        <h4>Today Orders</h4>
        <h2 className="lg:text-3xl text-2xl">UGX.108.12k</h2>
    </div>
  );
}