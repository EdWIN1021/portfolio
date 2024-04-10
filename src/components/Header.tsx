import { useState } from "react";

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

  return (
    <div className="w-full bg-[#161513]">
      <div className="hidden md:flex items-center justify-center p-5 max-w-5xl mx-auto">
        <div className="mr-10">
          <span className="font-bold text-xl tracking-widest whitespace-nowrap">
            {"<YS />"}
          </span>
        </div>

        <nav className="flex-1 flex gap-5 text-[#f0f2f5] text-sm">
          <span>Home</span>

          <span>Education</span>

          <span>Experience</span>

          <span>Projects</span>

          <span>Skills</span>

          <span>Contact</span>
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
          className="border-2 cursor-pointer rounded"
          src="/bar.png"
          alt="bar..."
          height={30}
          width={30}
          onClick={toggleMenu}
        />

        <span className="font-bold text-[24px] tracking-widest whitespace-nowrap w-full inline-block text-center">
          {"<YS />"}
        </span>
      </div>

      {showMenu && (
        <nav className="text-[#f0f2f5] text-[16px] bg-[#1c1c22] p-2 md:hidden">
          <span>Home</span>

          <span>Education</span>

          <span>Experience</span>

          <span>Skills</span>

          <span>Contact</span>

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
