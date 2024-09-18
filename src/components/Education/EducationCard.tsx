const EducationCard = () => {
  return (
    <div className="my-5 basis-1/2 md:mr-2">
      <h3 className="text-4xl whitespace-nowrap">Algoma University</h3>

      <div className="my-5">
        <p>Bachelor’s degree</p>
        <p className="whitespace-nowrap">
          Science Specialized Computer Science (Honours)
        </p>
        <p>Cum Laude</p>
        <p>2015 - 2019</p>
      </div>

      <div className="flex item-center gap-3 justify-center md:justify-start">
        <img src="position.png" alt="position..." width={20} height={20} />
        <span>Sault Ste. Marie, Canada</span>
      </div>
    </div>
  );
};

export default EducationCard;
