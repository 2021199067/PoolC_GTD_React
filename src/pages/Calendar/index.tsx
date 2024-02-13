import React from 'react';
import {
    EventApi,
    DateSelectArg,
    EventClickArg,
    EventContentArg,
    formatDate,
} from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule';
import { INITIAL_EVENTS, todoData, eventData } from './event-utils';
import ExampleModal from '../../components/ExampleModal';
import { VscDiscard } from 'react-icons/vsc'
import { WiSmallCraftAdvisory } from "react-icons/wi";
import SomedayItem from '../../components/SomedayItem'
import styles from './index.module.css';

interface CalendarState {
    currentEvents: EventApi[];
    selectedEvent: EventApi | null;
    checkedTodos: EventApi[];
    checkedTodoIds: string[];
}

export default class Calendar extends React.Component<object, CalendarState> {
    state: CalendarState = {
        currentEvents: [],
        selectedEvent: null,
        checkedTodos: [],
        checkedTodoIds: [],
    };

    calendarRef = React.createRef()

    render() {
        return (
            <div>
                <div className={styles.calendarPage}>
                    <div className={styles.calendarMain}>
                        <FullCalendar
                            ref={this.calendarRef}
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, rrulePlugin]}
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay',
                            }}
                            initialView='dayGridMonth'
                            editable={true}
                            selectable={true}
                            selectMirror={true}
                            dayMaxEvents={2}
                            weekends={true}
                            initialEvents={INITIAL_EVENTS}
                            select={this.handleDateSelect}
                            eventContent={this.renderEventContent}
                            eventClick={this.handleEventClick}
                            eventsSet={this.handleEvents}
                        />
                    </div>
                    {this.renderSidebar()}
                    {this.state.selectedEvent && (
                        <ExampleModal
                            event={this.state.selectedEvent}
                            onClose={this.closeModal}
                        />
                    )}
                </div>
                <SomedayItem todos={todoData}/>
            </div>
        );
    }

    renderSidebar() {
        return (
            <div className={styles.calendarSidebar}>
                <div className={styles.calendarSidebarSection}>
                    <h2>Complete ({this.state.checkedTodos.length})</h2>
                    <ul>
                        {this.state.checkedTodos.map(this.renderSidebarEvent)}
                    </ul>
                </div>
                {/* <div className={styles.calendarSidebarSection}>
                    <p>toggle weekends가 있었던 곳</p>
                    { <label>
                        <input
                            type='checkbox'
                            checked={this.state.weekendsVisible}
                            onChange={this.handleWeekendsToggle}
                        ></input>
                        toggle weekends
                    </label> }
                </div> */}
            </div>
        );
    }

    handleDateSelect = (selectInfo: DateSelectArg) => {

    }

    handleEventClick = (clickInfo: EventClickArg) => {
        this.setState({ selectedEvent: clickInfo.event });
    }

    handleEvents = (events: EventApi[]) => {
        this.setState({
            currentEvents: events,
        });

    }

    closeModal = () => {
        this.setState({ selectedEvent: null });
    }


    renderEventContent = (eventContent: EventContentArg) => {

        const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
            e.stopPropagation();
            const checkedTodoId = eventContent.event.id;
            if (!this.state.checkedTodoIds.includes(checkedTodoId)) {
                this.setState(prevState => ({
                    checkedTodoIds: [...prevState.checkedTodoIds, checkedTodoId],
                    checkedTodos: [...prevState.checkedTodos, eventContent.event],
                }))
                eventContent.event.remove();
            }
        }

        const { extendedProps } = eventContent.event;

        if (this.state.checkedTodoIds.includes(eventContent.event.id)) {
            return null
        }

        if (extendedProps.type === 'event') {
            return (
                <>
                    <b>{eventContent.timeText}</b>
                    <i>{eventContent.event.title}</i>
                </>
            )
        } else {
            return (
                <>
                    {extendedProps.type === 'todoDue' ?
                     <WiSmallCraftAdvisory /> : <input type="checkbox" onClick={handleCheckboxClick} />}
                    <b>{eventContent.timeText}</b>
                    <i>{eventContent.event.title}</i>
                </>
            );
        }
    }
    handleUndo = (event: EventApi) => {
        let calendarApi = this.calendarRef.current.getApi();

        calendarApi.addEvent(event);

        const updatedCheckedTodos = this.state.checkedTodos.filter(e => e.id !== event.id);
        const updatedCheckedTodoIds = this.state.checkedTodoIds.filter(id => id !== event.id);

        this.setState({
            checkedTodos: updatedCheckedTodos,
            checkedTodoIds: updatedCheckedTodoIds,
        }, () => { calendarApi.render() });
    };

    renderSidebarEvent = (event: EventApi) => {
        return (
            <li className={styles.complete} key={event.id}>
                <del>{event.title}</del>
                <small>{formatDate(new Date(), { month: 'short', day: 'numeric' })}</small>
                <VscDiscard className={styles.undo} onClick={() => this.handleUndo(event)} />
            </li>
        );
    }
}
