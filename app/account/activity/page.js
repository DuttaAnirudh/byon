import ActivityBox from "@/app/_components/ActivityBox";
import { useSession } from "@/app/_hooks/useSession";
import { getBookings } from "@/app/_lib/data-service";
import { BoltIcon, ClockIcon } from "@heroicons/react/24/solid";
import { isFuture, isPast } from "date-fns";
import Link from "next/link";

export const metadata = {
  title: "Your Activity",
};

export default async function Page() {
  const session = useSession();
  const bookings = await getBookings(session.userId);

  const futureBookings = bookings.filter((booking) =>
    isFuture(new Date(booking.eventDate.split("-").join(", ")))
  );

  const pastBookings = bookings.filter((booking) =>
    isPast(new Date(booking.eventDate.split("-").join(", ")))
  );

  return (
    <div className=" flex flex-col items-start justify-start gap-1 ">
      <h3 className="font-semibold text-2xl text-color-1  capitalize">
        List of your Shenanigans
      </h3>

      {futureBookings.length > 0 && (
        <>
          <h4 className="text-2xl font-bold text-n-2 mt-14 mb-3 uppercase flex items-center justify-center gap-2">
            <span className="h-6 w-6 text-color-2">
              <BoltIcon />
            </span>{" "}
            Your Upcoming Events
          </h4>
          <div className="flex flex-wrap gap-4 items-center justify-start  w-full">
            {/* BOX */}
            {futureBookings.map((booking) => (
              <Link href={`/events/${booking.eventId}`} key={booking.id}>
                <ActivityBox booking={booking} />
              </Link>
            ))}
          </div>
        </>
      )}

      {pastBookings.length > 0 && (
        <>
          <h4 className="text-2xl font-bold text-n-2 mt-14 mb-3 uppercase flex items-center justify-center gap-2">
            <span className="h-6 w-6 text-color-2">
              <ClockIcon />
            </span>{" "}
            In the Past :
          </h4>
          <div className="flex flex-wrap gap-4 items-center justify-start  w-full">
            {/* BOX */}
            {pastBookings.map((booking) => (
              <ActivityBox booking={booking} key={booking.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
