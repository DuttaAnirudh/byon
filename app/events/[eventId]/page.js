import BookingButton from "@/app/_components/BookingButton";
import { useSession } from "@/app/_hooks/useSession";
import { getEvent, userHasBooked } from "@/app/_lib/data-service";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { name } = await getEvent(params.eventId);
  return { title: `${name}` };
}

export const revalidate = 0;

export default async function Page({ params }) {
  const session = useSession();
  if (!session) {
    throw new Error("You need to Log In");
  }

  const event = await getEvent(params.eventId);
  const {
    id,
    name,
    date,
    time,
    location,
    city,
    totalPass,
    remainingPass,
    price,
    image,
    hostId,
    description,
  } = event;

  // Checking if the user has already booked the event
  // If YES, not allowing the user to book the event again
  const userBookings = await userHasBooked(session.userId);
  const userIsBooked =
    userBookings.filter((booking) => booking.eventId === +params.eventId)
      .length !== 0;

  return (
    <section className="flex  items-start gap-[2.5rem] mb-4 mt-7">
      <div className="relative h-[27rem] w-[18rem] rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={`${name} poster`}
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-col items-start justify-end gap-1 min-h-[27rem] flex-1">
        <h1 className="text-5xl font-semibold text-color-3">{name}</h1>
        <h3 className="font-light flex items-center justify-center gap-1">
          <span className="h-4 w-4 text-color-1">
            <MapPinIcon />
          </span>{" "}
          {location}, {city}
        </h3>
        <p className="font-medium text-color-3 py-3">
          {format(new Date(date.split("-").join(", ")), "EEE dd MMM yyyy")} at{" "}
          {format(new Date([2024, 8, 15, time].join(", ")), "h:mm bb")}
        </p>
        <p className="font-light w-[75%]">{description}</p>
        <p className="font-semibold text-color-3 text-3xl pt-3 tracking-wider self-end">
          {price > 0 ? `₹${price}/-` : "FREE"}
        </p>
        {remainingPass < 25 && totalPass > 0 && (
          <p className="font-extralight text-sm text-color-1 uppercase self-end">
            only {remainingPass} passes left!
          </p>
        )}
        {totalPass > 0 && !userIsBooked && (
          <div className="my-3 self-end">
            <BookingButton session={session} event={event} />
          </div>
        )}
        {totalPass > 0 && userIsBooked && (
          <div className="my-3 self-end">
            <button
              disabled
              className="border font-bold text-2xl px-3 py-2 
        rounded-lg border-n-1 transition-all my-3 self-end uppercase"
            >
              Already Booked
            </button>
          </div>
        )}
        {totalPass <= 0 && (
          <button
            disabled
            className="border font-bold text-2xl px-3 py-2 w-[10rem] 
        rounded-lg border-n-1 transition-all my-3 self-end uppercase"
          >
            Sold Out
          </button>
        )}
      </div>
    </section>
  );
}
