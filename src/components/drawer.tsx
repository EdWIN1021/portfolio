import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

interface DrawerProps {
  links: string[];
  formatLink: (link: string) => string;
}

const Drawer: React.FC<DrawerProps> = ({ links, formatLink }) => {
  const navigate = useNavigate();

  return (
    <div className="md:hidden z-[10]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <img className="w-5 h-5" src="bar.png" alt="bar" />
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"}>
          <div className="mt-5">
            {links.map((link) => (
              <SheetClose asChild key={link}>
                <Button
                  className="w-full"
                  variant="ghost"
                  onClick={() => navigate(formatLink(link))}
                >
                  {link}
                </Button>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Drawer;
