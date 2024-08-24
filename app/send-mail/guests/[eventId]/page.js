import CustomMailForm from "@/app/_components/CustomMailForm";
import { useSession } from "@/app/_hooks/useSession";
import { getHostedEventBookings } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const bookingData = await getHostedEventBookings(params.eventId);
  const session = useSession();
  const mailData = bookingData.map((booking) => {
    return { name: booking.customerName, email: booking.customerEmail };
  });

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
