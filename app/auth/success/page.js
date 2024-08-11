"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the dashboard after a brief delay
    setTimeout(() => {
      router.push("/events");
    }, 100);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center mt-24 gap-12">
      <p className="text-5xl text-color-3 tracking-wider">
        Authentication Successfull!
      </p>
      <p className="text-3xl">Redirecting...</p>
    </div>
  );
}
