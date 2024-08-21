import RemoveGuest from "./RemoveGuest";
import SendGuestMailButton from "./SendGuestMailButton";

function GuestListItem({ booking }) {
  return (
    <div className="grid grid-cols-[8rem_1fr_1fr_1fr] items-center justify-between w-full border-l-2 border-transparent hover:border-color-1 pl-3 py-1">
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
        <SendGuestMailButton />
        <RemoveGuest />
      </div>
    </div>
  );
}

export default GuestListItem;
