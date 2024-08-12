export async function generateMetadata({ params }) {
  const name = "Best Party Ever"; //TEST
  return { title: `Event - ${name}` };
}

export default function Page() {
  return (
    <div className="mt-8">
      <p>EVENT INFO</p>
    </div>
  );
}
