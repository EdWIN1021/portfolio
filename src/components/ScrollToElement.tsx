import { Link } from "react-scroll";

interface ScrollToElementProps {
  to: string;
}
const ScrollToElement: React.FC<ScrollToElementProps> = ({ to }) => {
  return (
    <Link
      className="w-full block whitespace-nowrap text-center"
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-90}
    >
      {to}
    </Link>
  );
};

export default ScrollToElement;
