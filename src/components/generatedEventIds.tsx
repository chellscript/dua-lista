import React from "react";

const GeneratedIds = ({ showEventIds }: { showEventIds: string[] }) => {
  return (
    <div className="flex w-full flex-col gap-y-4">
      <div className="flex items-baseline gap-x-2">
        <h3>Generated Event Ids</h3>
        <button
          onClick={() => console.log("copy generated ids tba")}
          className="cta-button"
        >
          Copy Events
        </button>
      </div>
      <div className="max-w-screen border border-secondaryBlack bg-white p-4">
        {showEventIds.join(" ,")}
      </div>
    </div>
  );
};

export default GeneratedIds;
