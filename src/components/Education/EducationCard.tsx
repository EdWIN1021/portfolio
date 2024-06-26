const EducationCard = () => {
  return (
    <div className="text-[#f0f2f5]">
      <h3 className="text-[32px] mb-8">Algoma University</h3>
      <p>Bachelor’s degree</p>
      <p>Science Specialized Computer Science (Honours)</p>
      <p>2015 - 2019</p>

      <div className="flex item-center gap-3 mt-8 justify-center md:justify-start">
        <img src="position.png" alt="position..." width={20} height={20} />
        <span>Sault Ste. Marie, Canada</span>
      </div>
    </div>
  );
};

export default EducationCard;
