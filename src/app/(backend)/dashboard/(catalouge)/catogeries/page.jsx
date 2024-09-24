import Heading from "@/app/components/backend/Heading";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="flex justify-between ">
        <Heading title="Categories" />
        <Link
          className="flex items-center space-x-3 "
          href="/dashboard/catogeries/new"
        >
          <Plus />
          <span>Add Category</span>
        </Link>
      </div>
    </div>
  );
}
