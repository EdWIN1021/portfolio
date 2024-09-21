import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "library-management-system",
    details: [
      {
        id: 1,
        title: "Home Page",
        description: "",
        imgSrc: "lms/home.png",
      },
      {
        id: 2,
        title: "Signup",
        description:
          "Users can sign up using email or log in with their Gmail or GitHub account.",
        imgSrc: "lms/signup.png",
      },
      {
        id: 3,
        title: "Login",
        description:
          "Users can use email or login with their Gmail or GitHub account.",
        imgSrc: "lms/login.png",
      },
      {
        id: 4,
        title: "Book List",
        description: "Display list of books.",
        imgSrc: "lms/book-list.png",
      },
      {
        id: 5,
        title: "Book Detail",
        description:
          " Display basic book information, check stock availability, and borrow books.",
        imgSrc: "lms/book-detail.png",
      },

      {
        id: 6,
        title: "Book Shelf",
        description: "Display a list of books that the user has borrowed.",
        imgSrc: "lms/book-shelf.png",
      },
      {
        id: 7,
        title: "OTP",
        description:
          "The user needs to input the OTP that the system sent to their email.",
        imgSrc: "lms/otp.png",
      },
      {
        id: 8,
        title: "Reset Password",
        description:
          "The user inputs a new password and confirms the new password to reset their password.",
        imgSrc: "lms/reset-password.png",
      },
      {
        id: 9,
        title: "Settings",
        description: "Display the user's settings.",
        imgSrc: "lms/settings.png",
      },
      {
        id: 10,
        title: "Payment",
        description: "The user makes a payment to cover the late fee.",
        imgSrc: "lms/payment.png",
      },
    ],
  },

  {
    id: 1,
    name: "twitter-clone",
    details: [
      {
        id: 1,
        title: "Home Page",
        description: "",
        imgSrc: "tc/home.png",
      },
      {
        id: 2,
        title: "Sign in",
        description:
          "The user can sign in with their Google or GitHub account, or alternatively, use their own username and password for login.",
        imgSrc: "tc/signin.png",
      },
    ],
  },
];

export const useDetails = (projectId: string) => {
  const location = useLocation();
  const details: Detail[] = useMemo(() => {
    return data.find((item) => item.name === projectId)?.details || [];
  }, [location.pathname]);

  return { details };
};
