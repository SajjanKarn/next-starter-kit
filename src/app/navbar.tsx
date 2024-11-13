import Link from "next/link";

const links = [
  {
    label: "Home",
    url: "/",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center gap-5 border p-5">
      <div>
        <h1 className="text-xl font-bold">Nextjs Starter 🌟</h1>
      </div>
      <div className="flex items-center gap-3">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="text-gray-800 hover:opacity-90"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
