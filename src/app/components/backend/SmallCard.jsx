import { ShoppingCart } from "lucide-react";
import React from "react";

export default function SmallCard({ data }) {
  const { title, number, color, icon: Icon } = data;
  return (
    <div className="rounded-lg shadow-lg p-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${color} rounded-full items-center flex justify-center text-slate-700 dark:text-slate-200`}
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
