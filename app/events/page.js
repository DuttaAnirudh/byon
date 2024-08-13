import Filter from "../_components/Filter";
import Header from "../_components/Header";

export const metadata = {
  title: "Events",
};

export default async function Page() {
  return (
    <div className="flex flex-col gap-9">
      <Header />
      <h1 className="text-3xl text-color-1 border-b border-color-3 uppercase self-start mt-10">
        Trending Events
      </h1>

      <div className="self-start">
        <Filter />
      </div>

      <div>EVENTS</div>
    </div>
  );
}
