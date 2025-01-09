"use client";

import React from "react";
import EventsList from "./list";
import SelectButtons from "./selectButtons";
import { UseListHook } from "../../types";
import useListHook from "@/utils/hooks/useListHook";
import { twMerge } from "tailwind-merge";

const AvaliableEvents = ({ data, updateData }: UseListHook) => {
  const {
    events,
    activeEvents,
    toggleActiveEvent,
    toggleAllActiveEvents,
    clearActiveEvents,
    updateEventsData,
    toggleSortEvents,
  } = useListHook({ data, updateData });

  return (
    <div
      className={twMerge(
        "flex flex-col rounded-base border-2 border-secondaryBlack bg-white p-4 py-2 shadow-light",
        data.length > 0
          ? "border-secondaryBlack bg-accent/60 shadow-dark"
          : "border-secondaryBlack bg-white",
      )}
    >
      <div className="flex flex-col text-center">
        <h2 className="text-center decoration-white decoration-wavy decoration-2 underline-offset-8 hover:underline">
          Avaliable Events ({events.length})
        </h2>
        <p>A list of all the customer's purchased events</p>
      </div>

      <div className="flex flex-col justify-between gap-x-2">
        <div className="my-4 flex w-full justify-between gap-2 max-lg:flex-col">
          <SelectButtons
            toggleActiveEvent={toggleActiveEvent}
            toggleAllActiveEvents={toggleAllActiveEvents}
            clearActiveEvents={clearActiveEvents}
            activeEvents={activeEvents}
            events={data}
          />
          <button
            disabled={activeEvents.length === 0}
            onClick={updateEventsData}
            className="button move-action-button bg-green-200"
          >
            <span className="flex flex-row items-center gap-x-2 font-bold disabled:font-normal">
              Add {activeEvents.length} Event(s)
              <span
                className="iconify max-lg:rotate-90 lg:text-xl"
                data-icon="mdi:arrow-right-bold"
                data-inline="true"
              />
            </span>
          </button>
        </div>
      </div>
      <EventsList
        emptyState={{
          icon: "mingcute:happy-line",
          message: "All Events Selected!",
        }}
        events={events}
        activeEvents={activeEvents}
        toggleActiveEvent={toggleActiveEvent}
        toggleSortEvents={toggleSortEvents}
      />
    </div>
  );
};

export default AvaliableEvents;
