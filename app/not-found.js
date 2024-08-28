import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Page() {
  return (
    <main className=" flex flex-col items-center justify-start gap-2 mt-20">
      <h2 className="text-5xl text-color-2  text-center">
        Page Not Found 404 :(
      </h2>

      <p className="mt-10 text-2xl font-light flex items-end gap-2 text-n-1">
        Go back to{" "}
        <Link
          href="/"
          className="text-color-2 hover:text-color-3 font-medium underline underline-offset-4 flex items-end gap-1"
        >
          <span className="h-6 w-6">
            <HomeIcon />
          </span>
          Homepage
        </Link>
      </p>
    </main>
  );
}
