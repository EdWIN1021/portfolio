import Educations from "../components/Education/Educations";
import { motion } from "framer-motion";

const EducationsPage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        exit={{ opacity: 1 }}
      >
        <Educations />
      </motion.div>
    </div>
  );
};

export default EducationsPage;
