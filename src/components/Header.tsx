import ScrollToElement from "./ScrollToElement";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Drawer from "./drawer";

const links = ["Home", "Work Samples", "Skills", "Educations", "Contact"];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const formatLink = (link: string) => {
    switch (link) {
      case "Home":
        return "/";
      case "Work Samples":
        return "/work-samples";
      default:
        return `/${link.toLocaleLowerCase()}`;
    }
  };

  const downloadCV = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3b344.appspot.com/o/YangShi-Resume.docx?alt=media&token=7509fea1-6819-46a4-a8bb-e72354851a03"
    );
  };

  return (
    <div className="sticky top-0 z-40 border-b bg-zinc-950">
      <div className="flex items-center justify-center py-5">
        <div className="flex-1">
          <span className="font-bold text-xl tracking-widest whitespace-nowrap gradient_text">
            {"<YS />"}
          </span>
        </div>

        {location?.pathname === "/resume" ? (
          <>
            <nav className="mr-10">
              <ul className="flex gap-5 text-md">
                <ScrollToElement to={"Experience"} />
                <ScrollToElement to={"Education"} />
                <ScrollToElement to={"Projects"} />
                <ScrollToElement to={"Skills"} />
                <ScrollToElement to={"Contact"} />
              </ul>
            </nav>

            <button
              className="px-5 py-1 font-medium text-sm rounded-full whitespace-nowrap "
              onClick={downloadCV}
            >
              Download CV
            </button>
          </>
        ) : (
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5">
              {links.map((link) => (
                <Button
                  key={link}
                  className="w-full"
                  variant="link"
                  onClick={() => navigate(formatLink(link))}
                >
                  {link}
                </Button>
              ))}
            </ul>
          </nav>
        )}
        <Drawer links={links} formatLink={formatLink} />
      </div>
    </div>
  );
};

export default Header;
