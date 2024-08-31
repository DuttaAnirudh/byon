import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function Carousel({ event }) {
  const {
    id,
    name,
    date,
    time,
    location,
    city,
    totalPass,
    remainingPass,
    price,
    image,
  } = event;

  return (
    <Link
      href={`/events/${id}`}
      className="flex flex-col gap-1 min-w-[10rem] group py-2 transition-all"
    >
      <div className="relative w-full min-h-[22rem] rounded-t-3xl overflow-hidden group-hover:shadow-lg group-hover:shadow-color-1/50">
        <Image
          src={image}
          fill
          alt={`${name} poster`}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-0">
        <h3 className="text-xl font-semibold whitespace-nowrap text-ellipsis w-full overflow-hidden group-hover:text-color-3">
          {name}
        </h3>

        <div className="flex items-center justify-start gap-1 w-full">
          <p className="h-3 w-3 text-n-2">
            <MapPinIcon />
          </p>
          <h3 className="font-extralight whitespace-nowrap text-ellipsis w-[95%] overflow-hidden ">
            {location},{city}
          </h3>
        </div>
        <p className="tracking-wider text-color-1 mt-2 self-end">₹{price}/-</p>
      </div>
    </Link>
  );
}

export default Carousel;
