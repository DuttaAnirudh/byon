import partBear from "@/public/party-bear.jpg";
import Image from "next/image";

function Carousel() {
  return (
    <div className="flex flex-col gap-1 min-w-[10rem] cursor-pointer hover:shadow-md hover:shadow-color-1/50 py-2 transition-all">
      <div className="relative w-full min-h-[22rem] rounded-3xl overflow-hidden">
        <Image
          src={partBear}
          fill
          alt={`event poster`}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <h3 className="text-xl font-semibold whitespace-nowrap text-ellipsis w-full overflow-hidden">
          Event Name Event Name
        </h3>
        <p className="font-extralight whitespace-nowrap text-ellipsis w-full overflow-hidden">
          Location
        </p>
        <p className="tracking-wider">$ Price</p>
      </div>
    </div>
  );
}

export default Carousel;
