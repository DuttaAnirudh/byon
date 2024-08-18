import Header from "../_components/Header";
import NewEventForm from "../_components/NewEventForm";
import { useSession } from "../_hooks/useSession";

export default function Page() {
  const session = useSession();
  return (
    <div className="flex flex-col gap-6">
      <Header />

      <NewEventForm user={session.userId} />
    </div>
  );
}
