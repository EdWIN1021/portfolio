interface SkillCardProps {
  imgUrl: string;
  title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ imgUrl, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-[4vw] h-[4vw]" src={imgUrl} alt={`${title}...`} />
      <p>{title}</p>
    </div>
  );
};

export default SkillCard;
