"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();

  const navLinks = [
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "About",
      href: "/about",
    },
  ];
  return (
    <header className="header">
      <h1 className="text-2xl font-bold mr-4">
        <Link href="/">Next.js App</Link>
      </h1>
      <ul className="flex">
        {navLinks.map((link) => {
          const isActive = currentPath.startsWith(link.href);
          return (
            <li key={link.name} className="mr-4 ">
              <Link
                href={link.href}
                className={isActive ? "font-bold  mr-4" : "text-black-600 mr-4"}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
