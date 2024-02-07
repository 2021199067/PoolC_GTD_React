import { RRule } from './RRule';

export interface Memo {
    id: Date; // id = new Date;
    title: string;
    type: 'memo' | 'todo' | 'event'; //temp => memo
    note?: string;
    startDate?: Date | null;
    endDate?: Date | null;
    repeat?: RRule;
    completed: Boolean;
    docRef?: string;
}