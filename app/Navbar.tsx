"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillExperiment } from "react-icons/ai";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b border-zinc-600 mb-5 px-5 h-14 items-center">
      <Link className="text-3xl text-pink-600" href={"/"}>
        <AiFillExperiment />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ lable, href }) => (
          <li key={lable}>
            <Link
              className={classNames({
                "text-pink-600": currentPath === href,
                "text-zinc-500": currentPath !== href,
                "hover:text-pink-600": true,
              })}
              href={href}
            >
              {lable}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
