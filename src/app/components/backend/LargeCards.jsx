import { Layers } from "lucide-react";
import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [
    {
      period: "Today Orders",
      sales: 110000,
      color: "bg-green-600",
    },

    {
      period: "Yesterday Orders",
      sales: 130000,
      color: "bg-blue-600",
    },
    {
      period: "This Month Sales",
      sales: 1100000,
      color: "bg-orange-600",
    },
    {
      period: "Last Month",
      sales: 1100000,
      color: "bg-purple-600",
    },
    {
      period: "All Time",
      sales: 1100000,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {/* <LargeCard className="bg-green-600" />
      <LargeCard className="bg-blue-600" />
      <LargeCard className="bg-orange-600" />
      <LargeCard className="bg-purple-600" /> */}
      {orderStats.map((stats, i) => {
        return <LargeCard className={stats.color} data={stats} key={i} />;
      })}
    </div>
  );
}
