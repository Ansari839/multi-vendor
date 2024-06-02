import { AlignJustify, Bell, Sun, User } from "lucide-react";
import React from "react";

export default function Nav() {
  return (
    <div className="flex justify-between text-slate-50 bg-slate-800 h-16">
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
