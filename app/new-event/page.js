import CreateEventForm from "../_components/CreateEventForm";
import Header from "../_components/Header";
import { useSession } from "../_hooks/useSession";

export default function Page() {
  const session = useSession();
  return (
    <div className="flex flex-col gap-6">
      <Header />

      <CreateEventForm user={session.userId} />
    </div>
  );
}
