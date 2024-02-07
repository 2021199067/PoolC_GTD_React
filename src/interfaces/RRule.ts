export interface RRule {
    freq: string;
    dtstart?: Date | string;
    interval?: number;
    wkst?: number | string;
    count?: number;
    until?: Date | string;
    tzid?: string;
    bysetpos?: number | number[];
    bymonth?: number | number[];
    bymonthday?: number | number[];
    byyearday?: number | number[];
    byweekno?: number | number[];
    byweekday?: number | number[] | string | string[];
    byhour?: number | number[];
    byminute?: number | number[];
    bysecond?: number | number[];
    byeaster?: number | number[];
}