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
        "flex flex-col overflow-hidden rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 ease-out h-full relative group",
        className
      )}
    >
      <a
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        <div className="w-full aspect-[16/9] overflow-hidden rounded-t-2xl">
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
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <span className="text-gray-500 text-sm">No Media</span>
            </div>
          )}
        </div>
      </a>

      <CardHeader className="px-3 pt-3">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <time className="font-sans text-xs text-muted-foreground">{dates}</time>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-3">
          {description}
        </p>
      </CardHeader>

      {tags && tags.length > 0 && (
        <CardContent className="px-3 mt-1">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="px-2 py-0.5 text-[10px] rounded-full"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      )}

      {links && links.length > 0 && (
        <CardFooter className="px-3 pb-3 flex flex-wrap gap-2">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge
                className={cn(
                  "flex gap-1 px-3 py-1 text-[11px] font-medium rounded-full transition-colors",
                  "bg-white text-gray-800 hover:bg-gray-200",
                  "dark:bg-black dark:text-white dark:hover:bg-gray-800"
                )}
              >
                {link.icon}
                {link.type}
              </Badge>
            </a>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
