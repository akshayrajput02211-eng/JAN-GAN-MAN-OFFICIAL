const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Teachers",
    href: "/teachers",
  },
  {
    name: "Live Classes",
    href: "/live-classes",
  },
  {
    name: "Notes",
    href: "/notes",
  },
  {
    name: "Ask Doubts",
    href: "/doubts",
  },
];

export default function NavLinks() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="
            relative

            font-medium
            text-gray-700

            transition-all
            duration-300

            hover:text-blue-600

            dark:text-slate-300
            dark:hover:text-blue-400

            after:absolute
            after:left-0
            after:-bottom-2
            after:h-[2px]
            after:w-0
            after:rounded-full
            after:bg-blue-600
            after:transition-all
            after:duration-300

            dark:after:bg-blue-400

            hover:after:w-full
          "
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}