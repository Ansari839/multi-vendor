"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 30, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-slate-200 dark:bg-slate-700 rounded-lg p-8">
      <h3 className="text-xl font-bold text-slate-700 dark:text-slate-50">
        Best Sellings Charts
      </h3>
      <div className="p-8 text-slate-700 dark:text-slate-50">
        <Pie data={data} />
      </div>
    </div>
  );
}
