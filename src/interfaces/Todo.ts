import { Memo } from "./Memo";

export interface Todo extends Omit<Memo, 'type'> {
    type: 'todo';
    dueDate?: Date | null;
}