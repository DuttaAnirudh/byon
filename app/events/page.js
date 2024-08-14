import Filter from "@/app/_components/Filter";
import Header from "@/app/_components/Header";
import Carousel from "../_components/Carousel";

export const metadata = {
  title: "Events",
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8]; // TEST

export default async function Page() {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <h1 className="text-3xl text-color-1 uppercase self-start mt-7">
        Trending Events
      </h1>

      <div className="self-start my-3">
        <Filter />
      </div>

      <div
        className="grid justify-around items-end gap-x-10 gap-y-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 12rem))",
        }}
      >
        {arr.map((item, i) => (
          <Carousel key={i} />
        ))}
      </div>
    </div>
  );
}
