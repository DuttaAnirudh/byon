"use client";

import { cities } from "@/app/_lib/constant";
import UpdateProfileButton from "./UpdateProfileButton";
import { updateUserProfile } from "../_lib/actions";

function UpdateProfileForm({ user }) {
  const { id, fullName, email, contact, city, avatar } = user;

  return (
    <form
      action={updateUserProfile}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          name="fullName"
          defaultValue={fullName}
          className="px-5 py-3 bg-n-1 text-black w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          name="email"
          defaultValue={email}
          className="px-5 py-3 bg-n-1 text-black w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-start gap-8">
          <label htmlFor="city">Choose your city:</label>
          <select
            name="city"
            defaultValue={city}
            className="w-[15rem] px-1 py-3 bg-n-1 text-black shadow-sm rounded-sm "
          >
            <option value="">Select city...</option>
            {cities.map((city) => (
              <option key={city} value={`${city}`}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact">Contact number</label>
        <input
          name="contact"
          defaultValue={contact}
          className="px-5 py-3 bg-n-1 text-black w-full shadow-sm rounded-sm"
        />
      </div>

      <input name="guestId" defaultValue={id} className="hidden" />

      <div className="flex justify-end items-center gap-6">
        <UpdateProfileButton>Update Profile</UpdateProfileButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
