import { Todo } from './Todo';
import { Memo } from './Memo';
import { Event } from './Event';

export interface Project {
    id: string;
    name: string;
    hex: `#${string}`;
    type: 'project';
    items?: (Project | Todo | Memo | Event)[];
}