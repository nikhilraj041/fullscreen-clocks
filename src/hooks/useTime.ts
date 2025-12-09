import { useState, useEffect } from "react";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

interface TimeData {
  time: string;
  seconds: string;
  date: string;
  dayOfWeek: string;
}

export function useTime(timezone: string): TimeData {
  const [timeData, setTimeData] = useState<TimeData>(() => getTimeData(timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeData(getTimeData(timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return timeData;
}

function getTimeData(timezone: string): TimeData {
  const now = new Date();
  const zonedTime = toZonedTime(now, timezone);

  return {
    time: format(zonedTime, "HH:mm"),
    seconds: format(zonedTime, "ss"),
    date: format(zonedTime, "MMMM d, yyyy"),
    dayOfWeek: format(zonedTime, "EEEE"),
  };
}
