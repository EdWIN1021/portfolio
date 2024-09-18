import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-10">
          <Header />
          <div className="mt-10">
            <Outlet />
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
