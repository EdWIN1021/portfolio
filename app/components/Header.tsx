import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-center p-3 w-[80%] m-auto">
      <div className="mr-10">
        <Link href={"/"}>
          <span className="font-bold text-xl tracking-widest whitespace-nowrap  ">
            {"<YS />"}
          </span>
        </Link>
      </div>

      <nav className="flex-1 flex gap-5 text-[#f0f2f2] text-sm">
        <Link href={"/"}>
          <span>Home</span>
        </Link>

        <Link href={"/"}>
          <span>Services</span>
        </Link>

        <Link href={"/"}>
          <span>Experience</span>
        </Link>

        <Link href={"/"}>
          <span>Skills</span>
        </Link>
      </nav>

      <button className="bg-white text-[#161513] px-5 py-1 font-medium text-base rounded">
        Contact
      </button>
    </div>
  );
};

export default Header;
