import { getEvent } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const { name } = await getEvent(params.eventId);
  return { title: `Manage - ${name}` };
}

export default function Page({ params }) {
  return <div>MANAGE GUEST LIST EVENT Page {params.eventId}</div>;
}
