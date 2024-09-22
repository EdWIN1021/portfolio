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
    ],
  },

  {
    name: "twitter-clone",
    details: [
      {
        title: "Background",
        description:
          "This project is a full-stack web application that replicates the core functionalities of Twitter, including user authentication, posting tweets, following users, and real-time updates. The goal of this clone is to understand how large-scale social platforms manage data, handle user interactions, and ensure performance across a growing user base.",
      },
      {
        title: "Role",
        description:
          "Responsible for full stack development and optimized user experience design to deliver seamless, high-performance applications.",
      },
      {
        title: "Programming Languages",
        description: (
          <ul className="list-disc ml-10">
            <li>Javascript/Typescript</li>
            <li>SQL</li>
          </ul>
        ),
      },
      {
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>Front-End: React.js, Tailwind CSS</li>
            <li>Back-End: Node.js</li>
            <li>Database: Supabase, Postgresql</li>
          </ul>
        ),
      },
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
      {
        title: "Website Link",
        description: (
          <Link
            className="underline"
            to="https://twitter-clone-lake-five-57.vercel.app/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://twitter-clone-lake-five-57.vercel.app/#/
          </Link>
        ),
      },
    ],
  },
  {
    name: "real-time-chat-application",
    details: [
      {
        title: "Background",
        description:
          "My project focuses on developing a real-time chat application designed to enhance user interaction through instant messaging capabilities. This application aims to provide a seamless experience for users, whether for personal conversations or professional collaborations.",
      },
      {
        title: "Role",
        description:
          "Directed full stack development and enhanced user experience design, focusing on creating fluid, high-performance applications that meet user needs and drive engagement.",
      },
      {
        title: "Programming Languages",
        description: (
          <ul className="list-disc ml-10">
            <li>Javascript/Typescript</li>
          </ul>
        ),
      },
      {
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>Front-End: React.js, Material-UI</li>
            <li>Back-End: Node.js</li>
            <li>Database: Firebase, Firestore</li>
          </ul>
        ),
      },
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
      {
        title: "Website Link",
        description: (
          <Link
            className="underline"
            to="https://realtime-chat-app-green.vercel.app/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://realtime-chat-app-green.vercel.app/#/
          </Link>
        ),
      },
    ],
  },
  {
    name: "shadow-knight",
    details: [
      {
        title: "Demo",
        description: "",
        imgSrc:
          "https://www.youtube.com/embed/IODp9EFxwwI?mute=1&loop=1&controls=1&cc_load_policy=0&rel=0&vq=hd1080",
      },
      {
        title: "Background",
        description:
          "Shadow Knight is a fast-paced 2D platformer where players navigate through dark, atmospheric levels filled with enemies. The game follows the journey of a shadow warrior who fights against evil creatures.I chose this project because it allows me to showcase my understanding and application of Unreal Engine and PaperZD. Not only does it highlight my technical skills, but it also gives me the opportunity to further explore the practical use of these tools in game development, enhancing my proficiency.",
      },
      {
        title: "Genre",
        description: "2D Platformer",
      },
      {
        title: "Role",
        description: "Programmer",
      },
      {
        title: "Technical Highlights",
        description: (
          <ul className="list-disc ml-10">
            <li>
              I developed a comprehensive animation system for the player
              character by leveraging the Animation State Machine, ensuring
              seamless transitions between actions like running, jumping, and
              attacking, all driven by player input and in-game dynamics.
            </li>
            <li>
              To manage in-game interactions, I designed an event-driven system
              using delegates, which efficiently updated player health and other
              key game states.
            </li>
            <li>
              I utilized Unreal’s delegate system to coordinate various game
              events, such as monitoring player health changes.
            </li>
            <li>
              For combat mechanics, I implemented highly accurate hit detection
              and attack functionality using Unreal Engine’s collision system.
              By utilizing collision volumes and trace functions.
            </li>
          </ul>
        ),
      },
      {
        title: "Gameplay",
        description: (
          <ul className="list-disc ml-10">
            <li>
              Movement: Use the AD keys to move the character in two directions.
            </li>
            <li>
              Jumping: Press the Spacebar to jump, allowing the player to
              navigate platforming sections or evade enemy attacks.
            </li>
            <li>
              Players can gather various items throughout the levels. Health
              potions restore the player's health, essential for surviving tough
              battles, while keys unlock doors to next level.
            </li>
          </ul>
        ),
      },
      {
        title: "Programming Languages",
        description: (
          <ul className="list-disc ml-10">
            <li>C++</li>
            <li>Blueprint</li>
          </ul>
        ),
      },
      {
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>Unreal Engine</li>
            <li>PaperZD</li>
          </ul>
        ),
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
      {
        title: "Assets",
        description:
          "Shadow Knight utilizes assets from itch.io, including character sprites, backgrounds, and sound effects.",
      },
    ],
  },
  {
    name: "legend-of-wukong",
    details: [
      {
        title: "Demo",
        description: "",
        imgSrc:
          "https://www.youtube.com/embed/s4Hz_S2dqcE?si=hYQvmz1vunPs9SpM?mute=1&loop=1&controls=1&cc_load_policy=0&rel=0&vq=hd1080",
      },

      {
        title: "Background",
        description:
          "This game is an action-packed RPG inspired by Journey to the West, a classical Chinese mythological tale. Players take on the role of a legendary warrior, embarking on a quest through mystical lands, battling demons and mythical creatures using fast-paced, skill-based combat mechanics. I chose this project because it provided me with the opportunity to learn how to develop a third-person action game. From implementing character controls and animation state machines to designing complex AI behavior trees and collision detection systems, I gained hands-on experience with the essential aspects of third-person action game development. This project not only strengthened my programming skills but also deepened my understanding of how to integrate Unreal Engine’s physics engine with animation systems, creating fluid and impactful combat experiences.",
      },
      {
        title: "Genre",
        description: "RPG Action",
      },
      {
        title: "Role",
        description: "Programmer",
      },
      {
        title: "Technical Highlights",
        description: (
          <ul className="list-disc ml-10">
            <li>
              I developed a robust animation system for the player character,
              utilizing Animation State Machine to smoothly transition between
              running, jumping, and attacking animations based on player input
              and in-game conditions.
            </li>
            <li>
              I implemented a delegate-based event system to handle in-game
              interactions, such as player health updates.
            </li>
            <li>
              I implemented Unreal’s delegate system to manage various in-game
              events, such as handling player health updates and enemy AI
              responses.
            </li>
            <li>
              I implemented precise hit detection and attack mechanics using
              Unreal Engine’s collision system. To handle player attacks and
              enemy hit reactions, I used collision volumes and trace functions
              for accurate detection during fast-paced combat scenarios.
            </li>
            <li>
              I designed and implemented the enemy AI using Unreal Engine’s
              Behavior Tree system, allowing for intelligent and dynamic enemy
              actions.
            </li>
          </ul>
        ),
      },
      {
        title: "Gameplay",
        description: (
          <ul className="list-disc ml-10">
            <li>
              Movement: Use the WASD keys to move the character in four
              directions.
            </li>
            <li>
              Jumping: Press the Spacebar to jump, allowing the player to
              navigate platforming sections or evade enemy attacks.
            </li>
            <li>
              Lock on: Use F key activates a lock-on feature, enabling players
              to focus on specific enemies during combat.
            </li>
            <li>Sprint: Use the Left Shift key to sprint and move faster.</li>
          </ul>
        ),
      },
      {
        title: "Programming Languages",
        description: (
          <ul className="list-disc ml-10">
            <li>C++</li>
            <li>Blueprint</li>
          </ul>
        ),
      },
      {
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>Unreal Engine</li>
          </ul>
        ),
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
