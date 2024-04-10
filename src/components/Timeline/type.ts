export default interface TimelineCardProps {
  position: string;
  company: string;
  title: string;
  duration: string;
  details: string[];
  skills: Skill[];
}

interface Skill {
  name: string;
  color: string;
}
