import Heading from "@/app/components/backend/Heading";
import PageHeader from "@/app/components/backend/PageHeader";
import TableAction from "@/app/components/backend/TableAction";
import { Download, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";

export default function page({ title, heading, linkTitle, href }) {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Categories"
        linkTitle="Add Category"
        href="/dashboard/catogeries/new"
      />
      {/* Export || Search || Bulk Delete */}
      <div className="flex py-4 bg-slate-700 rounded-lg justify-between items-center px-6">
        <button className="flex items-center space-x-2 bg-blue-600 text-white rounded-lg px-6 py-3">
          <Download />
          <button className="">Export</button>
        </button>
        {/* Search */}
        <div className="relative mt-1">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
        {/* Bulk Delete */}
        <button className="flex items-center space-x-2 bg-red-600 text-white rounded-lg px-6 py-3">
          <span>Bulk Delete</span>
          <Trash2 />
        </button>
      </div>

      {/* Table */}
      <TableAction />
    </div>
  );
}
