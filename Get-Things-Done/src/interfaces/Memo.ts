export interface Memo {
    id: number;
    title: string;
    note: string;
    type: 'temp' | 'todo' | 'event';
    startDate?: Date;
    endDate?: Date;
    repeat?: string;
}