"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

export default function WeeklySalesCharts() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: "Orders",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      },
    },
  ];

  const [chartTodisplay, setChartTodisplay] = useState(tabs[0].type);

  return (
    <div className="bg-slate-200 dark:bg-slate-700 rounded-lg p-8">
      <h3 className="text-xl font-bold text-slate-700 dark:text-slate-50">
        Best Sellings Charts
      </h3>
      <div className="p-8">
        {/* Tabs */}

        <div className="border-b border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-50">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-700 dark:text-gray-400">
            {tabs.map((tabs, i) => {
              return (
                <li className="me-2" key={i}>
                  <button
                    onClick={() => setChartTodisplay(tabs.type)}
                    className={
                      chartTodisplay == tabs.type
                        ? "inline-flex items-center justify-center p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500 group"
                        : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    }
                  >
                    {tabs.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* content to display */}
        {tabs.map((tabs, i) => {
          if (chartTodisplay === tabs.type) {
            return (
              <Line options={options} data={tabs.data} key={i} />
              // <h2 key={i}>{tabs.title}</h2>;
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
