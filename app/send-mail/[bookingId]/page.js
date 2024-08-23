import SingleCustomMailForm from "@/app/_components/SingleCustomMailForm";
import { useSession } from "@/app/_hooks/useSession";
import { getBookingForEmail } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const mailData = await getBookingForEmail(params.bookingId);
  const session = useSession();

  return (
    <div>
      <h2 className="font-semibold text-2xl text-n-1 mb-2 ">
        Send a Mail to:{" "}
        <span className="text-color-1">{mailData.at(0).customerName}</span>
      </h2>
      <SingleCustomMailForm mailData={mailData.at(0)} session={session} />
    </div>
  );
}
