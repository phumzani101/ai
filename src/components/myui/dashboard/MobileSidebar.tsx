"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MenuIcon } from "lucide-react";
import React from "react";
import Sidebar from "@/components/myui/dashboard/Sidebar";
import { Button } from "@/components/ui/button";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-gray-900">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
