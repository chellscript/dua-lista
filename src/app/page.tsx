"use client";

import data from "../../public/eventsData.json";
import { useRef, useState } from "react";
import { Event } from "../../types";
import AvaliableEvents from "@/components/eventsAvaliable";
import SelectedEvents from "@/components/eventsSelected";
import GeneratedIds from "@/components/generatedEventIds";

export default function Home() {
  const eventIdsRef = useRef<HTMLDivElement>(null);

  const {
    customer: { name, id, email, purchasedEvents },
  } = data;

  const [availableEvents, setAvailableEvents] = useState<Event[] | []>(
    purchasedEvents,
  );
  const [eventsToAdd, setEventsToAdd] = useState<string[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<Event[] | []>([]);
  const [eventsToReturn, setEventsToReturn] = useState<string[]>([]);

  const [showEventIds, setShowEventIds] = useState<string[]>([]);

  const handleAddEvents = (sortedEvents: {
    filtered: Event[];
    remaining: Event[];
  }) => {
    setAvailableEvents(sortedEvents.remaining);
    setSelectedEvents([...sortedEvents.filtered, ...selectedEvents]);
    setEventsToAdd([]);
    setShowEventIds([]);
  };

  const handleRemoveEvents = (sortedEvents: {
    filtered: Event[];
    remaining: Event[];
  }) => {
    setSelectedEvents(sortedEvents.remaining);
    setAvailableEvents([...sortedEvents.filtered, ...availableEvents]);
    setEventsToReturn([]);
    setShowEventIds([]);
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
    <div className="flex size-fit min-h-full min-w-full flex-col items-center justify-center gap-y-4 bg-mainLight p-4 pb-10">
      <div className="website-max-width flex w-11/12 flex-col gap-y-4">
        <div className="text-xl">
          <div>Name: {name}</div>
          <div>Id: {id}</div>
          <div>Email: {email}</div>
        </div>
        <div className="flex flex-col items-baseline justify-center *:flex-1 max-lg:gap-y-8 lg:flex-row lg:justify-evenly lg:gap-x-4">
          <AvaliableEvents
            updateList={handleAddEvents}
            data={availableEvents}
            activeEvents={eventsToAdd}
            setActiveEvents={setEventsToAdd}
          />
          <SelectedEvents
            updateList={handleRemoveEvents}
            data={selectedEvents}
            activeEvents={eventsToReturn}
            setActiveEvents={setEventsToReturn}
            generateEventIds={generateEventIds}
          />
        </div>{" "}
        <div id="event-ids" ref={eventIdsRef}>
          {!!showEventIds.length && (
            <GeneratedIds showEventIds={showEventIds} />
          )}
        </div>
      </div>
    </div>
  );
}
