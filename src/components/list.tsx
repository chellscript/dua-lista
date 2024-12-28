"use client";
import React from "react";
import { Event } from "../../types";
import { formatDateTime } from "@/utils/dateParser";
import NoEvent from "./listEmpty";

type EventsListProps = {
  data: Event[] | [];
  activeEvents: string[];
  setActiveEvents: (arg: (prev: string[]) => string[]) => void;
  emptyState: {
    icon: string;
    message: string;
  };
};

const EventsList = ({
  data,
  activeEvents,
  setActiveEvents,
  emptyState: { icon, message },
}: EventsListProps) => {
  return (
    <>
      <div className="grid w-full auto-cols-max grid-cols-2 gap-4 rounded-base rounded-b-none border border-secondaryBlack bg-white p-2 pl-4 font-bold *:flex *:items-center *:gap-x-2 max-md:text-base">
        <button onClick={() => console.log("order by name tba")}>
          <span
            className="iconify text-xl"
            data-icon="lets-icons:star"
            data-inline="true"
          />{" "}
          Event Name
        </button>
        <button onClick={() => console.log("order by date tba")}>
          <span
            className="iconify text-xl"
            data-icon="quill:calendar"
            data-inline="true"
          />{" "}
          Date{" "}
        </button>
      </div>

      <div className="flex h-72 w-full flex-col gap-y-2 overflow-y-scroll rounded-b-base rounded-t-none border border-t-0 border-secondaryBlack bg-white p-2 max-md:text-sm md:h-96">
        {data.length ? (
          data.map(({ id, eventTitle, eventTimestamp }) => (
            <div
              key={id}
              className="group flex w-full gap-x-2 rounded-md p-2 even:bg-accentLight/30 has-[:checked]:!bg-main/60"
            >
              <input
                type="checkbox"
                className="peer"
                name={id}
                id={id}
                onChange={(event) => {
                  const { checked } = event.target;
                  setActiveEvents((prev: string[]) =>
                    checked
                      ? [...prev, id]
                      : prev.filter((eventId) => eventId !== id),
                  );
                }}
                checked={activeEvents.includes(id)}
              />
              <label
                htmlFor={id}
                className="group-hover:bolded peer-focus:bolded grid w-full auto-cols-max grid-cols-2 items-end gap-4 whitespace-nowrap"
              >
                <span
                  title={eventTitle}
                  className="overflow-hidden text-ellipsis"
                >
                  {eventTitle}
                </span>
                <div className="flex justify-start">
                  {formatDateTime(eventTimestamp)}
                </div>
              </label>
            </div>
          ))
        ) : (
          <NoEvent
            icon={icon}
            className="flex flex-col items-center justify-center self-center justify-self-center text-center"
            message={message}
          />
        )}
      </div>
    </>
  );
};

export default EventsList;
