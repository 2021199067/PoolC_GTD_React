import { Todo } from './Todo';
import { Memo } from './Memo';
import { Event } from './Event';

export interface Project {
    id: number;
    name: string;
    hex: `#${string}`;
    items?: (Project | Todo | Memo | Event)[];
}