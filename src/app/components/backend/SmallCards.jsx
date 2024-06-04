import React from "react";
import { ShoppingCart, CheckCheck, RefreshCcw, Loader2 } from "lucide-react";
import SmallCard from "./SmallCard";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Total Order",
      number: 100,
      color: "bg-green-600",
      icon: ShoppingCart,
    },

    {
      title: "Pending Orders",
      number: 120,
      color: "bg-blue-600",
      icon: Loader2,
    },
    {
      title: "Order In Process",
      number: 300,
      color: "bg-orange-600",
      icon: RefreshCcw,
    },
    {
      title: "Order Deliverd",
      number: 11000,
      color: "bg-purple-600",
      icon: CheckCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((status, i) => {
        return <SmallCard key={i} data={status} />;
      })}
    </div>
  );
}
