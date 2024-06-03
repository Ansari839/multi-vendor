import React from "react";
import SmallCard from "./SmallCard";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Total Order",
      sales: 110000,
      color: "bg-green-600",
    },

    {
      title: "Pending Orders",
      sales: 130000,
      color: "bg-blue-600",
    },
    {
      title: "Order In Process",
      sales: 1100000,
      color: "bg-orange-600",
    },
    {
      title: "Order Deliverd",
      sales: 1100000,
      color: "bg-orange-600",
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
