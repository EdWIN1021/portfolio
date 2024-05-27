import { useEffect, useState } from "react";
import Container from "./Container";
import IconButton from "./IconButton";
import { motion } from "framer-motion";

const Banner = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://portfolio-3b344-default-rtdb.firebaseio.com/title.json"
        );
        const data = await res.json();
        setTitle(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Container bgColor="#161513">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <img
          className="rounded-2xl mx-auto w-[150px] h-[200px]"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-3b344.appspot.com/o/32047952-21BC-443C-94A5-393035EEE550_1_105_c.jpeg?alt=media&token=26d32c1d-cef9-4b34-9b97-bb7e4f11b637"
          alt="avatar..."
        />

        <div className="flex flex-col items-center">
          <h1 className="text-[32px] font-bold mt-5">
            <p className="gradient_text text-center">
              Hello, I'm Yang Shi (Edwin),
            </p>
            {!loading && <p className="text-[#f0f2f5] text-center">{title}</p>}
          </h1>

          <p className="mt-5 text-[#f0f2f5] text-sm max-w-[800px]">
            &nbsp;&nbsp;Highly skilled Software Developer with a robust
            background in Computer Science and extensive experience in full
            stack web development. Proven ability to manage complex projects and
            deliver high-quality software solutions. Exceptional problem-solving
            and analytical skills with a strong focus on collaboration and
            communication. Seeking to leverage technical expertise and
            innovative approach in a challenging development role to drive
            technological advancements and business growth.
          </p>

          <div className="flex gap-5 item-center mt-8 justify-center md:justify-start text-[#f0f2f5]">
            <div className="flex item-center gap-3">
              <img
                src="position.png"
                alt="position..."
                width={20}
                height={20}
              />
              <span>Canada</span>
            </div>

            <IconButton
              url={"https://www.linkedin.com/in/yang-shi-2781b015b/"}
              title={"linkedin"}
            />
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Banner;
