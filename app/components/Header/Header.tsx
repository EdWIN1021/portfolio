"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const downloadCV = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3b344.appspot.com/o/Yang%20Shi%20Resume.docx?alt=media&token=3c55a47b-a001-446c-8f3a-02d37257305a"
    );
  };

  const toggleMenu = () => {
    setShowMenu((pre) => !pre);
  };

  const sendTracker = async () => {
    try {
      await fetch("api/track", {
        method: "POST",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // sendTracker();
    console.log("a");
  }, []);

  return (
    <div className="w-full bg-[#161513]">
      <div className="hidden md:flex items-center justify-center p-5 max-w-5xl mx-auto">
        <div className="mr-10">
          <Link href={"/"}>
            <span className="font-bold text-xl tracking-widest whitespace-nowrap">
              {"<YS />"}
            </span>
          </Link>
        </div>

        <nav className="flex-1 flex gap-5 text-[#f0f2f5] text-sm">
          <Link className="hover:text-[#d9dbdb]" href={"/"}>
            <span>Home</span>
          </Link>

          <Link className="hover:text-[#d9dbdb]" href={"#education"}>
            <span>Education</span>
          </Link>

          <Link className="hover:text-[#d9dbdb]" href={"#experience"}>
            <span>Experience</span>
          </Link>

          <Link className="hover:text-[#d9dbdb]" href={"#skills"}>
            <span>Skills</span>
          </Link>

          <Link className="hover:text-[#d9dbdb]" href={"#contact"}>
            <span>Contact</span>
          </Link>
        </nav>

        <button
          className="bg-white hover:bg-[#d9dbdb] text-[#161513] px-5 py-1 font-medium text-sm rounded-full whitespace-nowrap "
          onClick={downloadCV}
        >
          Download CV
        </button>
      </div>

      <div className="flex items-center p-5 md:hidden">
        <img
          className="w-[30px] h-[30px] border-2 cursor-pointer rounded"
          src="/bar.png"
          alt="bar..."
          onClick={toggleMenu}
        />

        <Link className="flex-1" href={"/"}>
          <span className="font-bold text-[24px] tracking-widest whitespace-nowrap w-full inline-block text-center">
            {"<YS />"}
          </span>
        </Link>
      </div>

      {showMenu && (
        <nav className="text-[#f0f2f5] text-[16px] bg-[#1c1c22] p-2 md:hidden">
          <Link
            className="hover:bg-[#b0b0b0] block text-center mt-2"
            href={"/"}
          >
            <span>Home</span>
          </Link>

          <Link
            className="hover:bg-[#b0b0b0] block text-center mt-2"
            href={"#education"}
          >
            <span>Education</span>
          </Link>

          <Link
            className="hover:bg-[#b0b0b0] block text-center mt-2"
            href={"#experience"}
          >
            <span>Experience</span>
          </Link>

          <Link
            className="hover:bg-[#b0b0b0] block text-center mt-2"
            href={"#skills"}
          >
            <span>Skills</span>
          </Link>

          <Link
            className="hover:bg-[#b0b0b0] block text-center mt-2"
            href={"#contact"}
          >
            <span>Contact</span>
          </Link>

          <div
            className="hover:bg-[#b0b0b0] block text-center mt-2 cursor-pointer"
            onClick={downloadCV}
          >
            <span>Download CV</span>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
