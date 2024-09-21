import { Outlet, useLocation } from "react-router-dom";

const WorkSamplesLayout = () => {
  const location = useLocation();

  console.log(location.pathname);

  return <Outlet />;
};

export default WorkSamplesLayout;
