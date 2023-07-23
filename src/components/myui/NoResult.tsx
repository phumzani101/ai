import { Bot } from "lucide-react";
import Image from "next/image";
import React from "react";

const NoResult = ({ title }: { title: string }) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative w-72 h-72">
        <Image src="/bot.png" fill alt="bot" />
      </div>
      {/* <p className="text-muted-foreground  w-72 text-sm" text-center>
        {title}
      </p> */}
    </div>
  );
};

export default NoResult;
