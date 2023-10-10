"use client";

import Link from "next/link";

const Header = () => {
  const downloadCV = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3b344.appspot.com/o/Yang%20Shi%20Resume.docx?alt=media&token=3c55a47b-a001-446c-8f3a-02d37257305a"
    );
  };

  return (
    <div className="flex items-center justify-center p-3">
      <div className="mr-10">
        <Link href={"/"}>
          <span className="font-bold text-xl tracking-widest whitespace-nowrap  ">
            {"<YS />"}
          </span>
        </Link>
      </div>

      <nav className="flex-1 flex gap-5 text-[#f0f2f5] text-sm">
        <Link className="hover:text-[#d9dbdb]" href={"/"}>
          <span>Home</span>
        </Link>

        <Link className="hover:text-[#d9dbdb]" href={"/"}>
          <span>Services</span>
        </Link>

        <Link className="hover:text-[#d9dbdb]" href={"/"}>
          <span>Experience</span>
        </Link>

        <Link className="hover:text-[#d9dbdb]" href={"/"}>
          <span>Skills</span>
        </Link>

        <Link className="hover:text-[#d9dbdb]" href={"/"}>
          <span>Contact</span>
        </Link>
      </nav>

      <button
        className="bg-white hover:bg-[#d9dbdb] text-[#161513] px-5 py-1 font-medium text-sm rounded-full"
        onClick={downloadCV}
      >
        Download CV
      </button>
    </div>
  );
};

export default Header;
