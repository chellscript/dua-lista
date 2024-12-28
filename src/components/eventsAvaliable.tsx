"use client";

import React from "react";
import EventsList from "./list";
import SelectButtons from "./selectButtons";
import { returnUpdatedLists } from "@/utils/functions";
import { EventContainerProps } from "../../types";

const AvaliableEvents = ({
  data,
  activeEvents,
  setActiveEvents,
  updateList,
}: EventContainerProps) => {
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
    <div className="flex flex-col rounded-base border-2 border-secondaryBlack bg-white p-4 py-2 shadow-light">
      <div className="flex flex-col text-center">
        <h2 className="mb-0 text-center">Avaliable Events</h2>
        <p>A list of all the customer's purchased events</p>
      </div>

      <div className="flex flex-col justify-between gap-x-2">
        <div className="my-4 flex w-full gap-2 max-lg:flex-col">
          <SelectButtons
            toggleSelectEvents={toggleSelectEvents}
            deselectEvents={deselectEvents}
            activeEvents={activeEvents}
            data={data}
          />
          <button
            disabled={activeEvents.length === 0}
            onClick={handleUpdateList}
            className="cta-button flex justify-center rounded-base bg-green-200 p-4 text-lg font-bold underline disabled:font-normal disabled:no-underline max-lg:w-full md:ml-auto"
          >
            <span className="flex flex-row items-center gap-x-2">
              Add {activeEvents.length} Event(s)!
              <span
                className="iconify text-lg max-lg:rotate-90 lg:text-xl"
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
        data={data}
        activeEvents={activeEvents}
        setActiveEvents={setActiveEvents}
      />
    </div>
  );
};

export default AvaliableEvents;
