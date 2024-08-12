import Link from "next/link";
import { dancingScript } from "../layout";
import { useSession } from "../_hooks/useSession";
import Navigation from "./Navigation";

export const revalidate = 0;

function Header() {
  const session = useSession();

  return (
    <header className="flex items-center justify-between w-full max-[1440px]:px-4 ">
      <Link href="/">
        <h1
          className={`${dancingScript.className} font-extrabold text-4xl text-color-3`}
        >
          B.Y.O.N
        </h1>{" "}
      </Link>
      {!session && (
        <Link
          href="/login"
          className="text-color-1 uppercase text-lg border-b-2 border-transparent hover:border-color-3 transition-all"
        >
          Log in
        </Link>
      )}

      {session && <Navigation />}
    </header>
  );
}

export default Header;
