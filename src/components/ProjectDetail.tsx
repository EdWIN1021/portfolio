interface DetailProps {
  detail: Detail;
}

const ProjectDetail: React.FC<DetailProps> = ({ detail }) => {
  return (
    <div>
      <h2 className="font-semibold text-2xl" id={detail?.title}>
        {detail.title}
      </h2>

      <p className="my-5">{detail?.description}</p>

      {detail.imgSrc.includes("youtube") ? (
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
            src={detail.imgSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            title={`Video: ${detail.title}`}
          ></iframe>
        </div>
      ) : (
        <div>
          <img
            src={detail?.imgSrc}
            alt={detail?.description || "Project image"}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;

{
}
