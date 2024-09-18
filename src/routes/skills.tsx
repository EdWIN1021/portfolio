import Carousel from "../components/Carousel";
import { motion } from "framer-motion";

const SkillsPage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        exit={{ opacity: 1 }}
      >
        <Carousel />
      </motion.div>
    </div>
  );
};

export default SkillsPage;
