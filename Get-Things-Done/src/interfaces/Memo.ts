export interface Memo {
    id: number;
    label: string;
    type: 'temp' | 'todo' | 'event';
    date?: Date;
    tags?: string[];
    repeat?: string;
    alarm?: Date;
}