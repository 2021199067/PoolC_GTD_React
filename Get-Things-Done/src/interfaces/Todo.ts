import { Memo } from "./Memo";

export interface Todo extends Memo {
    dueDate: Date;
}