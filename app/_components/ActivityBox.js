import {
  CalendarDaysIcon,
  HeartIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

function ActivityBox() {
  return (
    <div>
      <div className="flex flex-col items-start justify-start gap-2 border border-color-1 px-5 py-3  rounded-2xl">
        <p className="font-light flex items-center justify-center gap-2 text-color-3">
          <span className="h-5 w-5 text-color-1">
            <CalendarDaysIcon />{" "}
          </span>{" "}
          Date
        </p>
        <h4 className="text-lg font-semibold flex items-center justify-center gap-2 text-color-3">
          <span className="h-5 w-5 text-color-1">
            <HeartIcon />{" "}
          </span>{" "}
          Event Name Event Name Event Name
        </h4>
        <p className="font-light flex items-center justify-center gap-2 text-color-3">
          <span className="h-5 w-5 text-color-1">
            <MapPinIcon />{" "}
          </span>{" "}
          Location
        </p>
      </div>
    </div>
  );
}

export default ActivityBox;
