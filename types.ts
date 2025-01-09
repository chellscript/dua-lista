import { ReturnedUpdates } from "@/utils/functions";

export interface Customer {
  id: string;
  name: string;
  email: string;
  purchasedEvents: Event[];
}

export interface Event {
  id: string;
  eventTitle: string;
  eventTimestamp: number;
  purchaseTimestamp: number;
}

export interface EventContainerProps {
  data: Event[] | [];
  activeEvents: string[];
  setActiveEvents: React.Dispatch<React.SetStateAction<string[]>>;
  updateList: (arg: ReturnedUpdates) => void;
}

export interface UseListHook {
  data: Event[];
  updateData: (arg: ReturnedUpdates) => void;
}

export type ListHookProps = {
  events: Event[];
  activeEvents: Event["id"][];
  toggleActiveEvent: (id: Event["id"]) => void;
  toggleAllActiveEvents: () => void;
  clearActiveEvents: () => void;
  updateEventsData: () => void;
  toggleSortEvents: (
    arg: keyof Pick<Event, "eventTitle" | "eventTimestamp">,
  ) => void;
};
