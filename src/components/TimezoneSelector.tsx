import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TIMEZONES } from "@/lib/timezones";
import { Globe } from "lucide-react";

interface TimezoneSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function TimezoneSelector({ value, onChange }: TimezoneSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-auto min-w-[140px] bg-secondary/80 backdrop-blur-sm border-border/50 text-secondary-foreground hover:bg-secondary">
        <Globe className="w-4 h-4 mr-2 text-primary" />
        <SelectValue placeholder="Select timezone" />
      </SelectTrigger>
      <SelectContent className="bg-popover border-border/50 backdrop-blur-md max-h-[300px]">
        {TIMEZONES.map((tz) => (
          <SelectItem
            key={tz.value}
            value={tz.value}
            className="text-popover-foreground hover:bg-secondary focus:bg-secondary"
          >
            <span className="flex items-center gap-2">
              <span>{tz.label}</span>
              <span className="text-muted-foreground text-xs">{tz.offset}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
