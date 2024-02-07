import { Todo } from './Todo';
import { Memo } from './Memo';
import { Event } from './Event';

export interface Project {
    id: Date;
    name: string;
    type: 'project';
    hex: `#${string}`;
    icon?: string; // debugging 
    items?: (Project | Todo | Memo | Event)[];
    docRef: string;
}