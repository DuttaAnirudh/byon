import Image from "next/image";
import UpdateFormButton from "./UpdateFormButton";
import { updateEventPoster } from "../_lib/actions";

function UpdateEventPoster({ event }) {
  const { id, name, image } = event;

  return (
    <form action={updateEventPoster} className=" flex flex-col w-full self-end">
      <div className=" space-y-2 flex flex-col  items-start gap-2">
        <div className="relative w-[13rem] min-h-[22rem] overflow-hidden group-hover:shadow-lg group-hover:shadow-color-1/50 self-start">
          <Image
            src={image}
            fill
            alt={`${name} poster`}
            className="object-cover"
          />
        </div>
        <label className="text-xl text-color-3">Update Event Poster :</label>
        <input
          name="image"
          type="file"
          accept="image/*"
          required
          className="file-input-btn"
        />
      </div>

      <input name="id" defaultValue={id} className="hidden" />
      <input name="currentImageSrc" defaultValue={image} className="hidden" />

      <div className="flex justify-between items-center gap-6 mt-4 self-start">
        <UpdateFormButton>Update Poster</UpdateFormButton>
      </div>
    </form>
  );
}

export default UpdateEventPoster;
