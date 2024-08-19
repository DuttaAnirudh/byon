import Carousel from "@/app/_components/Carousel";
import { useSession } from "@/app/_hooks/useSession";
import { getEventsHostedByUser } from "@/app/_lib/data-service";

export default async function Page() {
  const session = useSession();
  const events = await getEventsHostedByUser(session.userId);
  // console.log(events);
  return (
    <div className="text-lg font-light flex flex-col items-start justify-start gap-1 min-h-[70vh]">
      <h2 className="font-semibold text-3xl text-color-1 mb-2 ">
        Manage your events here
      </h2>
      <p className="mb-4 text-n-2">
        You can track RSVPs and communicate with your attendees from here. Click
        on the event you want to manage.
      </p>
      {events.length === 0 && (
        <p className="mb-4 text-color-2 text-xl">
          You have not hosted any event!
        </p>
      )}

      <div
        className="grid justify-start items-end gap-x-16 gap-y-6 w-full"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 12rem))",
        }}
      >
        {events?.map((event) => (
          <Carousel event={event} key={event.name} />
        ))}
      </div>
    </div>
  );
}
