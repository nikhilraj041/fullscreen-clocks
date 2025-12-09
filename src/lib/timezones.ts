export interface Timezone {
  value: string;
  label: string;
  offset: string;
}

export const TIMEZONES: Timezone[] = [
  { value: "Pacific/Honolulu", label: "Honolulu", offset: "UTC-10" },
  { value: "America/Anchorage", label: "Anchorage", offset: "UTC-9" },
  { value: "America/Los_Angeles", label: "Los Angeles", offset: "UTC-8" },
  { value: "America/Denver", label: "Denver", offset: "UTC-7" },
  { value: "America/Chicago", label: "Chicago", offset: "UTC-6" },
  { value: "America/New_York", label: "New York", offset: "UTC-5" },
  { value: "America/Sao_Paulo", label: "São Paulo", offset: "UTC-3" },
  { value: "Atlantic/Reykjavik", label: "Reykjavik", offset: "UTC+0" },
  { value: "Europe/London", label: "London", offset: "UTC+0" },
  { value: "Europe/Paris", label: "Paris", offset: "UTC+1" },
  { value: "Europe/Berlin", label: "Berlin", offset: "UTC+1" },
  { value: "Europe/Moscow", label: "Moscow", offset: "UTC+3" },
  { value: "Asia/Dubai", label: "Dubai", offset: "UTC+4" },
  { value: "Asia/Karachi", label: "Karachi", offset: "UTC+5" },
  { value: "Asia/Kolkata", label: "Mumbai", offset: "UTC+5:30" },
  { value: "Asia/Dhaka", label: "Dhaka", offset: "UTC+6" },
  { value: "Asia/Bangkok", label: "Bangkok", offset: "UTC+7" },
  { value: "Asia/Singapore", label: "Singapore", offset: "UTC+8" },
  { value: "Asia/Hong_Kong", label: "Hong Kong", offset: "UTC+8" },
  { value: "Asia/Shanghai", label: "Shanghai", offset: "UTC+8" },
  { value: "Asia/Tokyo", label: "Tokyo", offset: "UTC+9" },
  { value: "Asia/Seoul", label: "Seoul", offset: "UTC+9" },
  { value: "Australia/Sydney", label: "Sydney", offset: "UTC+11" },
  { value: "Pacific/Auckland", label: "Auckland", offset: "UTC+13" },
];

export function getTimezoneByValue(value: string): Timezone | undefined {
  return TIMEZONES.find((tz) => tz.value === value);
}
