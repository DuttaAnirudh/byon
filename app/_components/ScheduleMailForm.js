"use client";

import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

function ScheduleMailForm({ mailData, session, eventId }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailList = mailData.map((item) => item.email).join(", ");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await fetch("/api/schedule-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mailData,
        grantId: session.grantId,
        subject,
        hostEmail: session.email,
        message,
      }),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    setIsLoading(false);

    if (response.ok) {
      // Redirect to /account/manage/guestlist after successful booking
      window.location.href = `/account/manage/guestlist/${eventId}`;
    }
  };

  return (
    <form className="bg-primary-900 pt-3 px-5 text-lg flex gap-6 flex-col">
      <div className="space-y-2 grid grid-cols-[2rem_1fr] items-center">
        <label className="text-xl font-semibold text-color-3">To :</label>
        <input
          disabled
          name="email"
          defaultValue={emailList}
          className="px-3 py-1 bg-n-1 text-black w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
        />
      </div>
      <div className="space-y-2 grid grid-cols-[5rem_1fr] items-center">
        <label className="text-xl font-semibold text-color-3">Subject :</label>
        <input
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="px-3 py-1 bg-n-1 text-black w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
        />
      </div>
      <div className="space-y-2">
        <label className="text-xl font-semibold text-color-3">Message :</label>
        <textarea
          name="message"
          rows="16"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-3 py-1  bg-n-1 text-black w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={` text-color-1 px-3 py-1 rounded-lg
                    ${
                      !isLoading
                        ? "border hover:bg-color-2 hover:text-color-3 border-color-2"
                        : ""
                    }  transition-all `}
        >
          {!isLoading ? "Schedule" : <SpinnerMini />}
        </button>
      </div>
    </form>
  );
}

export default ScheduleMailForm;
