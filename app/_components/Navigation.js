"use client";

import Link from "next/link";
import { navLinks } from "../_lib/constant";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-center gap-10">
      {navLinks.map((item) => (
        <Link
          href={item.href}
          className={`text-color-1 uppercase text-lg border-b-2 ${
            pathName.startsWith(item.href)
              ? "border-color-2"
              : "border-transparent hover:border-color-3"
          }   transition-all`}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
      <Link
        href="/api/auth/logout"
        className="text-color-1 uppercase text-lg border-b-2 border-transparent hover:border-color-3 transition-all"
      >
        Log Out
      </Link>
    </div>
  );
}

export default Navigation;
