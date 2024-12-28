"use client";

import React from "react";
import EventsList from "./list";
import SelectButtons from "./selectButtons";
import { returnUpdatedLists } from "@/utils/functions";
import { EventContainerProps } from "../../types";
import { twMerge } from "tailwind-merge";

const SelectedEvents = ({
  data,
  activeEvents,
  setActiveEvents,
  updateList,
  generateEventIds,
}: EventContainerProps & { generateEventIds: () => void }) => {
  const handleUpdateList = () => {
    const updates = returnUpdatedLists(data, activeEvents);
    updateList(updates);
  };

  const toggleSelectEvents = () => {
    if (activeEvents.length === data.length) {
      setActiveEvents([]);
    } else {
      const allEventIds = data.map(({ id }) => id);
      setActiveEvents(allEventIds);
    }
  };

  const deselectEvents = () => setActiveEvents([]);

  return (
    <div className="flex w-full flex-col gap-y-4">
      <div
        className={twMerge(
          "flex flex-col rounded-base border-2 border-secondaryBlack p-4 py-2 shadow-light md:w-10/12 lg:w-full",
          data.length > 0 ? "bg-main/20" : "bg-white",
        )}
      >
        <div className="flex flex-col text-center">
          <h2 className="mb-0 text-center">Selected Events</h2>
          <p>Selected events to generate Event Ids</p>
        </div>
        <div className="flex flex-col justify-between gap-x-2">
          <div className="my-4 flex w-full gap-2 max-lg:flex-col max-md:flex-col lg:flex-row-reverse">
            <SelectButtons
              toggleSelectEvents={toggleSelectEvents}
              deselectEvents={deselectEvents}
              activeEvents={activeEvents}
              data={data}
            />

            <button
              disabled={activeEvents.length === 0}
              onClick={handleUpdateList}
              className="cta-button flex items-center justify-center gap-x-2 text-nowrap rounded-base bg-red-200 p-4 text-lg font-bold underline disabled:font-normal disabled:no-underline max-lg:w-full md:mr-auto"
            >
              <span
                className="iconify text-lg max-lg:rotate-90 lg:text-xl"
                data-icon="mdi:arrow-left-bold"
                data-inline="true"
              />
              <span>Return {activeEvents.length} Event(s)</span>
            </button>
          </div>
        </div>
        <EventsList
          emptyState={{
            icon: "mingcute:sad-line",
            message:
              "No Events Selected! <br />Choose from the Left to Create this List",
          }}
          data={data}
          activeEvents={activeEvents}
          setActiveEvents={setActiveEvents}
        />
      </div>
      <button
        disabled={data.length === 0}
        className="cta-button w-full self-end bg-main text-2xl"
        onClick={generateEventIds}
      >
        Generate {data.length} Event Id(s)
      </button>
    </div>
  );
};

export default SelectedEvents;
