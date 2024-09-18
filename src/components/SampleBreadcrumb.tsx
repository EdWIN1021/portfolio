import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon, SlashIcon } from "@radix-ui/react-icons";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SampleBreadcrumb = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const formatPathname = () => {
    const lastRouteName = pathName.split("/")[pathName.split("/").length - 1];
    console.log(lastRouteName);

    return lastRouteName
      .split("-")
      .map(
        (word: string) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
  };

  console.log(formatPathname());

  return (
    <div className="flex flex-col items-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Work Samples
                <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className="w-full"
                      to={"/work-samples/library-management-system"}
                    >
                      Library Management System
                    </Link>
                  </BreadcrumbLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <BreadcrumbLink asChild>
                    <Link className="w-full" to={"/work-samples/twitter-clone"}>
                      Twitter Clone
                    </Link>
                  </BreadcrumbLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <BreadcrumbLink asChild>
                    <Link className="w-full" to={"/work-samples/twitter-clone"}>
                      Realtime Chat App
                    </Link>
                  </BreadcrumbLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BreadcrumbLink asChild>
                    <Link className="w-full" to={"/work-samples/twitter-clone"}>
                      Game1
                    </Link>
                  </BreadcrumbLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BreadcrumbLink asChild>
                    <Link className="w-full" to={"/work-samples/twitter-clone"}>
                      Game2
                    </Link>
                  </BreadcrumbLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{formatPathname()}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default SampleBreadcrumb;
