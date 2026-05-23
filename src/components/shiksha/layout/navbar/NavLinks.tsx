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
            text-gray-700
            font-medium
            transition-all
            duration-300
            hover:text-green-600

            after:absolute
            after:left-0
            after:-bottom-2
            after:h-[2px]
            after:w-0
            after:bg-green-600
            after:transition-all
            after:duration-300

            hover:after:w-full
          "
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}