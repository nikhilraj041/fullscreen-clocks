import { ClockDisplay } from "./ClockDisplay";
import { TimezoneSelector } from "./TimezoneSelector";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClockPanelProps {
  timezone: string;
  onTimezoneChange: (timezone: string) => void;
  onRemove?: () => void;
  canRemove: boolean;
  size: "full" | "half" | "quarter";
  className?: string;
}

export function ClockPanel({
  timezone,
  onTimezoneChange,
  onRemove,
  canRemove,
  size,
  className,
}: ClockPanelProps) {
  return (
    <div className={cn("clock-panel group", className)}>
      <div className="clock-controls flex items-center gap-2">
        <TimezoneSelector value={timezone} onChange={onTimezoneChange} />
        {canRemove && onRemove && (
          <button
            onClick={onRemove}
            className="control-button"
            aria-label="Remove clock"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <ClockDisplay timezone={timezone} size={size} />
    </div>
  );
}
