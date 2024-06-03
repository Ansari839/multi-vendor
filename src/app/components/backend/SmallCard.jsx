import { ShoppingCart } from "lucide-react";
import React from "react";

export default function SmallCard({ data }) {
  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4 ">
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-orange-600 rounded-full items-center flex justify-center">
          <ShoppingCart />
        </div>
        <div>
          <p> {data.title} </p>
          <h3 className="text-2xl ">552</h3>
        </div>
      </div>
    </div>
  );
}
