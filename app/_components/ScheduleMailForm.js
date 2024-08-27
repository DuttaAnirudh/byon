"use client";

import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

function ScheduleMailForm({ mailData, session, eventId }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { grantId, userId, email: hostEmail } = session;

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
        grantId,
        userId,
        hostEmail,
        mailData,
        subject,
        message,
        date,
        time,
      }),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    setIsLoading(false);

    if (response.ok) {
      // Redirect to /send-email after successful booking
      window.location.href = `/send-email?event=${eventId}`;
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
      <div className="flex items-center justify-start gap-8">
        <div className="space-y-2 flex flex-col">
          <label className="text-xl text-color-3">Date</label>
          <input
            required
            type="date"
            name="date"
            defaultValue={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-[15rem] px-1 py-1.5 bg-n-1 text-black shadow-sm rounded-sm "
          />
        </div>

        <div className="space-y-2 flex flex-col">
          <label className="text-xl text-color-3" htmlFor="contact">
            Time
          </label>
          <input
            required
            type="time"
            name="time"
            defaultValue={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-[15rem] px-1 py-1.5 bg-n-1 text-black shadow-sm rounded-sm "
          />
        </div>

        <p className="font-light text-color-3 self-ceter">
          Note: The Date & Time for scheduled email must be between{" "}
          <span className="underline decoration-color-1 underline-offset-4 decoration-2 px-1">
            2 minutes and 30 days
          </span>{" "}
          in the future.
        </p>
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
          rows="14"
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
