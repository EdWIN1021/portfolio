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
      "Developed a comprehensive Library Management System to manage library operations efficiently. The system includes features for user authentication, book transactions, inventory management, and fee processing.",
  },
  {
    title: "Twitter Clone",
    href: "/work-samples/twitter-clone",
    description:
      "This project is a full-stack web application that replicates the core functionalities of Twitter, including user authentication, posting tweets, following users, and real-time updates.",
  },
  {
    title: "Real-time Chat Application",
    href: "/work-samples/real-time-chat-application",
    description:
      "My project focuses on developing a real-time chat application designed to enhance user interaction through instant messaging capabilities. This application aims to provide a seamless experience for users, whether for personal conversations or professional collaborations.",
  },
];

const gameComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Shadow Knight",
    href: "/work-samples/shadow-knight",
    description:
      "Shadow Knight is a fast-paced 2D platform where players navigate through dark, atmospheric levels filled with enemies. The game follows the journey of a shadow warrior who fights against evil creatures.",
  },
  {
    title: "Legend of Wukong",
    href: "/work-samples/legend-of-wukong",
    description:
      "This game is an action-packed RPG inspired by Journey to the West, a classical Chinese mythological tale. Players take on the role of a legendary warrior, embarking on a quest through mystical lands, battling demons and mythical creatures using fast-paced, skill-based combat mechanics.",
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
