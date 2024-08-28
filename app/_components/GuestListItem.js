import { AtSymbolIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { checkInAttendee, deleteBooking } from "@/app/_lib/actions";

function GuestListItem({ booking }) {
  return (
    <div
      className={`grid grid-cols-[8rem_1fr_1fr_1fr] items-center justify-between w-full border-l-2 pl-3 py-1 ${
        booking.checkedIn
          ? "border-green-500"
          : "border-transparent hover:border-color-1 "
      }`}
    >
      <p className="font-light tracking-wider text-n-1">
        {booking?.id <= 9
          ? `00${booking.id}`
          : booking.id <= 99
          ? `0${booking.id}`
          : `${booking.id}`}
      </p>
      <p className="font-light tracking-wider text-n-1">
        {booking.customerName}
      </p>
      <p className="font-light tracking-wider text-n-1">
        {booking.customerEmail}
      </p>
      <div className="justify-self-center flex items-center justify-center gap-2">
        {/* REDIRECT TO SEND EMAIL PAGE */}
        <Link
          href={`/send-mail/${booking.id}`}
          className="h-8 w-8 p-2 cursor-pointer text-n-1 hover:text-color-1"
        >
          <AtSymbolIcon />
        </Link>

        {/* DELETE THE BOOKING */}
        <form action={deleteBooking}>
          <input
            className="hidden"
            defaultValue={booking.id}
            name="bookingId"
          />
          <button
            disabled={booking.checkedIn}
            className={`h-8 w-8 p-2  text-n-1 hover:text-color-1 ${
              booking.checkedIn ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <TrashIcon />
          </button>
        </form>

        <form action={checkInAttendee} className="self-center ml-12">
          <input
            className="hidden"
            defaultValue={booking.id}
            name="bookingId"
          />
          <button
            disabled={booking.checkedIn}
            className={` border border-green-500 px-3 py-0.5 rounded-lg ${
              !booking.checkedIn
                ? "text-green-500 hover:text-n-1 hover:bg-green-500 cursor-pointer"
                : "text-n-1 bg-green-500 cursor-not-allowed"
            }`}
          >
            {!booking.checkedIn ? "Check In" : "Arrived"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GuestListItem;
