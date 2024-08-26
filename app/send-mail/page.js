import Link from "next/link";
import { useSession } from "../_hooks/useSession";
import { getScheduledMails } from "../_lib/data-service";

export const revalidate = 0;

export default async function Page({ searchParams }) {
  const eventId = searchParams.event;
  const session = useSession();
  const scheduledEmailsList = await getScheduledMails(session.userId);
  console.log(scheduledEmailsList);

  return (
    <div className="flex flex-col items-start justify-start">
      <h4 className="font-semibold text-3xl text-color-1 mb-4">
        Send, Manage & Schedule your Emails
      </h4>
      <p className="mb-4 text-n-2 text-lg">
        You can send emails to all your attendees at once, or you can schedule
        it to be sent later.
      </p>

      <div className="flex  items-start justify-start gap-8">
        <Link
          href={`/send-mail/guests/${eventId}`}
          className="uppercase font-semibold py-1 pl-3 pr-5 border-l-4 border-color-3 rounded-r-lg  hover:bg-color-3 hover:text-color-1 transition-all"
        >
          Send an EMail to all Attendees
        </Link>
        <Link
          href=""
          className="uppercase font-semibold py-1 pl-3 pr-5 border-l-4 border-color-3 rounded-r-lg  hover:bg-color-3 hover:text-color-1 transition-all"
        >
          Sechedule an Email
        </Link>
      </div>

      <p className="mt-14 mb-4 text-n-2 text-lg">
        You can also manage your alredy scheduled emails here as well.
      </p>

      <h5 className="text-xl font-medium text-color-3 uppercase mb-4">
        List of Your Scheduled Emails
      </h5>

      {scheduledEmailsList.length === 0 && (
        <p className="self-center text-2xl text-n-2/60">
          You currently have 0 scheduled emails
        </p>
      )}

      {scheduledEmailsList.length > 0 && (
        <p className="text-lg text-n-2/60">List</p>
      )}
    </div>
  );
}
