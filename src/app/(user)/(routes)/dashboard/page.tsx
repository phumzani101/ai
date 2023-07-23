import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BrainCircuit,
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";

const bots = [
  {
    name: "Chat AI",
    icon: MessageSquare,
    href: "/chat",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    name: "Image AI",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    name: "Video AI",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "Music AI",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    name: "Code AI",
    icon: CodeIcon,
    href: "/code",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8 mt-4 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {bots.map((ai) => {
          return (
            <Link
              href={ai.href}
              key={ai.href}
              className="flex flex-row border-black/5 hover:shadow-md transition cursor-pointer"
            >
              <Card className="flex flex-1 p-4 items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", ai.bgColor)}>
                    <ai.icon className={cn("w-8 h-8", ai.color)} />
                  </div>
                  <div className="font-semibold">{ai.name}</div>
                </div>
                <ArrowRight className="w-5 h5" />
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
