import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

const BotAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src="/bot.png" />
      <AvatarFallback>AI</AvatarFallback>
    </Avatar>
  );
};

export default BotAvatar;
