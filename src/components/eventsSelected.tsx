"use client";

import React, { useState } from "react";
import EventsList from "./list";
import SelectButtons from "./selectButtons";
import { returnUpdatedLists } from "@/utils/functions";
import { Event, EventContainerProps, UseListHook } from "../../types";
import { twMerge } from "tailwind-merge";
import useListHook from "@/utils/hooks/useListHook";

const SelectedEvents = ({ data, updateData }: UseListHook) => {
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
        "flex w-full flex-col rounded-base border-2 p-4 py-2 shadow-light",
        data.length > 0
          ? "border-secondaryBlack bg-main/30 shadow-main"
          : "border-secondaryBlack bg-white",
      )}
    >
      <div className="flex flex-col text-center">
        <h2 className="text-center decoration-main decoration-wavy decoration-2 underline-offset-8 hover:underline">
          Selected Events ({events.length})
        </h2>
        <p>Selected events to generate Event Ids</p>
      </div>
      <div className="flex flex-col justify-between gap-x-2">
        <div className="my-4 flex w-full justify-between gap-2 max-lg:flex-col max-md:flex-col lg:flex-row-reverse">
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
            <span className="flex flex-row-reverse items-center gap-x-2 font-bold disabled:font-normal">
              <span>Return {activeEvents.length} Event(s)</span>{" "}
              <span
                className="iconify max-lg:rotate-90 lg:text-xl"
                data-icon="mdi:arrow-left-bold"
                data-inline="true"
              />
            </span>
          </button>
        </div>
      </div>
      <div className="hover:bg-main">
        {" "}
        <EventsList
          emptyState={{
            icon: "mingcute:sad-line",
            message:
              "No Events Selected! <br />Choose from the Left to Create this List",
          }}
          events={events}
          activeEvents={activeEvents}
          toggleActiveEvent={toggleActiveEvent}
          toggleSortEvents={toggleSortEvents}
        />
      </div>
    </div>
  );
};

export default SelectedEvents;
