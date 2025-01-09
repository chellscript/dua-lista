import React from "react";
import { ListHookProps } from "../../types";

const SelectButtons = ({
  toggleActiveEvent,
  toggleAllActiveEvents,
  clearActiveEvents,
  activeEvents,
  events,
}: Omit<ListHookProps, "updateEventsData" | "toggleSortEvents">) => {
  return (
    <div className="flex gap-x-2">
      <button
        onClick={toggleAllActiveEvents}
        className="button flex flex-nowrap items-center justify-center gap-x-2 bg-blue-200 text-center text-blue-950 hover:bg-blue-400 md:text-nowrap"
        disabled={activeEvents.length === events.length}
      >
        <span>
          {" "}
          {activeEvents.length === events.length
            ? "All Events Selected"
            : "Select All Events"}{" "}
        </span>
      </button>{" "}
      <button
        onClick={clearActiveEvents}
        disabled={!activeEvents.length}
        className="button bg-orange-200 text-center text-secondaryBlack md:text-nowrap"
      >
        {activeEvents.length ? (
          <span>
            {" "}
            Unselect{" "}
            <span className="font-bold underline disabled:font-normal disabled:no-underline">
              {activeEvents.length} Event(s)
            </span>{" "}
          </span>
        ) : (
          "No Events Selected"
        )}
      </button>
    </div>
  );
};

export default SelectButtons;
