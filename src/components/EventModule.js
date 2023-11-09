import React from 'react';
import './styling/event.css'; // Import your CSS file for styling

function EventModule({ header, photo, time, date, location }) {
  return (
    <div class="EventModule">
      <img src={photo} alt="Event" />
      <div class="bottom-left">
        <h3>{header}</h3>
        <p>{location}</p>
        <p>{time}</p>
        <p>{date}</p>

      </div>
      <div class="bottom-right">
        <img src={process.env.PUBLIC_URL + '\eventattendees.png'} alt="Atendees" />
      </div>
    </div>
  );
}

export default EventModule;

