import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface SplitControlsProps {
  count: number;
  onAdd: () => void;
  onRemove: () => void;
  maxCount: number;
}

export function SplitControls({
  count,
  onAdd,
  onRemove,
  maxCount,
}: SplitControlsProps) {
  return (
    <div className="split-controls">
      <button
        onClick={onRemove}
        disabled={count <= 1}
        className={cn(
          "split-button",
          count <= 1 ? "opacity-30 cursor-not-allowed" : "split-button-inactive"
        )}
        aria-label="Remove clock"
      >
        <Minus className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-1 px-3">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              num <= count ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>

      <button
        onClick={onAdd}
        disabled={count >= maxCount}
        className={cn(
          "split-button",
          count >= maxCount
            ? "opacity-30 cursor-not-allowed"
            : "split-button-inactive"
        )}
        aria-label="Add clock"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
