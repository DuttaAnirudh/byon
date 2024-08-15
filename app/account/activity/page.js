import ActivityBox from "@/app/_components/ActivityBox";
import { useSession } from "@/app/_hooks/useSession";
import { getBookings } from "@/app/_lib/data-service";

export const metadata = {
  title: "User Activity",
};

export default async function Page() {
  const userBookings = ["booking1", "booking2"]; //TEST
  const session = useSession();

  return (
    <div className=" flex flex-col items-start justify-start gap-1 ">
      <h3 className="font-semibold text-2xl text-color-1  capitalize">
        List of your Shenanigans
      </h3>

      <h4 className="text-2xl font-light text-n-2 mt-14 mb-3">
        Your Upcoming Events
      </h4>

      <div className="flex flex-wrap gap-4 items-center justify-start  w-full">
        {/* BOX */}
        {userBookings.map((item, i) => (
          <ActivityBox key={i} />
        ))}
      </div>

      <h4 className="text-2xl font-light text-n-2 mt-14 mb-3">In the Past</h4>
      <div className="flex flex-wrap gap-4 items-center justify-start  w-full">
        {/* BOX */}
        {userBookings.map((item, i) => (
          <ActivityBox key={i} />
        ))}
      </div>
    </div>
  );
}
