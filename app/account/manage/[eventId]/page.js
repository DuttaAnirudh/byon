import UpdateEventForm from "@/app/_components/UpdateEventForm";
import { useSession } from "@/app/_hooks/useSession";
import { getEvent } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const { name } = await getEvent(params.eventId);
  return { title: `Edit - ${name}` };
}

export const revalidate = 0;

export default async function Page({ params }) {
  const { userId } = useSession();
  const event = await getEvent(params.eventId);

  if (userId !== event.hostId) {
    throw new Error("You are not Authorised to access this page");
  }

  return (
    <div>
      <h2 className="font-semibold text-3xl text-color-1 mb-4">
        Make changes to your event here
      </h2>

      <UpdateEventForm event={event} />
    </div>
  );
}
