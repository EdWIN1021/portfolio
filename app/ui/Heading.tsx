interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h2
      className="text-[32px] font-bold text-center md:text-left"
      id={title.charAt(0).toLowerCase() + title.slice(1)}
    >
      <span className="gradient_text">{title}</span>
    </h2>
  );
};

export default Heading;
