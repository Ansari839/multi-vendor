import { ShoppingCart } from "lucide-react";
import React from "react";

export default function SmallCard({ data }) {
  const { title, number, color, icon: Icon } = data;
  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4 ">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${color} rounded-full items-center flex justify-center`}
        >
          <Icon />
          {/* <ShoppingCart /> */}
        </div>
        <div>
          <p> {title} </p>
          <h3 className="text-2xl ">{number}</h3>
        </div>
      </div>
    </div>
  );
}
