import React from "react";

const EventIdsList = ({ showEventIds }: { showEventIds: string[] }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center gap-x-2 p-4">
        <h3>Generated Event Ids</h3>
        <button
          onClick={() => console.log("copy generated ids tba")}
          className="button"
        >
          Copy Events
        </button>
      </div>
      <div className="max-w-screen flex flex-wrap p-4 max-md:border-secondaryBlack max-md:bg-white md:gap-2">
        {showEventIds.map((id) => (
          <span className="truncate whitespace-nowrap rounded-xl border bg-white p-2 hover:text-white md:border-secondaryBlack md:hover:bg-main">
            {id}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EventIdsList;
