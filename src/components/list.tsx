"use client";
import React from "react";
import { ListHookProps } from "../../types";
import { formatDateTime } from "@/utils/dateParser";
import NoEvent from "./listEmpty";

type EventsListProps = Pick<
  ListHookProps,
  "events" | "activeEvents" | "toggleActiveEvent" | "toggleSortEvents"
> & {
  emptyState: {
    icon: string;
    message: string;
  };
};

const EventsList = ({
  events,
  activeEvents,
  toggleActiveEvent,
  toggleSortEvents,
  emptyState: { icon, message },
}: EventsListProps) => {
  return (
    <div className="flex size-full shrink flex-col">
      <div className="grid w-full grid-cols-2 gap-4 rounded-base rounded-b-none border border-secondaryBlack bg-white p-2 pl-4 font-bold max-md:text-base">
        <button
          className="event-headers"
          onClick={() => toggleSortEvents("eventTitle")}
        >
          <span
            className="iconify text-xl"
            data-icon="lets-icons:star"
            data-inline="true"
          />{" "}
          Event Name
        </button>
        <button
          className="event-headers"
          onClick={() => toggleSortEvents("eventTimestamp")}
        >
          <span
            className="iconify text-xl"
            data-icon="quill:calendar"
            data-inline="true"
          />{" "}
          Date{" "}
        </button>
      </div>
      <div className="h-52 grow overflow-y-scroll border border-secondaryBlack border-t-transparent bg-white max-md:overflow-x-auto lg:h-72">
        {events.length ? (
          events.map(({ id, eventTitle, eventTimestamp }) => (
            <div
              key={id}
              className="group flex w-full max-w-full gap-x-2 rounded-md p-2 even:bg-accentLight/30 has-[:checked]:bg-amber-200/60"
            >
              <input
                type="checkbox"
                className="peer"
                name={id}
                id={id}
                onChange={() => toggleActiveEvent(id)}
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
    </div>
  );
};

export default EventsList;
