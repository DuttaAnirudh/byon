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
      <p className="self-end font-light  uppercase">
        Total Attendees:{" "}
        <span className="text-color-3 font-medium">
          {bookings.length <= 9 ? `0${bookings.length}` : `${bookings.length}`}{" "}
          {maxNumOfAttendees !== 0 ? `/ ${maxNumOfAttendees.totalPass}` : ""}
        </span>
      </p>
      <div className="grid grid-cols-[8rem_1fr_1fr_1fr] items-center justify-between w-full pl-3.5">
        <h4 className="text-lg text-color-3 uppercase">BYON ID</h4>
        <h4 className="text-lg text-color-3 uppercase">Customer Name</h4>
        <h4 className="text-lg text-color-3 uppercase">Customer Email</h4>
        <p>&nbsp;</p>
      </div>
      {bookings?.map((booking) => (
        <GuestListItem booking={booking} key={booking.id} />
      ))}
    </div>
  );
}
