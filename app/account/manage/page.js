import HostedEventBox from "@/app/_components/HostedEventBox";
import { useSession } from "@/app/_hooks/useSession";
import { getEventsHostedByUser } from "@/app/_lib/data-service";
import { BoltIcon, ClockIcon } from "@heroicons/react/24/solid";
import { isFuture, isPast } from "date-fns";

export const metadata = {
  title: "Your Hosted Events",
};

export const revalidate = 0;

export default async function Page() {
  const session = useSession();
  const events = await getEventsHostedByUser(session.userId);

  const futureEvents = events.filter((event) =>
    isFuture(new Date(event.date.split("-").join(", ")))
  );

  const pastEvents = events.filter((event) =>
    isPast(new Date(event.date.split("-").join(", ")))
  );

  return (
    <div className="text-lg font-light flex flex-col items-start justify-start gap-1 min-h-[70vh]">
      <h2 className="font-semibold text-3xl text-color-1 mb-2 ">
        Manage your events here
      </h2>
      <p className="mb-4 text-n-2">
        You can track RSVPs and communicate with your attendees by clicking on{" "}
        <span className="text-color-3">Guest List</span>. Click on the{" "}
        <span className="text-color-3">Edit</span> to make changes to your
        event.
      </p>
      {events.length === 0 && (
        <p className="mb-4 text-color-2 text-xl">
          You have not hosted any event!
        </p>
      )}

      {futureEvents.length > 0 && (
        <>
          <h4 className="text-2xl font-bold text-n-2 mt-6 mb-3 uppercase flex items-center justify-center gap-2">
            <span className="h-6 w-6 text-color-2">
              <BoltIcon />
            </span>{" "}
            Your Upcoming Events
          </h4>
          <div className="flex flex-wrap gap-4 items-center justify-start  w-full">
            {/* BOX */}
            {futureEvents.map((event) => (
              <HostedEventBox event={event} key={event.name} active={true} />
            ))}
          </div>
        </>
      )}

      {pastEvents.length > 0 && (
        <>
          <h4 className="text-2xl font-bold text-n-2 mt-14 mb-3 uppercase flex items-center justify-center gap-2">
            <span className="h-6 w-6 text-color-2">
              <ClockIcon />
            </span>{" "}
            In the Past :
          </h4>
          <div className="flex flex-wrap gap-4 items-center justify-start  w-full">
            {/* BOX */}
            {pastEvents.map((event) => (
              <HostedEventBox event={event} key={event.name} active={false} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
