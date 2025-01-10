"use client";
import React from "react";
import EventsList from "./list";
import { BulkSelectButtons, ListActionButton } from "./buttons";
import { UseListHook } from "../../types";
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
    <div className="list border-secondaryBlack bg-main/50 shadow-main">
      <div className="flex flex-col text-center">
        <h2 className="group text-center font-mono">
          <span className="decoration-main decoration-wavy decoration-2 underline-offset-8 group-hover:underline">
            Selected Events
          </span>
          <span className="ml-3 rounded-md bg-white p-1">
            [{events.length}]
          </span>
        </h2>
        <p>Selected events to generate Event Ids</p>
      </div>
      <div className="flex flex-col justify-between gap-x-2">
        <div className="button-container max-md:flex-col-reverse lg:flex-row-reverse">
          <BulkSelectButtons
            toggleAllActiveEvents={toggleAllActiveEvents}
            clearActiveEvents={clearActiveEvents}
            activeEvents={activeEvents}
            events={data}
          />
          <ListActionButton
            updateEventsData={updateEventsData}
            activeEvents={activeEvents}
            className="flex-row-reverse"
          >
            <div className="list-action-button-label">
              <span>Return </span>
              <span>
                {" "}
                <span className="rounded-md bg-white px-2 text-xl">
                  [{activeEvents.length}]
                </span>{" "}
                Event(s)
              </span>{" "}
            </div>
            <span
              className="iconify text-xl max-lg:rotate-90 md:text-2xl lg:text-3xl"
              data-icon="mdi:arrow-left-bold"
              data-inline="true"
            />
          </ListActionButton>
        </div>
      </div>

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
  );
};

export default SelectedEvents;
