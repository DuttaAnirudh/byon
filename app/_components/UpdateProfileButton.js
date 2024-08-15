"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function UpdateProfileButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`border px-3 py-1 rounded-lg ${
        !pending ? "hover:bg-color-2 hover:text-color-3 border-color-2" : ""
      } transition-all`}
    >
      {pending ? <SpinnerMini /> : children}
    </button>
  );
}

export default UpdateProfileButton;
