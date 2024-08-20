import UpdateProfileForm from "../_components/UpdateProfileForm";
import { useSession } from "../_hooks/useSession";
import { getUser } from "../_lib/data-service";

export const metadata = {
  title: "Your Profile",
};

export default async function Page() {
  const session = useSession();
  const user = await getUser(session.email);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-n-2 mb-4">
        Keep your profile up-to-date
      </h2>
      <p className="text-lg mb-8 font-light text-n-2">
        Providing the following information will make your booking process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm user={user} />
    </div>
  );
}
