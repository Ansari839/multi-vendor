"use client"
import React, { useState } from "react";

export default function WeeklySalesCharts() {
  const tabs = [
    {
      title : "Sales",
      type : "sales"
    } ,
    {
      title : "Orders",
      type : "orders",
    }
  ]

  const [chartTodisplay , setChartTodisplay] = useState(tabs[0].type)
  
  return (
    <div className="bg-slate-700 rounded-lg p-8">
    <h3 className="text-xl font-bold">Best Sellings Charts</h3>
    <div className="p-8">
    {/* Tabs */}


<div className="border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      {tabs.map((tabs , i)=>{
        return(
          <li className="me-2" key={i}>
            <button
            onClick={()=>setChartTodisplay(tabs.type)}
            className={chartTodisplay==tabs.type? "inline-flex items-center justify-center p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500 group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}>
               {tabs.title}
            </button>
        </li>
        )
      })}
    </ul>
</div>

    {/* content to display */}
      {tabs.map((tabs , i) => {
        if(chartTodisplay === tabs.type){
          return(
            <h2>{tabs.title}</h2>
          )
        }
        return null;
      })}
    </div>
  </div>
  )
}
