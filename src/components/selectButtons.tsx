import React from "react";
import { Event } from "../../types";

export type SelectButtonsProps = {
  data: Event[];
  activeEvents: string[];
  deselectEvents: () => void;
  toggleSelectEvents: () => void;
};

const SelectButtons = ({
  toggleSelectEvents,
  deselectEvents,
  activeEvents,
  data,
}: SelectButtonsProps) => {
  return (
    <div className="flex gap-x-2 *:flex-1">
      <button
        onClick={toggleSelectEvents}
        className="cta-button flex flex-nowrap items-center justify-center gap-x-2 bg-blue-200 text-center text-blue-950 hover:bg-blue-400 md:text-nowrap"
        disabled={activeEvents.length === data.length}
      >
        <span>
          {" "}
          {activeEvents.length === data.length
            ? "All Events Selected"
            : "Select All Events"}{" "}
        </span>
      </button>{" "}
      <button
        onClick={deselectEvents}
        disabled={!activeEvents.length}
        className="cta-button bg-indigo-300 text-center text-secondaryBlack md:text-nowrap"
      >
        {activeEvents.length ? (
          <span>
            {" "}
            Un-Select{" "}
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
