import { RRule } from './RRule';

export interface Memo {
    id: Date; // id = new Date;
    title: string;
    type: 'memo' | 'todo' | 'event'; //temp => memo
    note?: string;
    startDate?: Date;
    endDate?: Date;
    repeat?: RRule;
}