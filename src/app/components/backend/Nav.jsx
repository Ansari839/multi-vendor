import { AlignJustify, Bell, Sun, User } from "lucide-react";
import React from "react";

export default function Nav() {
  return (
    <div className="flex  justify-between text-slate-50 bg-slate-900 h-16  px-8 py-4 sticky top-0">
    <button>
      <AlignJustify />
    </button>
    <div className="flex space-x-8">
      <button>
        <Sun />
      </button>

      <button>
        <Bell />
      </button>

      <button>
        <User />
      </button>
    </div>
  </div>
  );
}
