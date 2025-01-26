"use client";

import data from "../../public/eventsData.json";
import { useRef, useState } from "react";
import { Event } from "../../types";
import AvaliableEvents from "@/components/eventsAvaliable";
import SelectedEvents from "@/components/eventsSelected";
import EventIdsList from "@/components/eventIdsList";
import Profile from "@/components/Profile";
import { formatDate } from "@/utils/dateParser";

export default function Home() {
  const eventIdsRef = useRef<HTMLDivElement>(null);

  const {
    customer: { name, id, email, purchasedEvents, joined },
  } = data;

  const customerDetails: Record<string, string | number> = {
    name,
    id,
    email,
    "member since": formatDate(joined),
    "purchased events": purchasedEvents.length,
  };

  const [availableEvents, setAvailableEvents] =
    useState<Event[]>(purchasedEvents);
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [showEventIds, setShowEventIds] = useState<Event["id"][]>([]);

  const [showEventGenerator, setShowEventGenerator] = useState(false);

  const handleAddEvents = (sortedEvents: {
    filtered: Event[];
    remaining: Event[];
  }) => {
    setAvailableEvents(sortedEvents.remaining);
    setSelectedEvents([...sortedEvents.filtered, ...selectedEvents]);
  };

  const handleRemoveEvents = (sortedEvents: {
    filtered: Event[];
    remaining: Event[];
  }) => {
    setSelectedEvents(sortedEvents.remaining);
    setAvailableEvents([...sortedEvents.filtered, ...availableEvents]);
  };

  const generateEventIds = () => {
    const ids = selectedEvents.map((event) => event.id);

    setShowEventIds(ids);
    eventIdsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="flex min-h-full flex-col items-center gap-y-4 bg-mainLight p-8">
      <div className="website-max-width flex flex-col gap-y-4 lg:gap-y-8 xl:w-11/12">
        <Profile
          data={customerDetails}
          showEventGenerator={showEventGenerator}
          setShowEventGenerator={setShowEventGenerator}
        />
        {showEventGenerator && (
          <>
            <div className="flex flex-col gap-2">
              <h3 className="my-4 flex flex-nowrap items-center gap-x-2 text-3xl font-semibold">
                <span
                  className="iconify"
                  data-icon="akar-icons:ticket"
                  data-inline="true"
                />{" "}
                Event ID Generator
              </h3>
              <div className="grid grid-flow-row grid-cols-1 flex-col items-baseline justify-center *:h-full max-lg:gap-y-8 lg:grid-flow-col lg:grid-cols-2 lg:gap-x-8">
                <AvaliableEvents
                  updateData={handleAddEvents}
                  data={availableEvents}
                />
                <SelectedEvents
                  updateData={handleRemoveEvents}
                  data={selectedEvents}
                />
              </div>{" "}
              <div className="flex justify-end">
                <button
                  disabled={selectedEvents.length === 0}
                  className="button w-full rounded-md bg-orange-500/80 p-2 text-2xl hover:font-bold lg:w-[calc(50%-16px)]"
                  onClick={generateEventIds}
                >
                  Generate
                  <span className="ml-3 rounded-md bg-white p-1">
                    {selectedEvents.length}
                  </span>{" "}
                  Event Id(s)
                </button>
              </div>{" "}
            </div>
            <div id="event-ids" ref={eventIdsRef}>
              {!!showEventIds.length && (
                <EventIdsList showEventIds={showEventIds} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
