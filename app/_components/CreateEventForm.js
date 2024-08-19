import { createEvent } from "../_lib/actions";
import { cities } from "../_lib/constant";
import CreateEventFormButton from "./CreateEventButton";

function CreateEventForm({ user }) {
  const id = user;

  return (
    <form
      action={createEvent}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col w-[50rem] max-w-[50rem] mx-auto "
    >
      <div className="space-y-2 flex flex-col">
        <label className="text-xl text-color-3">Event Name</label>
        <input
          required
          name="name"
          className="max-w-[40rem] px-5 py-3 bg-n-1 text-black w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
        />
      </div>

      <div className="flex items-center justify-start gap-8">
        <div className="space-y-2 flex flex-col">
          <label className="text-xl text-color-3">Date</label>
          <input
            required
            type="date"
            name="date"
            className="w-[15rem] px-1 py-3 bg-n-1 text-black shadow-sm rounded-sm "
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
            className="w-[15rem] px-1 py-3 bg-n-1 text-black shadow-sm rounded-sm "
          />
        </div>
      </div>

      <div className=" space-y-2 flex flex-col">
        <label className="text-xl text-color-3" htmlFor="contact">
          Location
        </label>
        <input
          required
          name="location"
          className="max-w-[40rem] px-5 py-3 bg-n-1 text-black w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
        />
      </div>

      <div className="space-y-2 flex flex-col">
        <label className="text-xl text-color-3" htmlFor="city">
          Choose city
        </label>
        <div className="flex items-center justify-start gap-8">
          <select
            name="city"
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

      <div className=" space-y-2 flex flex-col">
        <label className="text-xl text-color-3 " htmlFor="contact">
          Describe your event
        </label>
        <input
          required
          name="description"
          className="max-w-[40rem] px-5 py-3 bg-n-1 text-black w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
        />
      </div>
      <div className="flex items-center justify-start gap-8">
        <div className=" space-y-2 flex flex-col">
          <label className="text-xl text-color-3 " htmlFor="contact">
            Entry Free
          </label>
          <input
            required
            name="price"
            className="w-[15rem] px-5 py-3 bg-n-1 text-black shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
          />
        </div>
        <div className=" space-y-2 flex flex-col">
          <label className="text-xl text-color-3 " htmlFor="contact">
            Total Number of Passes
          </label>
          <input
            required
            name="totalPass"
            className="w-[15rem] px-5 py-3 bg-n-1 text-black shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
          />
        </div>
      </div>

      <input name="hostId" defaultValue={id} className="hidden" />

      <div className="flex justify-center items-center gap-6 -ml-12">
        <CreateEventFormButton>Create</CreateEventFormButton>
      </div>
    </form>
  );
}

export default CreateEventForm;
