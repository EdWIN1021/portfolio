import React from "react";

import { Button } from "./ui/button";

interface TableOfContentProps {
  titles: string[];
}

const TableOfContent: React.FC<TableOfContentProps> = ({ titles }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed hidden xl:block">
      <div className="flex flex-col">
        {titles.map((title: string) => (
          <Button
            key={title}
            variant="ghost"
            onClick={() => scrollToSection(title)}
          >
            {title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TableOfContent;
