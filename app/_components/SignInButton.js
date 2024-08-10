import Link from "next/link";

function SignInButton() {
  return (
    <Link href="/api/auth">
      <button className="flex items-center gap-6 text-lg text-accent-600 font-semibold border-2 border-color-2 hover:border-color-3 transition-all rounded-lg px-8 py-2">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </Link>
  );
}

export default SignInButton;
