import { Repeat } from './Repeat';
import { Project } from './Project';

export interface Memo {
    id: Date; // id = new Date;
    title: string;
    project: Project | 'inbox';
    type: 'memo';
    note?: string;
    
    when?: boolean;
    someday?: boolean;
    allDay?: boolean;
    startDate?: Date | null;
    startTime?: Date | string | null;
    endDate?: Date | null;
    endTime?: Date | string | null;
    repeat?: Repeat;
    completed?: boolean;
    docRef?: string;
}