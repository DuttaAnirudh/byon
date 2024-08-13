import UpdateProfileForm from "../_components/UpdateProfileForm";

export const metadata = {
  title: "User Profile",
};

export default function Page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-n-2 mb-4">
        Keep your profile up-to-date
      </h2>
      <p className="text-lg mb-8 font-light text-n-2">
        Providing the following information will make your booking process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm />
    </div>
  );
}
