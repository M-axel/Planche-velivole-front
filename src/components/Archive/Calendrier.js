import React from 'react';
import Calendar from 'react-calendar';

import './Calendrier.css';

const Calendrier = props => {
    return (
        <Calendar
        onClickDay={props.callback} // Si déclanché, on rappelle le component parent
        value={props.dateState}
        maxDate={new Date() /* on ne peut pas selectionner une archive qui n'existe pas encore */}
        />
    );
};

export default Calendrier;