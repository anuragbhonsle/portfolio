import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags?: string[];
  image?: string;
  video?: string;
  links?: {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "w-full flex flex-col overflow-hidden rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 ease-out h-full relative group",
        className,
      )}
    >
      {/* Media Section */}
      <a
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer shrink-0"
      >
        <div className="w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-muted">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
            />
          ) : image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-xs font-medium">
                No Media
              </span>
            </div>
          )}
        </div>
      </a>

      {/* Header Area - flex-grow pushes everything below it down evenly */}
      <CardHeader className="px-4 pt-3 pb-2 flex-grow flex flex-col gap-1.5">
        <CardTitle className="text-sm sm:text-base font-semibold line-clamp-2 tracking-tight">
          {title}
        </CardTitle>
        <time className="font-sans text-[10px] sm:text-xs text-muted-foreground block">
          {dates}
        </time>
        <p className="text-[11px] sm:text-xs text-muted-foreground/90 line-clamp-3 mt-0.5 leading-relaxed">
          {description}
        </p>
      </CardHeader>

      {/* Tags Content Area - acts as a buffer layer */}
      <CardContent className="px-4 py-2 flex-grow-0 mt-auto">
        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="px-2 py-0.5 text-[9px] sm:text-[10px] rounded-full font-normal pointer-events-none"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        ) : (
          /* Empty spacer keeping vertical rhythm identical if tags are missing */
          <div className="h-4" />
        )}
      </CardContent>

      {/* Footer Links - cleanly pinned to the absolute bottom */}
      {links && links.length > 0 && (
        <CardFooter className="px-4 pt-2 pb-4 flex flex-wrap gap-1.5 mt-auto">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Badge
                className={cn(
                  "flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-medium rounded-full transition-colors border",
                  "bg-background text-foreground border-border hover:bg-muted",
                  "dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80",
                )}
              >
                {link.icon}
                <span>{link.type}</span>
              </Badge>
            </a>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
