import Container from "../../ui/Container";
import IconButton from "../../ui/IconButton";

const Banner = () => {
  return (
    <Container bgColor="#161513">
      <img
        className="h-[200px] w-[150px] rounded-2xl mx-auto"
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-3b344.appspot.com/o/32047952-21BC-443C-94A5-393035EEE550_1_105_c.jpeg?alt=media&token=26d32c1d-cef9-4b34-9b97-bb7e4f11b637"
        alt="avatar..."
      />

      <div className="text-center">
        <h1 className="text-[32px] font-bold mt-5">
          <p className="gradient_text">Hello, I'm Yang Shi (Edwin),</p>
          <p>Software Engineer</p>
        </h1>

        <p className="mt-5 text-[#f0f2f5] text-sm">
          Dynamic and qualified frontend developer. Adept in Computer Science
          education, project management and programming. Strong analytical
          skills, troubleshooting and problem-solving skills. Exceptional team
          player with superior communication skills.
        </p>

        <div className="flex gap-5 item-center mt-8 justify-center md:justify-start">
          <div className="flex item-center gap-3">
            <img
              className="w-[20px] h-full"
              src="/position.png"
              alt="position..."
            />
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
