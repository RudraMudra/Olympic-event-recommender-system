import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Event_List = ({ events }) => {
  const [expandedEvents, setExpandedEvents] = useState([]);


  const toggleEventDetails = (eventId) => {
    if (expandedEvents.includes(eventId)) {
      setExpandedEvents(expandedEvents.filter((id) => id !== eventId));
    } else {
      setExpandedEvents([...expandedEvents, eventId]);
    }
  };

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };


  return (
    <div className="event-list">
      <button className="go-back-button" onClick={handleGoBack}>Go Back</button>
      {events.map((event) => (
        <div key={event.id} className="event">
          <h2 className="event_name">{event.name}</h2>
          <p className="event-category">Category: {event.category}</p>
          <p className="event-date">Date: {event.date}</p>
          {/* Display additional details only if the event is expanded */}
          {expandedEvents.includes(event.id) && (
            <>
              <p className="event-location">Location: {event.location}</p>
              <p className="event-description">Description: {event.description}</p>
              <p className="event-participants">Participants: {event.participants}</p>
              <p className="event-ticket">Ticket Availability: {event.ticketAvailability}</p>
              <button className="event-details-button">
                <Link to={`/event/${event.id}`}>Enhance Event Details</Link>
              </button>
            </>
          )}
          {/* Button to toggle event details */}
          <button
            className="toggle-details-button"
            onClick={() => toggleEventDetails(event.id)}
          >
            {expandedEvents.includes(event.id) ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Event_List;
