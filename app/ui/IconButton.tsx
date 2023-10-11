"use client";

interface IconButtonProps {
  url: string;
  title: string;
}

const IconButton: React.FC<IconButtonProps> = ({ url, title }) => {
  return (
    <div onClick={() => window.open(url)}>
      <img
        className="w-[25px] h-full cursor-pointer"
        src={`/${title}.png`}
        alt={`${title}...`}
      />
    </div>
  );
};

export default IconButton;
