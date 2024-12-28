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
};
