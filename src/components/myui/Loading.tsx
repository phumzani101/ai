import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Loader size={24} className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Loading;
