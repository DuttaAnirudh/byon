import { unstable_noStore as noStore } from "next/cache";
import Carousel from "./Carousel";
import { getEvents } from "@/app/_lib/data-service";
import { isFuture, isToday } from "date-fns";

export const revalidate = 0;

export default async function EventsList({ filter }) {
  noStore();

  const events = await getEvents();

  // GETTING A LIST OF FUTURE EVENTS
  const futureEvents = events.filter((event) => isFuture(new Date(event.date)));

  let eventsList;

  if (filter === "all") {
    eventsList = futureEvents;
  }
  if (filter === "delhi-ncr") {
    eventsList = futureEvents?.filter((event) => event.city === "Delhi NCR");
  }
  if (filter === "mumbai") {
    eventsList = futureEvents?.filter((event) => event.city === "Mumbai");
  }
  if (filter === "bangalore") {
    eventsList = futureEvents?.filter((event) => event.city === "Bangalore");
  }

  return (
    <div
      className="grid justify-center items-end gap-x-16 gap-y-6 w-full"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 12rem))",
      }}
    >
      {eventsList?.map((event) => (
        <Carousel event={event} key={event.name} />
      ))}

      {eventsList?.length === 0 && (
        <div className="col-span-full">
          <h4 className="text-center text-n-13 text-3xl mt-20 ">
            Its so empty here. Looks like no is partying :/
          </h4>
        </div>
      )}
    </div>
  );
}
