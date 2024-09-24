"use client";
import {
  Box,
  ChevronRight,
  ChevronDown,
  CircleDollarSign,
  LayoutGrid,
  LogOut,
  Settings,
  Slack,
  Store,
  Tractor,
  Truck,
  User2,
  Users,
  Warehouse,
  LayoutList,
  SendToBack,
  ScanSearch,
  MonitorPlay
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {React , useState} from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Sidebar({showSideBar , setShowSiderBar}) {
  const pathName = usePathname();

  const [openMenu , setOpenMenu] = useState(false)
  const sideBarMenu = [
    // { title: "Dashboard", href: "/", icon: LayoutGrid },
    { title: "Customers", href: "/dashboard/customers", icon: Users },
    { title: "Markets", href: "/dashboard/markets", icon: Warehouse },
    { title: "Farmers", href: "/dashboard/farmers", icon: Tractor },
    { title: "Orders", href: "/", icon: Truck },
    { title: "Our Staff", href: "/dashboard/staff", icon: Users },
    { title: "Settings", href: "/", icon: Settings },
    { title: "Online Store", href: "/", icon: Store },
  ];
  const catlougeMenu = [
    { title: "Products", href: "/dashboard/product", icon: Box },
    { title: "Catogeries", href: "/dashboard/catogeries", icon: LayoutList },
    { title: "Attributes", href: "/dashboard/attributes", icon: SendToBack },
    { title: "Coupons", href: "/dashboard/coupons", icon: ScanSearch },
    { title: "Store Sliders", href: "/dashboard/banners", icon: MonitorPlay },
  ];

  return (
    <div
      className={showSideBar ?"space-y-6 w-64 bg-slate-400 dark:bg-slate-700 text-slate-700 dark:text-slate-200 min-h-screen px-6 py-4 shadow-md sticky top-0 left-0 hidden sm:block":"space-y-6 w-64 bg-slate-200 dark:bg-red-700 text-slate-700 dark:text-slate-200 min-h-screen px-6 py-4 shadow-md sticky top-0 left-0 sm:block"
      }
    >
      <Link className="px-6 py-4 w-36 " href="/dashboard">
        Logo
      </Link>
      <div className="flex flex-col space-y-3">
        <Link
          href="/dashboard"
          className={
            pathName === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 text-lime-500"
              : "flex items-center space-x-3 px-6 py-2"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger onClick={()=> setOpenMenu(!openMenu)}>
            <div className="flex items-center space-x-6 py-2">
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catlouge</span>
                {openMenu ? <ChevronDown /> : <ChevronRight />}
              </div>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent
            className="px-3 pl-6 py-3 rounded-lg 
          bg-slate-300 dark:bg-slate-800"
          >
            {catlougeMenu.map((items, i) => {
              const Icon = items.icon;
              return (
                <Link
                  key={i}
                  href={items.href}
                  className={
                    pathName === `${items.href}`
                      ? "flex items-center space-x-3 py-1 text-sm border-1-4 border-lime-600 text-lime-500"
                      : "flex items-center space-x-3 py-1"
                  }
                >
                  <Icon className="w-4 h-4"/>
                  <span>{items.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sideBarMenu.map((items, i) => {
          const Icon = items.icon;
          return (
            <Link
              key={i}
              onClick={()=>setShowSiderBar(true)}
              href={items.href}
              className={
                pathName === `${items.href}`
                  ? "flex items-center space-x-3 px-6 py-2 border-1-4 border-lime-600 text-lime-500"
                  : "flex items-center space-x-3 px-6 py-2"
              }
            >
              <Icon />
              <span>{items.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2 ">
          <button className="bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
