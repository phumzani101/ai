"use client";
import { cn } from "@/lib/utils";
import {
  BotIcon,
  BrainCircuit,
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

const routes = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    name: "Chat AI",
    icon: MessageSquare,
    href: "/chat",
    color: "text-violet-500",
  },
  {
    name: "Image AI",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    name: "Video AI",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
  },
  {
    name: "Music AI",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    name: "Code AI",
    icon: CodeIcon,
    href: "/code",
    color: "text-green-500",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-grey",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full b-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className={cn("flex items-center pl-3 mb-14", montserrat.className)}
        >
          <div className="relative w-8 h-8 mr-4 text-2xl font-bold">
            <BotIcon size={32} />
          </div>
          <h1 className="text-3xl font-bold">AI</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => {
            const activePath =
              pathname === route.href
                ? "text-white bg-white/10"
                : "text-zinc-500";
            return (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  activePath
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
