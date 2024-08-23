import Filter from "@/app/_components/Filter";
import { Suspense } from "react";
import EventsList from "../_components/EventsList";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Events",
};

export const revalidate = 0;

export default async function Page({ searchParams }) {
  const filter = searchParams?.location ?? "all";

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl text-color-1 uppercase self-start mt-7">
        Trending Events
      </h1>

      <div className="self-start my-3">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <EventsList filter={filter} />
      </Suspense>
    </div>
  );
}
