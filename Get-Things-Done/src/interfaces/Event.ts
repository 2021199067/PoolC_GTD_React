import { Memo } from "./Memo";

export interface Event extends Memo {
    startDate: Date;
    //end date 없어도 캘린더 표시 가능 (?)  
    place: string;
}