"use client";

import { deleteEvent } from "../_lib/actions";

function DeleteEvent({ id }) {
  return (
    <button
      onClick={() => deleteEvent(id)}
      className="border border-n-2 px-3 py-1 text-lg rounded-lg hover:bg-n-2 hover:text-black transition-all"
    >
      Delete Event
    </button>
  );
}

export default DeleteEvent;
