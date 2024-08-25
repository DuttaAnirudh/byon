import { deleteEvent, updateEvent } from "../_lib/actions";
import { cities } from "../_lib/constant";
import DeleteEvent from "./DeleteEvent";
import UpdateFormButton from "./UpdateFormButton";

function UpdateEventForm({ event }) {
  const {
    id,
    name,
    date,
    time,
    location,
    city,
    description,
    price,
    totalPass,
  } = event;

  return (
    <div className="flex flex-col gap-2">
      <form
        action={updateEvent}
        className="bg-primary-900 text-lg flex gap-3 flex-col   "
      >
        <div className="space-y-2 flex flex-col">
          <label className="text-xl text-color-3">Event Name</label>
          <input
            required
            name="name"
            defaultValue={name}
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
              defaultValue={date}
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
              defaultValue={time}
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
            defaultValue={location}
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

        <div className=" space-y-2 flex flex-col">
          <label className="text-xl text-color-3 " htmlFor="contact">
            Describe your event
          </label>
          <input
            required
            name="description"
            defaultValue={description}
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
              defaultValue={price}
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
              defaultValue={totalPass}
              className="w-[15rem] px-5 py-3 bg-n-1 text-black shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-n-1"
            />
          </div>
        </div>

        <input name="id" defaultValue={id} className="hidden" />

        <div className="flex justify-between items-center gap-6 mt-4">
          <UpdateFormButton>Update Event</UpdateFormButton>
        </div>
      </form>
    </div>
  );
}

export default UpdateEventForm;
