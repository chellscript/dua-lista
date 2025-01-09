import { useEffect, useState } from "react";
import { Event, UseListHook } from "../../../types";
import { returnUpdatedLists } from "../functions";

const useListHook = ({ data, updateData }: UseListHook) => {
  const [events, setEvents] = useState<Event[]>(data);
  const [activeEvents, setActiveEvents] = useState<Event["id"][]>([]);

  useEffect(() => {
    setEvents(data);
  }, [data]);

  const toggleSortEvents = (property: keyof Event) => {
    let updatedList = events.sort((a, b) => Number(a[property] < b[property]));
    setEvents(updatedList);
  };

  const updateEventsData = () => {
    const updates = returnUpdatedLists(events, activeEvents);
    setActiveEvents([]);
    updateData(updates);
  };

  const toggleActiveEvent = (id: Event["id"]) => {
    setActiveEvents((prev) =>
      prev.includes(id)
        ? prev.filter((eventId) => eventId !== id)
        : [...prev, id],
    );
  };

  const toggleAllActiveEvents = () => {
    let update =
      activeEvents.length === events.length ? [] : events.map(({ id }) => id);
    setActiveEvents(update);
  };

  const clearActiveEvents = () => setActiveEvents([]);

  return {
    events,
    activeEvents,
    toggleActiveEvent,
    toggleAllActiveEvents,
    clearActiveEvents,
    updateEventsData,
    toggleSortEvents,
  };
};

export default useListHook;
