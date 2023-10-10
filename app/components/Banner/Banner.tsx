import styles from "./styles.module.css";

const Banner = () => {
  return (
    <section className="flex flex-col items-center py-20 px-40 bg-[#161513]">
      <div>
        <img
          className="h-[250px] w-[200px] rounded-2xl"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-3b344.appspot.com/o/32047952-21BC-443C-94A5-393035EEE550_1_105_c.jpeg?alt=media&token=26d32c1d-cef9-4b34-9b97-bb7e4f11b637"
          alt="avatar..."
        />
      </div>

      <div className="text-center">
        <h1 className="text-[2.5vw] font-bold mt-5">
          <p className={styles.gradient_text}>Hello, I'm Yang Shi(Edwin),</p>
          <p>Front-end developer based in Canada.</p>
        </h1>

        <p className="mt-5 text-[#f0f2f5] text-sm">
          Dynamic and qualified frontend developer. Adept in Computer Science
          education, project management and programming. Strong analytical
          skills, troubleshooting and problem-solving skills. Exceptional team
          player with superior communication skills.
        </p>
      </div>
    </section>
  );
};

export default Banner;
