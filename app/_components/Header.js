import Link from "next/link";
import { dancingScript } from "../layout";

function Header() {
  return (
    <header className="flex items-center justify-between w-full">
      <Link href="/">
        <h1
          className={`${dancingScript.className} font-extrabold text-4xl text-color-3`}
        >
          B.Y.O.N
        </h1>{" "}
      </Link>
      <Link
        href="/login"
        className="text-color-1 uppercase text-lg border-b-2 border-transparent hover:border-color-3 transition-all"
      >
        Log in
      </Link>
    </header>
  );
}

export default Header;
