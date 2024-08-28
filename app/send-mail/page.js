import Link from "next/link";
import { useSession } from "../_hooks/useSession";
import { getScheduledMails } from "../_lib/data-service";
import { isFuture } from "date-fns";
import { timestampToDateTimeString } from "../_lib/utils";
import ScheduledMailItem from "../_components/ScheduledMailItem";

export const revalidate = 0;

export default async function Page({ searchParams }) {
  const eventId = searchParams.event;
  const session = useSession();
  const scheduledEmailsList = await getScheduledMails(session.userId);

  // Filtering Mails which have not been sent yet
  const futureScheduledMails = scheduledEmailsList.filter((item) => {
    return (
      isFuture(new Date(timestampToDateTimeString(item.sendAt))) &&
      item.eventId === +searchParams.event
    );
  });

  console.log(futureScheduledMails);

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
          href={`/send-mail/guests/${eventId}?send=now`}
          className="uppercase font-semibold py-1 pl-3 pr-5 border-l-4 border-color-3 rounded-r-lg  hover:bg-color-3 hover:text-color-1 transition-all"
        >
          Send Email to all Attendees
        </Link>
        <Link
          href={`/send-mail/guests/${eventId}?send=later`}
          className="uppercase font-semibold py-1 pl-3 pr-5 border-l-4 border-color-3 rounded-r-lg  hover:bg-color-3 hover:text-color-1 transition-all"
        >
          Sechedule an Email
        </Link>
      </div>

      <p className="mt-14 mb-4 text-n-2 text-lg">
        You can also View & Manage your already scheduled emails here.
      </p>

      <h5 className="text-xl font-medium text-color-3 uppercase mb-4">
        List of Your Scheduled Emails
      </h5>

      {futureScheduledMails.length === 0 && (
        <p className="self-center text-2xl text-n-2/60">
          You currently have 0 scheduled emails
        </p>
      )}

      {futureScheduledMails.length > 0 && (
        <>
          <div className="grid grid-cols-[1fr_1fr_2fr_2rem] items-center justify-between w-full pl-3.5 mb-2">
            <h4 className="text-lg text-color-1 uppercase">Date & Time</h4>
            <h4 className="text-lg text-color-1 uppercase">Subject</h4>
            <h4 className="text-lg text-color-1 uppercase">Message</h4>
            <p>&nbsp;</p>
          </div>
          {futureScheduledMails?.map((mailData) => (
            <ScheduledMailItem
              mailData={mailData}
              session={session}
              eventId={eventId}
              key={mailData.id}
            />
          ))}
        </>
      )}
    </div>
  );
}
