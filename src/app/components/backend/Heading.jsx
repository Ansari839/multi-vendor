import React from "react";

export default function Heading({ title }) {
  return (
    <h2 className="py-4 text-2xl font-semibold text-slate-700 dark:text-slate-50">
      {title}
    </h2>
  );
}
