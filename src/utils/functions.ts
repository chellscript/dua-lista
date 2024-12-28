import { Event } from "../../types";


export type ReturnedUpdates = { filtered: Event[]; remaining: Event[] };

export const returnUpdatedLists = (
  data: Event[],
  activeEvents: string[]
): ReturnedUpdates => {
  return data.reduce(
    (acc: ReturnedUpdates, event) => {
      if (activeEvents.includes(event.id)) {
        acc.filtered.push(event);
      } else {
        acc.remaining.push(event);
      }
      return acc;
    },
    { filtered: [], remaining: [] }
  );
};


