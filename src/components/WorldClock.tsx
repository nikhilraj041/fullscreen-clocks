import { useState } from "react";
import { ClockPanel } from "./ClockPanel";
import { SplitControls } from "./SplitControls";
import { TIMEZONES } from "@/lib/timezones";
import { cn } from "@/lib/utils";

interface ClockState {
  id: string;
  timezone: string;
}

const DEFAULT_TIMEZONES = [
  "America/New_York",
  "Europe/London",
  "Asia/Tokyo",
  "Australia/Sydney",
];

export function WorldClock() {
  const [clocks, setClocks] = useState<ClockState[]>([
    { id: "1", timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || DEFAULT_TIMEZONES[0] },
  ]);

  const addClock = () => {
    if (clocks.length >= 4) return;

    const usedTimezones = clocks.map((c) => c.timezone);
    const nextTimezone =
      DEFAULT_TIMEZONES.find((tz) => !usedTimezones.includes(tz)) ||
      TIMEZONES.find((tz) => !usedTimezones.includes(tz.value))?.value ||
      DEFAULT_TIMEZONES[0];

    setClocks([
      ...clocks,
      { id: Date.now().toString(), timezone: nextTimezone },
    ]);
  };

  const removeClock = (id: string) => {
    if (clocks.length <= 1) return;
    setClocks(clocks.filter((c) => c.id !== id));
  };

  const updateTimezone = (id: string, timezone: string) => {
    setClocks(clocks.map((c) => (c.id === id ? { ...c, timezone } : c)));
  };

  const getSize = (): "full" | "half" | "quarter" => {
    if (clocks.length === 1) return "full";
    if (clocks.length === 2) return "half";
    return "quarter";
  };

  const getGridClasses = () => {
    switch (clocks.length) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
      case 4:
        return "grid-cols-1 md:grid-cols-2";
    }
  };

  const getGridRows = () => {
    if (clocks.length <= 2) return "grid-rows-1 md:grid-rows-1";
    return "grid-rows-2 md:grid-rows-2";
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <div
        className={cn(
          "grid h-full w-full transition-all duration-500",
          getGridClasses(),
          getGridRows()
        )}
      >
        {clocks.map((clock) => (
          <ClockPanel
            key={clock.id}
            timezone={clock.timezone}
            onTimezoneChange={(tz) => updateTimezone(clock.id, tz)}
            onRemove={() => removeClock(clock.id)}
            canRemove={clocks.length > 1}
            size={getSize()}
          />
        ))}
      </div>

      <SplitControls
        count={clocks.length}
        onAdd={addClock}
        onRemove={() => removeClock(clocks[clocks.length - 1].id)}
        maxCount={4}
      />
    </div>
  );
}
