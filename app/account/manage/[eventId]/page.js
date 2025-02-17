import DeleteEvent from "@/app/_components/DeleteEvent";
import UpdateEventForm from "@/app/_components/UpdateEventForm";
import UpdateEventPoster from "@/app/_components/UpdateEventPoster";
import { useSession } from "@/app/_hooks/useSession";
import { getEvent } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const { name } = await getEvent(params.eventId);
  return { title: `Edit - ${name}` };
}

export const revalidate = 0;

export default async function Page({ params }) {
  const session = useSession();
  if (!session) {
    throw new Error("You need to Log In");
  }

  const { userId } = session;
  const event = await getEvent(params.eventId);

  if (userId !== event.hostId) {
    throw new Error("You are not Authorised to access this page");
  }

  return (
    <div>
      <h2 className="font-semibold text-3xl text-color-1 mb-4">
        Make changes to your event here
      </h2>
      <div className="flex items-start gap-16">
        <UpdateEventForm event={event} />
        <UpdateEventPoster event={event} />
      </div>
      <div className="mt-4">
        <DeleteEvent id={params.eventId} />
      </div>
    </div>
  );
}
