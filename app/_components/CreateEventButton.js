"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function CreateEventFormButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`border font-bold text-2xl text-color-1 px-3 py-2 w-[10rem] 
        rounded-lg border-n-1 transition-all  uppercase ${
          !pending ? " hover:bg-color-3 hover:text-color-1" : ""
        } transition-all`}
    >
      {pending ? <SpinnerMini /> : children}
    </button>
  );
}

export default CreateEventFormButton;
