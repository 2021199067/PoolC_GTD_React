import { Memo } from "./Memo";

export interface Event extends Omit<Memo, 'type'> {
    // startDate: Date;
    type: 'event';
    place?: string;
}