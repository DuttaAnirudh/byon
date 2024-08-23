"use client";

import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

function BookingButton({ session, event }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const recipientEmail = session.email;
  const grantId = session.grantId;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await fetch("/api/new-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipientEmail, grantId, event }),
    });

    const data = await response.json();

    if (data.error) {
      setError(data.error);
    }

    setIsLoading(false);

    if (response.ok) {
      // Redirect to /account/activity after successful booking
      window.location.href = "/account/activity";
    }
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className={` font-bold text-2xl text-color-1 px-3 py-2 w-[10rem] 
rounded-lg ${
          !isLoading
            ? "border border-n-1 hover:bg-color-3 hover:text-color-1"
            : ""
        }  transition-all  uppercase`}
      >
        {!isLoading ? "Book Now" : <SpinnerMini />}
      </button>
      {error !== "" && (
        <p className="text-lg font-light text-color-2 underline decoration-n-2">
          {error}
        </p>
      )}
    </div>
  );
}

export default BookingButton;
