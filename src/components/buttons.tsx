import React, { ReactNode } from "react";
import { ListHookProps } from "../../types";
import { twMerge } from "tailwind-merge";

export const BulkSelectButtons = ({
  toggleAllActiveEvents,
  clearActiveEvents,
  activeEvents,
  events,
}: Pick<
  ListHookProps,
  "toggleAllActiveEvents" | "clearActiveEvents" | "activeEvents" | "events"
>) => {
  return (
    <div className="flex flex-col gap-y-3 max-md:w-full md:w-1/2 lg:w-fit">
      <button
        onClick={toggleAllActiveEvents}
        className="button select-button w-full"
        disabled={activeEvents.length === events.length}
      >
        <span>
          {activeEvents.length === events.length
            ? "All Events Selected"
            : "Select All Events"}{" "}
        </span>
      </button>{" "}
      <button
        onClick={clearActiveEvents}
        disabled={!activeEvents.length}
        className="button select-button"
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

export const ListActionButton = ({
  activeEvents,
  updateEventsData,
  children,
  className,
}: Pick<ListHookProps, "activeEvents" | "updateEventsData"> & {
  children: ReactNode;
  className: string;
}) => (
  <button
    disabled={activeEvents.length === 0}
    onClick={updateEventsData}
    className="list-action-button button bg-actionButton shadow-actionButtonDark h-fit w-fit rounded-lg border"
  >
    <div
      className={twMerge(
        "flex w-full items-center justify-end rounded-lg px-2 disabled:font-normal",
        className,
      )}
    >
      {children}
    </div>
  </button>
);
