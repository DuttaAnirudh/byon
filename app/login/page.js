import SignInButton from "../_components/SignInButton";
import { dancingScript } from "../layout";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-full  max-w-[30rem] sm:w-[30rem] mx-auto mt-24 px-2 sm:px-4 xl:px-0">
      <div className="flex flex-col items-center justify-center gap-2  max-w-[28rem] sm:w-[28rem] sm:border border-color-1 sm:py-16 sm:px-10 rounded-2xl">
        <h1
          className={`${dancingScript.className} font-extrabold text-4xl text-color-3`}
        >
          B.Y.O.N
        </h1>{" "}
        <h3 className="my-4 text-n-2 text-2xl font-light capitalize">
          Log in to your account
        </h3>
        {/* SIGN IN USING OAUTH */}
        <SignInButton />
      </div>
    </div>
  );
}
