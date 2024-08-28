import GuestList from "@/app/_components/GuestList";
import Spinner from "@/app/_components/Spinner";
import { useSession } from "@/app/_hooks/useSession";
import { getEvent } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { name } = await getEvent(params.eventId);
  return { title: `Manage - ${name}` };
}

export const revalidate = 0;

export default function Page({ params }) {
  const session = useSession();
  if (!session) {
    throw new Error("You need to Log In");
  }

  return (
    <div>
      <h2 className="font-semibold text-3xl text-color-1 mb-4">
        Manage your Guest List here
      </h2>

      <Suspense fallback={<Spinner />}>
        <GuestList eventId={params.eventId} />
      </Suspense>
    </div>
  );
}
