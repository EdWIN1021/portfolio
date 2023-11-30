"use client";

import Image from "next/image";

interface IconButtonProps {
  url: string;
  title: string;
}

const IconButton: React.FC<IconButtonProps> = ({ url, title }) => {
  return (
    <div onClick={() => window.open(url)}>
      <Image
        className=" cursor-pointer"
        src={`/${title}.png`}
        alt={`${title}...`}
        width={25}
        height={25}
      />
    </div>
  );
};

export default IconButton;
