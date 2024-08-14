import ActivityBox from "@/app/_components/ActivityBox";

export const metadata = {
  title: "User Activity",
};

export default function Page() {
  const userBookings = ["booking1", "booking2"]; //TEST

  return (
    <div className=" flex flex-col items-start justify-start gap-1 overflow-y-hidden">
      <h3 className="font-semibold text-2xl text-color-1  capitalize">
        Your Past Shenanigans
      </h3>
      <p className="text-lg mt-1 mb-4 font-light text-n-2">
        You have been to {userBookings.length} parties this year.
      </p>
      <p className="text-xl font-light text-n-2 mb-8">
        Here&apos;s your Recap for the year {new Date().getFullYear()}
      </p>

      <div className="flex flex-wrap gap-4 items-center justify-start overflow-y-scroll w-full">
        {/* BOX */}
        {userBookings.map((item, i) => (
          <ActivityBox key={i} />
        ))}
      </div>
    </div>
  );
}
