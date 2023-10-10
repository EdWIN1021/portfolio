import EducationCard from "./EducationCard";

const Educations = () => {
  return (
    <section className="bg-[#161513] px-40 py-20">
      <h2 className="text-[2vw] font-bold" id="education">
        <span className="gradient_text">Education</span>
      </h2>

      <div className="flex justify-between">
        <EducationCard />
        <img
          className="w-[400px] h-[200px]"
          src="https://algomau.ca/wp-content/uploads/2018/11/6.3-Our-Campuses-Overview-SSM-Header-1.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Educations;
