import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function ({ title, heading, linkTitle, href }) {
  return (
    <div>
      <div className="flex justify-between border-b border-slate-300">
        <Heading title={heading} />
        <Link
          className="flex items-center space-x-3
          text-white bg-lime-600 hover:bg-lime-600/90 
          focus:ring-4 focus:outline-none focus:ring-lime-600/50
          font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
          dark:focus:ring-lime-600/55 me-2 mb-2 space-x-3"
          href={href}
        >
          <Plus />
          <span>{linkTitle}</span>
        </Link>
      </div>
    </div>
  );
}
