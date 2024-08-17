import Link from "next/link";

export default function Page() {
  return (
    <div className="text-lg font-light flex flex-col items-start justify-start gap-1 min-h-[70vh]">
      <h2 className="font-semibold text-3xl text-color-1 mb-2 ">
        Host an Unforgettable Party!
      </h2>
      <p className="mb-4 text-n-2">
        Reach a wider audience and let us help you fill your guest list.
      </p>
      <h3 className="text-color-1 text-xl  font-normal">
        <span className="text-color-3 pr-2 ">#</span>Why Host with Us?
      </h3>
      <ul className="flex flex-col gap-1">
        <li>
          &bull;
          <span className="text-color-3 pr-2 pl-1"> Easy Setup:</span> Create
          and list your party in minutes.
        </li>
        <li>
          &bull;
          <span className="text-color-3 pr-2 pl-1">
            {" "}
            Reach More Guests:
          </span>{" "}
          Get your event in front of people looking for great parties.
        </li>
        <li>
          &bull;
          <span className="text-color-3 pr-2 pl-1">
            {" "}
            Manage Bookings Effortlessly:
          </span>{" "}
          Track RSVPs and manage guest lists with ease.
        </li>
        <li>
          &bull;
          <span className="text-color-3 pr-2 pl-1"> Secure Payments:</span> Get
          Get paid quickly and securely for your hosting efforts.
        </li>
      </ul>
      <h3 className="text-color-1 text-xl  font-normal mt-4">
        <span className="text-color-3 pr-2 ">#</span>How It Works?
      </h3>
      <p>
        1.
        <span className="text-color-3 pr-2 pl-1"> Create Your Event:</span> Set
        the details of your party, including time, location, and capacity.
      </p>
      <p>
        2.
        <span className="text-color-3 pr-2 pl-1"> Set Your Price:</span> Decide
        if your party is free or if you&apos;d like to charge a fee.
      </p>
      <p>
        3.
        <span className="text-color-3 pr-2 pl-1"> List and Promote:</span> Make
        your party live and let guests start booking.
      </p>
      <p>
        4.
        <span className="text-color-3 pr-2 pl-1"> Manage Guests:</span> Easily
        track RSVPs and communicate with your attendees.
      </p>
      <p>
        5.
        <span className="text-color-3 pr-2 pl-1"> Host and Enjoy:</span> Focus
        on hosting while we handle the rest!
      </p>

      <h3 className="font-semibold text-3xl text-color-1 mt-auto mb-4  self-center">
        Ready to Host?
      </h3>
      <Link
        href="/new-event"
        className="border font-bold text-2xl text-color-1 px-6 py-2  
        rounded-lg bg-color-3 hover:bg-color-1 hover:text-color-3 border-n-1 transition-all uppercase self-center"
      >
        Create an Event
      </Link>
    </div>
  );
}
