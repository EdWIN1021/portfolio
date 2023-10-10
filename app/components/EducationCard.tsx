const EducationCard = () => {
  return (
    <div>
      <h3 className="text-[3vw] mb-8">Algoma University</h3>
      <p>Bachelor’s degree</p>
      <p>Science Specialized Computer Science (Honours)</p>
      <p>2015 - 2019</p>

      <div className="flex item-center gap-3 mt-8">
        <img
          className="w-[20px] h-full"
          src="/position.png"
          alt="position..."
        />
        <span>Sault Ste. Marie, Canada</span>
      </div>
    </div>
  );
};

export default EducationCard;
