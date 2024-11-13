import Link from "next/link";

import { Package } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  {
    label: "Home",
    url: "/",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border p-5">
      <div className="flex items-center justify-center gap-3">
        <h1 className="flex items-center justify-center gap-2 text-xl font-bold">
          {" "}
          <Package /> Nextjs Starter
        </h1>

        <div className="flex items-center gap-3">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-gray-800 hover:opacity-90 dark:text-gray-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};
export default Navbar;
