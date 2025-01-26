import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export const formatDateTime = (timestamp: number): string =>
  dayjs(timestamp).format("Do MMM YYYY @ HH:mm");

export const formatDate = (timestamp: number): string =>
  dayjs(timestamp).format("Do MMM YYYY");
