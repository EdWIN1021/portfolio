import { useEffect, useState } from "react";
import Container from "./Container";
import IconButton from "./IconButton";

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
      <img
        className="rounded-2xl mx-auto"
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-3b344.appspot.com/o/32047952-21BC-443C-94A5-393035EEE550_1_105_c.jpeg?alt=media&token=26d32c1d-cef9-4b34-9b97-bb7e4f11b637"
        alt="avatar..."
        width={150}
        height={200}
      />

      <div className="text-center">
        <h1 className="text-[32px] font-bold mt-5">
          <p className="gradient_text">Hello, I'm Yang Shi (Edwin),</p>
          {!loading && <p className="text-[#f0f2f5]">{title}</p>}
        </h1>

        <p className="mt-5 text-[#f0f2f5] text-sm">
          Dynamic and qualified {title}. Adept in Computer Science education,
          project management and programming. Strong analytical skills,
          troubleshooting and problem-solving skills. Exceptional team player
          with superior communication skills.
        </p>

        <div className="flex gap-5 item-center mt-8 justify-center md:justify-start text-[#f0f2f5]">
          <div className="flex item-center gap-3">
            <img src="position.png" alt="position..." width={20} height={20} />
            <span>Canada</span>
          </div>

          <IconButton
            url={"https://www.linkedin.com/in/yang-shi-2781b015b/"}
            title={"linkedin"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
