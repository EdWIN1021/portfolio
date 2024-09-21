import React from "react";

import { Button } from "./ui/button";
import { scroller } from "react-scroll";

interface TableOfContentProps {
  details: {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
  }[];
}

const TableOfContent: React.FC<TableOfContentProps> = ({ details }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed hidden xl:block">
      <div className="flex flex-col">
        {details.map((detail) => (
          <Button
            key={detail?.title}
            variant="ghost"
            onClick={() => {
              scroller.scrollTo(detail?.title, {
                duration: 800,
                smooth: true,
                offset: -100,
              });
            }}
          >
            {detail?.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TableOfContent;
