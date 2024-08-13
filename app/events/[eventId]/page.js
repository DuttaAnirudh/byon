import Header from "@/app/_components/Header";

export async function generateMetadata({ params }) {
  const name = "Best Party Ever"; //TEST
  return { title: `Event - ${name}` };
}

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <p>Event Information</p>
    </div>
  );
}
