"use client";

import React from "react";
import EventsList from "./list";
import { BulkSelectButtons, ListActionButton } from "./buttons";
import { UseListHook } from "../../types";
import useListHook from "@/utils/hooks/useListHook";

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
    <div className="list bg-sky-300 shadow-accent">
      <div className="flex flex-col text-center">
        <h2 className="group text-center font-mono">
          <span className="decoration-white decoration-wavy decoration-2 underline-offset-8 group-hover:underline">
            Avaliable Events
          </span>
          <span className="ml-3 rounded-md bg-white px-2 py-1">
            {events.length}
          </span>
        </h2>
        <p>A list of all the customer's purchased events</p>
      </div>
      <div className="flex flex-col justify-between gap-x-2">
        <div className="button-container max-md:flex-col">
          <BulkSelectButtons
            toggleAllActiveEvents={toggleAllActiveEvents}
            clearActiveEvents={clearActiveEvents}
            activeEvents={activeEvents}
            events={data}
          />
          <ListActionButton
            updateEventsData={updateEventsData}
            activeEvents={activeEvents}
            className="flex-row-reverse lg:flex-row"
          >
            <div className="list-action-button-label">
              <span>Add </span>
              <span>
                <span className="rounded-md bg-white px-2 text-xl">
                  {activeEvents.length}
                </span>{" "}
                Event(s)
              </span>{" "}
            </div>
            <span
              className="iconify text-xl max-lg:rotate-90 lg:text-3xl"
              data-icon="mdi:arrow-right-bold"
              data-inline="true"
            />
          </ListActionButton>
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
