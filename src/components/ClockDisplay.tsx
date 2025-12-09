import { useTime } from "@/hooks/useTime";
import { getTimezoneByValue } from "@/lib/timezones";
import { cn } from "@/lib/utils";

interface ClockDisplayProps {
  timezone: string;
  size: "full" | "half" | "quarter";
}

export function ClockDisplay({ timezone, size }: ClockDisplayProps) {
  const { time, seconds, date, dayOfWeek } = useTime(timezone);
  const tzInfo = getTimezoneByValue(timezone);

  const sizeClasses = {
    full: {
      time: "text-[12vw] md:text-[14vw]",
      seconds: "text-[4vw] md:text-[5vw]",
      date: "text-xl md:text-2xl",
      zone: "text-sm md:text-base",
    },
    half: {
      time: "text-[8vw] md:text-[10vw]",
      seconds: "text-[2.5vw] md:text-[3vw]",
      date: "text-base md:text-lg",
      zone: "text-xs md:text-sm",
    },
    quarter: {
      time: "text-[6vw] md:text-[7vw]",
      seconds: "text-[2vw] md:text-[2.5vw]",
      date: "text-sm md:text-base",
      zone: "text-xs",
    },
  };

  const classes = sizeClasses[size];

  return (
    <div className="clock-container select-none">
      <div className="flex items-baseline justify-center">
        <span className={cn("clock-time leading-none", classes.time)}>
          {time}
        </span>
        <span
          className={cn(
            "clock-time leading-none opacity-60 animate-pulse-slow ml-1",
            classes.seconds
          )}
        >
          {seconds}
        </span>
      </div>

      <div className={cn("clock-date mt-4", classes.date)}>
        {dayOfWeek}, {date}
      </div>

      <div className={cn("clock-zone mt-2", classes.zone)}>
        {tzInfo?.label || timezone} · {tzInfo?.offset || ""}
      </div>
    </div>
  );
}
