import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-vertical-timeline-component/style.min.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Resume from "./routes/resume";
import WorkSamplesPage from "./routes/work-samples";
import SkillsPage from "./routes/skills";
import EducationsPage from "./routes/educations";
import ContactPage from "./routes/contact";
import HomePage from "./routes/home";
import LMS from "./routes/lms";
import { ThemeProvider } from "@/components/theme-provider";
import WorkSamplesLayout from "./layouts/WorkSamplesLayout";
import RootLayout from "@/layouts/RootLayout";
import TwitterClone from "./routes/twitter-clone";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "resume/",
        element: <Resume />,
      },
      {
        path: "work-samples/",
        element: <WorkSamplesLayout />,
        children: [
          {
            index: true,
            element: <WorkSamplesPage />,
          },
          {
            path: "library-management-system/",
            element: <LMS />,
          },
          {
            path: "twitter-clone/",
            element: <TwitterClone />,
          },
        ],
      },
      {
        path: "skills/",
        element: <SkillsPage />,
      },
      {
        path: "educations/",
        element: <EducationsPage />,
      },
      {
        path: "contact/",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
