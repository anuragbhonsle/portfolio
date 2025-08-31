"use client";

import { Terminal } from "lucide-react";
import { DockIcon } from "./magicui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function CliButton({
  mousex,
  magnification,
  distance,
}: {
  mousex?: any;
  magnification?: number;
  distance?: number;
}) {
  return (
    <DockIcon
      mousex={mousex}
      magnification={magnification}
      distance={distance}
      className="group flex h-full w-full items-center justify-center"
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/cli"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-12"
            )}
          >
            <Terminal className="size-4" />
            <span className="sr-only">CLI Mode</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>CLI Mode</p>
        </TooltipContent>
      </Tooltip>
    </DockIcon>
  );
}
