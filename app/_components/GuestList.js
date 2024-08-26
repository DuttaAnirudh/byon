import Link from "next/link";
import {
  getHostedEventBookings,
  getTotalPassesForEvent,
} from "../_lib/data-service";
import GuestListItem from "./GuestListItem";

export default async function GuestList({ eventId }) {
  const bookings = await getHostedEventBookings(eventId);
  const maxNumOfAttendees = await getTotalPassesForEvent(eventId);

  return (
    <div className="flex flex-col items-start justify-start gap-3 w-full">
      <div className="flex items-center justify-between gap-3 w-full my-3">
        <p className="font-light  uppercase py-1 px-3 border border-color-3 rounded-lg">
          Total Attendees:{" "}
          <span className="text-color-3 font-medium">
            {bookings.length <= 9
              ? `0${bookings.length}`
              : `${bookings.length}`}{" "}
            {maxNumOfAttendees !== 0 ? `/ ${maxNumOfAttendees.totalPass}` : ""}
          </span>
        </p>
        {bookings.length > 0 && (
          <Link
            // href={`/send-mail/guests/${eventId}`}
            href={`/send-mail?event=${eventId}`}
            className="uppercase font-semibold py-1 px-3 border border-color-3 rounded-lg hover:bg-color-3 hover:text-color-1"
          >
            Mail Options
          </Link>
        )}
      </div>
      {bookings.length > 0 && (
        <>
          <div className="grid grid-cols-[8rem_1fr_1fr_1fr] items-center justify-between w-full pl-3.5">
            <h4 className="text-lg text-color-3 uppercase">BYON ID</h4>
            <h4 className="text-lg text-color-3 uppercase">Customer Name</h4>
            <h4 className="text-lg text-color-3 uppercase">Customer Email</h4>
            <p>&nbsp;</p>
          </div>
          {bookings?.map((booking) => (
            <GuestListItem booking={booking} key={booking.id} />
          ))}
        </>
      )}

      {bookings.length === 0 && (
        <p className="text-center self-center justify-self-center mt-16 text-3xl text-n-2/60">
          You currently have 0 Attendees :(
        </p>
      )}
    </div>
  );
}
