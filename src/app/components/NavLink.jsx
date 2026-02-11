import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white transition-colors duration-300"
    >
      <span>{title}</span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );
};

export default NavLink;
