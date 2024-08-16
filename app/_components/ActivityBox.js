import {
  CalendarDaysIcon,
  HeartIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { format } from "date-fns";

function ActivityBox({ booking }) {
  const { eventDate, eventName, city, location } = booking;
  return (
    <div>
      <div className="flex flex-col items-start justify-start gap-3 border border-color-1 px-5 py-3 min-w-[20rem]  rounded-2xl">
        <p className="font-light flex items-center justify-center gap-2 text-color-3">
          <span className="h-5 w-5 text-color-1">
            <CalendarDaysIcon />{" "}
          </span>
          {format(
            new Date(eventDate.split("-").join(", ")),
            "EEEE dd MMMM, yyyy"
          )}
        </p>
        <h4 className="text-xl font-semibold flex items-center justify-center gap-2 text-color-3">
          <span className="h-5 w-5 text-color-1">
            <HeartIcon />{" "}
          </span>{" "}
          {eventName}
        </h4>
        <p className="font-light flex items-center justify-center gap-2 text-color-3">
          <span className="h-5 w-5 text-color-1">
            <MapPinIcon />{" "}
          </span>{" "}
          {location}, {city}
        </p>
      </div>
    </div>
  );
}

export default ActivityBox;
