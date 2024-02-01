import { RRule } from './RRule';

export interface Memo {
    id: string;
    title: string;
    type: 'memo' | 'todo' | 'event';
    note?: string;
    startDate?: Date;
    endDate?: Date;
    repeat?: RRule;
}