import Container from "../components/Container";
import Heading from "../components/Heading";
import WorkSamples from "../components/WorkSamples/WorkSamples";

const WorkSamplesPage = () => {
  return (
    <div>
      <Container>
        <Heading title="Work Samples" />
        <WorkSamples />
      </Container>
    </div>
  );
};

export default WorkSamplesPage;
