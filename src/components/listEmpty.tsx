import React from "react";
import { twMerge } from "tailwind-merge";

const NoEvent = ({
  message,
  icon,
  className = "",
}: {
  icon: string;
  className: string;
  message: string;
}) => {
  return (
    <div className={twMerge("size-full", className)}>
      <span className="iconify text-3xl" data-icon={icon} data-inline="true" />{" "}
      <div dangerouslySetInnerHTML={{ __html: message }} />
    </div>
  );
};

export default NoEvent;
