import {
  CalendarDaysIcon,
  HeartIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { format } from "date-fns";
import Link from "next/link";

function HostedEventBox({ event, active }) {
  const { id, name, date, time, location, city } = event;
  return (
    <div className="flex flex-col items-start border border-color-1 min-w-[20rem]  rounded-2xl overflow-hidden">
      <div className="flex flex-col items-start justify-start gap-3  px-5 py-3 ">
        <p className="font-light flex items-center justify-center gap-2 text-color-3">
          <span className="h-5 w-5 text-color-1">
            <CalendarDaysIcon />{" "}
          </span>
          {format(new Date(date.split("-").join(", ")), "EEE dd MMM yyyy")} at{" "}
          {format(new Date([2024, 8, 15, time].join(", ")), "h:mm bb")}
        </p>
        <h4 className="text-xl font-semibold flex items-center justify-center gap-2 text-color-3">
          <span className="h-5 w-5 text-color-1">
            <HeartIcon />{" "}
          </span>{" "}
          {name}
        </h4>
        <p className="font-light flex items-center justify-center gap-2 text-color-3">
          <span className="h-5 w-5 text-color-1">
            <MapPinIcon />{" "}
          </span>{" "}
          {location}, {city}
        </p>
      </div>
      {active && (
        <div className="flex items-center justify-evenly w-full">
          <Link
            href={`/account/manage/${id}`}
            className="py-2 font-semibold text-lg hover:bg-color-3 hover:text-black w-full text-center uppercase border-r border-t border-color-1"
          >
            Edit
          </Link>
          <Link
            href={`/account/manage/guestlist/${id}`}
            className="py-2 font-semibold text-lg hover:bg-color-3 hover:text-black w-full text-center uppercase border-t border-color-1"
          >
            Guest List
          </Link>
        </div>
      )}
    </div>
  );
}

export default HostedEventBox;
