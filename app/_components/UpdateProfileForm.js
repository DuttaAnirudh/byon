"use client";

import { cities } from "@/app/_lib/constant";

function UpdateProfileForm() {
  return (
    <form className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          name="fullName"
          // defaultValue={fullName}
          className="px-5 py-3 bg-n-1 text-black w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          name="email"
          // defaultValue={email}
          className="px-5 py-3 bg-n-1 text-black w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-start gap-8">
          <label htmlFor="location">Choose your city:</label>
          <select
            name="location"
            className="w-[15rem] px-1 py-3 bg-n-1 text-black shadow-sm rounded-sm "
          >
            <option value="">Select city...</option>
            {cities.map((c) => (
              <option key={c} value={`${c}`}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact">Contact number</label>
        <input
          name="contact"
          // defaultValue={nationalID}
          className="px-5 py-3 bg-n-1 text-black w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <button className="border border-color-2 px-3 py-1 rounded-lg hover:bg-color-2 hover:text-color-3  transition-all">
          Update Profile
        </button>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
