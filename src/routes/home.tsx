import Banner from "../components/Banner";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      exit={{ opacity: 1 }}
    >
      <Banner />

      {/* <div>
        <Button>Click me</Button>
        <ModeToggle />
      </div> */}
    </motion.div>
  );
};

export default HomePage;
