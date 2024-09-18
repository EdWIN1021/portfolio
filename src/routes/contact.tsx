import Contact from "../components/Contact/Contact";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        exit={{ opacity: 1 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default ContactPage;
