import Link from "next/link";

const navItems = [
  { label: "Philosophy", href: "/philosophy" },
  { label: "Practice", href: "/practice" },
  { label: "Work With Me", href: "/programmes" },
];

export default function SiteNav({
  active,
}: {
  active?: "home" | "work" | "philosophy" | "practice";
}) {
  return (
    <header className="mx-auto max-w-6xl px-5 py-7 sm:px-8 lg:px-10">
      <nav className="border-b border-[#d8c7b6] pb-5">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
          <Link href="/" className="shrink-0 font-serif text-xl text-[#251d19]">
            Mindful Yogi
          </Link>

          <div className="ml-auto flex flex-wrap items-center justify-end gap-x-5 gap-y-3 text-base font-medium text-[#4c3d33] sm:gap-x-6 lg:gap-x-8">
            {navItems.map((item) => {
              const isActive =
                (active === "work" && item.href === "/programmes") ||
                (active === "philosophy" && item.href === "/philosophy") ||
                (active === "practice" && item.href === "/practice");

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`whitespace-nowrap transition hover:text-[#7b4f38] ${
                    isActive ? "text-[#7b4f38]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

        </div>
      </nav>
    </header>
  );
}
