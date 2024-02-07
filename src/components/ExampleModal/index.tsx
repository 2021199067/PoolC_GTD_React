import React from 'react';
import styles from './index.module.css';
import { Dictionary } from '@fullcalendar/core/internal';

interface ExampleModalProps {
    event: {
        //id: number;
        title: string;
        extendedProps: Dictionary;
        start: Date;
        // Add any additional event properties here
    };
    onClose: () => void;
}

const ExampleModal: React.FC<ExampleModalProps> = ({ event, onClose }) => {
    const eventType = event.extendedProps.type === 'event' ? 'Event' : 'Todo';
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className={styles.modal} onClick={handleBackdropClick}>
            <div className={styles.content}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <h2>{eventType} Details</h2>
                {/* <p><strong>id:</strong> {event.id}</p> */}
                <p><strong>Title:</strong> {event.title}</p>
                <p><strong>Start:</strong> {event.start.toLocaleString()}</p>
            </div>
        </div>
    );
}

export default ExampleModal;