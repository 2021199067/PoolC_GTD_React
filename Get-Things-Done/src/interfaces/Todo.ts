import { Memo } from "./Memo";

export interface Todo extends Memo {
    startDate: Date;
    endDate: Date;
}