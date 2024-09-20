import { AlignJustify, Bell, Sun, User } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Nav() {
  return (
    <div className="flex  justify-between text-slate-50 bg-slate-900 h-16  px-8 py-4 sticky top-0">
      <button>
        <AlignJustify />
      </button>
      <div className="flex space-x-3 ">
        <button>
          <Sun className="text-green-600" />
        </button>

        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
        >
          <Bell className="text-green-600" />
          <span className="sr-only">Notifications</span>
          <div
            className="absolute inline-flex items-center
           justify-center w-6 h-6
            text-xs font-bold text-white 
            bg-red-500 rounded-full 
            -top-2 end-6 dark:border-gray-900"
          >
            20
          </div>
        </button>

        <button>
          {/* <User className="text-green-600" /> */}
          <Image
            src="/profile.jpeg"
            alt="user profile"
            width={200}
            height={200}
            className="w-8 h-8 rounded-full"
          />
        </button>
      </div>
    </div>
  );
}
