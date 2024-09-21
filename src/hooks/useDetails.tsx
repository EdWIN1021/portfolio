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
    id: 2,
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
      {
        id: 3,
        title: "Sign up",
        description: "Users can register an account using email.",
        imgSrc: "tc/signup.png",
      },
      {
        id: 4,
        title: "Tweets",
        description:
          "The Tweets page displays all the tweets posted by the people you follow.",
        imgSrc: "tc/tweets.png",
      },
      {
        id: 5,
        title: "Comments",
        description:
          "You can view the comments on a specific tweet or leave a comment on it.",
        imgSrc: "tc/comments.png",
      },
      {
        id: 6,
        title: "Profile",
        description:
          "You can click on a user's profile picture to view their information and the tweets they have posted.",
        imgSrc: "tc/profile.png",
      },
      {
        id: 7,
        title: "Replies",
        description: "You can view all of your replies.",
        imgSrc: "tc/replies.png",
      },
      {
        id: 8,
        title: "Likes",
        description: "Users can view all the tweets they have liked.",
        imgSrc: "tc/likes.png",
      },
      {
        id: 9,
        title: "Following",
        description: "View all the users you are following.",
        imgSrc: "tc/following.png",
      },
      {
        id: 10,
        title: "Followers",
        description: "Show all your followers.",
        imgSrc: "tc/followers.png",
      },
    ],
  },
  {
    id: 3,
    name: "real-time-chat-application",
    details: [
      {
        id: 1,
        title: "Home Page",
        description:
          "Users have the option to sign in with their Google or GitHub accounts, or alternatively, they can use their personal username and password to log in.",
        imgSrc: "rca/home.png",
      },

      {
        id: 2,
        title: "Send Request",
        description:
          "Users can send friend requests by using the other person's ID.",
        imgSrc: "rca/request.png",
      },
      {
        id: 3,
        title: "Accept Request",
        description: "Display the list of requests.",
        imgSrc: "rca/accept.png",
      },
      {
        id: 4,
        title: "Chat",
        description: "Once you add a friend, you can start chatting with them.",
        imgSrc: "rca/chat.png",
      },
    ],
  },
  {
    id: 4,
    name: "shadow-knight",
    details: [
      {
        id: 0,
        title: "Demo",
        description: "",
        imgSrc:
          "https://www.youtube.com/embed/IODp9EFxwwI?mute=1&loop=1&controls=1&cc_load_policy=0&rel=0&vq=hd1080",
      },
      {
        id: 1,
        title: "Level-1",
        description: "",
        imgSrc: "sk/level-1.png",
      },
      {
        id: 2,
        title: "Level-2",
        description: "",
        imgSrc: "sk/level-2.png",
      },
      {
        id: 3,
        title: "Level-3",
        description: "",
        imgSrc: "sk/level-3.png",
      },
    ],
  },
  {
    id: 5,
    name: "legend-of-wukong",
    details: [
      {
        id: 0,
        title: "Demo",
        description: "",
        imgSrc:
          "https://www.youtube.com/embed/s4Hz_S2dqcE?si=hYQvmz1vunPs9SpM?mute=1&loop=1&controls=1&cc_load_policy=0&rel=0&vq=hd1080",
      },
      {
        id: 1,
        title: "Lock on",
        description: "",
        imgSrc: "low/boss.png",
      },
      {
        id: 2,
        title: "Box Trace",
        description:
          "Use a box trace to detect enemies and deal damage to them.",
        imgSrc: "low/box-trace.png",
      },
      {
        id: 3,
        title: "AI Behavior Tree",
        description:
          "Enemies will patrol between the two target points and attack the player when they get close.",
        imgSrc: "low/ai.png",
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


