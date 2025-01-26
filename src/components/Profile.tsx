import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import sarah_picture from "../../public/sarah-pfp.jpeg";
import { twMerge } from "tailwind-merge";

const Profile = ({
  data,
  showEventGenerator,
  setShowEventGenerator,
}: {
  data: Record<string, string | number>;
  showEventGenerator: boolean;
  setShowEventGenerator: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-4 rounded-md border border-darkBg bg-amber-400/50 p-8 shadow-dark md:grid-cols-[300px_auto]">
      <h2 className="col-span-full mb-0 mt-6 inline font-bold underline decoration-white decoration-wavy underline-offset-8">
        Customer Profile
      </h2>
      <div className="flex w-fit flex-col gap-y-1 self-center font-bold">
        <div className="text-xl font-bold capitalize text-black">
          Profile Picture
        </div>
        <div className="size-fit rounded-md bg-white p-2">
          <Image
            src={sarah_picture}
            alt="profile picture of customer"
            className="max-h-[250px] object-contain"
          />
        </div>
      </div>
      <div className="grid flex-grow grid-cols-1 flex-wrap gap-2 text-xl lg:grid-cols-2">
        {Object.keys(data).map((detail: string) => (
          <div key={detail} className="flex w-full flex-col gap-y-1 font-bold">
            <label
              className="text-xl font-bold capitalize text-black"
              htmlFor={detail}
            >
              {detail}
            </label>
            <input
              className="overflow-hidden truncate rounded-md border bg-white p-2 font-mono"
              type="text"
              name={detail}
              id={detail}
              value={data[detail]}
              disabled
            />
          </div>
        ))}
      </div>
      <h2 className="col-span-full mb-0 mt-6 inline font-bold underline decoration-white decoration-wavy underline-offset-8">
        Profile Actions
      </h2>
      <div className="col-span-full my-6 flex gap-2 gap-x-4 max-md:flex-col">
        <button
          onClick={() => setShowEventGenerator((prev) => !prev)}
          className={twMerge(
            "button flex flex-nowrap items-center gap-x-2 p-2 hover:bg-sky-400 hover:font-bold hover:text-white lg:text-lg",
            showEventGenerator && "bg-sky-400 font-bold text-white",
          )}
        >
          <span
            className="iconify text-xl"
            data-icon="akar-icons:ticket"
            data-inline="true"
          />
          {showEventGenerator && "Hide "} Event Id Generator
        </button>
        <button className="button relative flex flex-nowrap items-center gap-x-2 p-2 lg:text-lg">
          <span
            className="iconify text-xl"
            data-icon="akar-icons:chat-dots"
            data-inline="true"
          />{" "}
          Message Customer
          <span className="absolute -right-3 -top-2 flex aspect-square size-6 items-center justify-center rounded-full bg-red-500 font-bold text-white">
            <span>3</span>
          </span>
        </button>
        <button className="button flex flex-nowrap items-center gap-x-2 p-2 lg:text-lg">
          <span
            className="iconify text-xl"
            data-icon="akar-icons:arrow-repeat"
            data-inline="true"
          />{" "}
          Refund Event
        </button>
        <button
          className={twMerge(
            'button lg:text-lg", flex flex-nowrap items-center gap-x-2 p-2',
            "bg-red-400 p-2 md:ml-auto lg:text-lg",
          )}
        >
          <span
            className="iconify text-xl"
            data-icon="akar-icons:trash-can"
            data-inline="true"
          />
          Delete Profile
          <span className="text-sm font-bold uppercase">(Danger)</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
