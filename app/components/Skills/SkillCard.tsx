import Image from "next/image";
import SkillCardProps from "./type";

const SkillCard: React.FC<SkillCardProps> = ({ imgUrl, title }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="w-[4vw] h-[4vw]"
        src={imgUrl}
        alt={`${title}...`}
        width={70}
        height={70}
      />
      <p>{title}</p>
    </div>
  );
};

export default SkillCard;
