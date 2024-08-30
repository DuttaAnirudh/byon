"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { accountLinks } from "../_lib/constant";
import SignOutButton from "./SignOutButton";

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-n-2 min-h-[83vh]">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {accountLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5  transition-colors flex items-center gap-4 font-semibold  uppercase border-b border-n-2 
                ${
                  pathname === link.href
                    ? "text-color-3"
                    : "text-n-2 hover:bg-color-3 hover:text-color-1"
                }`}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}

        <div className="mt-auto">
          <SignOutButton />
        </div>
      </ul>
    </nav>
  );
}

export default SideNavigation;
