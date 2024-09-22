import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const data = [
  {
    name: "library-management-system",
    details: [
      {
        title: "Background",
        description:
          "Developed a comprehensive Library Management System to manage library operations efficiently. The system includes features for user authentication, book transactions, inventory management, and fee processing. I chose to submit this interactive software prototype because it effectively showcases my development skills in both front-end and back-end technologies.",
      },
      {
        title: "Role",
        description:
          "Responsible for full stack development and user experience design.",
      },
      {
        title: "Programming Languages",
        description: (
          <ul className="list-disc ml-10">
            <li>JavaScript/TypeScript</li>
          </ul>
        ),
      },
      {
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>Front-End: Next.js, React.js, NextAuth.js, Tailwind CSS</li>
            <li>Back-End: Next.js, Node.js</li>
            <li>Database: MongoDB, Mongoose.js</li>
          </ul>
        ),
      },
      {
        title: "Website Link",
        description: (
          <Link
            className="underline"
            to="https://library-management-system-teal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://library-management-system-teal.vercel.app/
          </Link>
        ),
      },
      {
        title: "Home Page",
        description: "",
        imgSrc: "lms/home.png",
      },
      {
        title: "Signup",
        description:
          "Users can sign up using email or log in with their Gmail or GitHub account.",
        imgSrc: "lms/signup.png",
      },
      {
        title: "Login",
        description:
          "Users can use email or login with their Gmail or GitHub account.",
        imgSrc: "lms/login.png",
      },
      {
        title: "Book List",
        description: "Display list of books.",
        imgSrc: "lms/book-list.png",
      },
      {
        title: "Book Detail",
        description:
          " Display basic book information, check stock availability, and borrow books.",
        imgSrc: "lms/book-detail.png",
      },

      {
        title: "Book Shelf",
        description: "Display a list of books that the user has borrowed.",
        imgSrc: "lms/book-shelf.png",
      },
      {
        title: "OTP",
        description:
          "The user needs to input the OTP that the system sent to their email.",
        imgSrc: "lms/otp.png",
      },
      {
        title: "Reset Password",
        description:
          "The user inputs a new password and confirms the new password to reset their password.",
        imgSrc: "lms/reset-password.png",
      },
      {
        title: "Settings",
        description: "Display the user's settings.",
        imgSrc: "lms/settings.png",
      },
      {
        title: "Payment",
        description: "The user makes a payment to cover the late fee.",
        imgSrc: "lms/payment.png",
      },
    ],
  },

  {
    name: "twitter-clone",
    details: [
      {
        title: "Home Page",
        description: "",
        imgSrc: "tc/home.png",
      },
      {
        title: "Sign in",
        description:
          "The user can sign in with their Google or GitHub account, or alternatively, use their own username and password for login.",
        imgSrc: "tc/signin.png",
      },
      {
        title: "Sign up",
        description: "Users can register an account using email.",
        imgSrc: "tc/signup.png",
      },
      {
        title: "Tweets",
        description:
          "The Tweets page displays all the tweets posted by the people you follow.",
        imgSrc: "tc/tweets.png",
      },
      {
        title: "Comments",
        description:
          "You can view the comments on a specific tweet or leave a comment on it.",
        imgSrc: "tc/comments.png",
      },
      {
        title: "Profile",
        description:
          "You can click on a user's profile picture to view their information and the tweets they have posted.",
        imgSrc: "tc/profile.png",
      },
      {
        title: "Replies",
        description: "You can view all of your replies.",
        imgSrc: "tc/replies.png",
      },
      {
        title: "Likes",
        description: "Users can view all the tweets they have liked.",
        imgSrc: "tc/likes.png",
      },
      {
        title: "Following",
        description: "View all the users you are following.",
        imgSrc: "tc/following.png",
      },
      {
        title: "Followers",
        description: "Show all your followers.",
        imgSrc: "tc/followers.png",
      },
    ],
  },
  {
    name: "real-time-chat-application",
    details: [
      {
        title: "Home Page",
        description:
          "Users have the option to sign in with their Google or GitHub accounts, or alternatively, they can use their personal username and password to log in.",
        imgSrc: "rca/home.png",
      },

      {
        title: "Send Request",
        description:
          "Users can send friend requests by using the other person's ID.",
        imgSrc: "rca/request.png",
      },
      {
        title: "Accept Request",
        description: "Display the list of requests.",
        imgSrc: "rca/accept.png",
      },
      {
        title: "Chat",
        description: "Once you add a friend, you can start chatting with them.",
        imgSrc: "rca/chat.png",
      },
    ],
  },
  {
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
        title: "Level-1",
        description: "",
        imgSrc: "sk/level-1.png",
      },
      {
        title: "Level-2",
        description: "",
        imgSrc: "sk/level-2.png",
      },
      {
        title: "Level-3",
        description: "",
        imgSrc: "sk/level-3.png",
      },
    ],
  },
  {
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
        title: "Lock on",
        description: "",
        imgSrc: "low/lock-on.png",
      },
      {
        title: "Box Trace",
        description:
          "Use a box trace to detect enemies and deal damage to them.",
        imgSrc: "low/box-trace.png",
      },
      {
        title: "AI Behavior Tree",
        description:
          "Enemies will patrol between the two target points and attack the player when they get close.",
        imgSrc: "low/ai.png",
      },
      {
        title: "Boss fight",
        description: "",
        imgSrc: "low/boss.png",
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
