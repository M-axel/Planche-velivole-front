import React from 'react';
import Calendar from 'react-calendar';

import './Calendrier.css';

const Calendrier = () => {
    return (
        <Calendar
        
        maxDate={new Date() /* on ne peut pas selectionner une archive qui n'existe pas encore */}
        />
    );
};

export default Calendrier;