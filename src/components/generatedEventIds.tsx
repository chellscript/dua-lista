import React from "react";

const GeneratedIds = ({ showEventIds }: { showEventIds: string[] }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-baseline gap-x-2">
        <h3>Generated Event Ids</h3>
        <button
          onClick={() => console.log("copy generated ids tba")}
          className="cta-button"
        >
          Copy Events
        </button>
      </div>
      <textarea
        id="event-ids"
        name="event-ids"
        className="border border-secondaryBlack p-4"
        rows={4}
        cols={50}
        value={showEventIds.join(" ,")}
        readOnly
      />
    </div>
  );
};

export default GeneratedIds;
