"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useState } from "react";
import { timestampToDateTimeString } from "../_lib/utils";
import TextExpander from "./TextExpander";

function ScheduledMailItem({ mailData, session, eventId }) {
  const [isLoading, setIsLoading] = useState(false);
  const { grantId } = session;
  const { scheduleId } = mailData;

  const handleDelete = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await fetch("/api/delete-scheduled-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ grantId, scheduleId }),
    });

    const data = await response.json();

    if (data.error) {
      setError(data.error);
    }

    setIsLoading(false);

    if (response.ok) {
      // Redirect to /account/activity after successful booking
      window.location.href = `/send-mail?event=${eventId}`;
    }
  };

  return (
    <div className="grid grid-cols-[1fr_1fr_2fr_2rem] items-start justify-between w-full border-l-2 pl-2.5 py-1 hover:border-color-1 gap-2 my-2">
      <p>
        {format(
          new Date(timestampToDateTimeString(mailData.sendAt)),
          "EEE, do MMMMMM yyyy @ hh:mm aa"
        )}
      </p>
      <p>{mailData.subject}</p>
      <p>
        <TextExpander>{mailData.body}</TextExpander>
      </p>
      <button
        onClick={handleDelete}
        className=" h-8 w-8 p-2  text-n-1 hover:text-color-1"
      >
        <TrashIcon />
      </button>
    </div>
  );
}

export default ScheduledMailItem;
