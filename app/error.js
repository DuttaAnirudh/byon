"use client";

import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-start gap-2 mt-20">
      <h1 className="text-5xl text-color-2  text-center capitalize">
        Something went wrong!
      </h1>
      <p className="text-2xl mt-10 text-n-1 font-light">
        &ldquo; {error.message} &rdquo;
      </p>

      <div className="mt-8 flex items-center justify-center gap-8">
        <button
          onClick={reset}
          className="inline-block hover:bg-color-1 text-n-1 
        px-3 py-1 rounded-lg border border-color-1 text-lg"
        >
          Try Again
        </button>

        <p>or</p>

        <button
          onClick={() => router.back()}
          className="inline-block hover:bg-color-1 text-n-1 
        px-3 py-1 rounded-lg border border-color-1 text-lg"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}
