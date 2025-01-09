import React from "react";

const EventIdsList = ({ showEventIds }: { showEventIds: string[] }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="debug flex items-center gap-x-2 p-4">
        <h3>Generated Event Ids</h3>
        <button
          onClick={() => console.log("copy generated ids tba")}
          className="button"
        >
          Copy Events
        </button>
      </div>
      <div className="max-w-screen flex flex-wrap gap-2 p-4">
        {showEventIds.map((id) => (
          <span className="truncate whitespace-nowrap rounded-xl border border-secondaryBlack bg-white p-2 hover:bg-main hover:text-white">
            {id}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EventIdsList;
