import CustomMailForm from "@/app/_components/CustomMailForm";
import ScheduleMailForm from "@/app/_components/ScheduleMailForm";
import { useSession } from "@/app/_hooks/useSession";
import { getHostedEventBookings } from "@/app/_lib/data-service";

export default async function Page({ params, searchParams }) {
  const session = useSession();
  if (!session) {
    throw new Error("You need to Log In");
  }

  const bookingData = await getHostedEventBookings(params.eventId);
  const mailData = bookingData.map((booking) => {
    return { name: booking.customerName, email: booking.customerEmail };
  });

  const sendStatus = searchParams.send;

  if (sendStatus === "now") {
    return (
      <div>
        <h2 className="font-semibold text-2xl text-n-1 mb-2 ">
          Send a Mail to <span className="text-color-1">All the Attendees</span>
        </h2>
        <CustomMailForm
          mailData={mailData}
          session={session}
          eventId={params.eventId}
        />
      </div>
    );
  }

  if (sendStatus === "later") {
    return (
      <div>
        <h2 className="font-semibold text-2xl text-n-1 mb-2 ">
          Schedule a Mail for{" "}
          <span className="text-color-1">All the Attendees</span>
        </h2>
        <ScheduleMailForm
          mailData={mailData}
          session={session}
          eventId={params.eventId}
        />
      </div>
    );
  }
}
