"use client";

function SignOutButton() {
  async function handleLogout() {
    await fetch("/api/auth/logout", {
      method: "GET",
    });

    // After logging out, you can redirect the user
    window.location.href = "/";
  }

  return (
    <button
      onClick={handleLogout}
      className="text-color-1 uppercase text-lg border-b-2 border-transparent hover:border-color-3 transition-all"
    >
      Sign out
    </button>
  );
}

export default SignOutButton;
