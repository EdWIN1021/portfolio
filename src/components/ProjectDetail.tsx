interface DetailProps {
  detail: Detail;
}

const ProjectDetail: React.FC<DetailProps> = ({ detail }) => {
  return (
    <>
      <div>
        <h2 className="font-semibold text-2xl" id={detail?.title}>
          {detail.title}
        </h2>

        <p className="my-5">{detail?.description}</p>

        {detail.imgSrc.includes("youtube") ? (
          <iframe
            className="w-[800px] h-[450px]"
            src={detail.imgSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={detail?.imgSrc}
            alt={detail.title}
            width={800}
            height={450}
          />
        )}
      </div>
    </>
  );
};

export default ProjectDetail;
