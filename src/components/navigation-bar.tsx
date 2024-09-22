import * as React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

const webComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Library Management System",
    href: "/work-samples/library-management-system",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Twitter Clone",
    href: "/work-samples/twitter-clone",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Real-time Chat Application",
    href: "/work-samples/real-time-chat-application",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
];

const gameComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Shadow Knight",
    href: "/work-samples/shadow-knight",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Legend of Wukong",
    href: "/work-samples/legend-of-wukong",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

export function NavigationBar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mb-5">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Web Development</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {webComponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    onClick={() => navigate(component.href)}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Game Development</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {gameComponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    onClick={() => navigate(component.href)}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
