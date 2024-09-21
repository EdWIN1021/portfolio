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

      <img src={detail?.imgSrc} alt={detail.title} width={800} height={450} />
    </div>
  );
};

export default ProjectDetail;
