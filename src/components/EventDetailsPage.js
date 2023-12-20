import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './EventDetailsPage.css'; // Import the CSS file for styling

const EventDetailsPage = ({ events }) => {
    // State variables for toggling organizer and duration details
    const [showOrganizerDetails, setShowOrganizerDetails] = useState(false);
    const [showDurationDetails, setShowDurationDetails] = useState(false);
    const { eventId } = useParams();

    // Find the event data based on the eventId
    const event = events.find((event) => event.id === parseInt(eventId));

    // Handle case when event is not found
    if (!event) {
        return <p>Event not found</p>;
    }

    // Toggle the organizer details visibility
    const toggleOrganizerDetails = () => {
        setShowOrganizerDetails(!showOrganizerDetails);
    };

    // Toggle the duration details visibility
    const toggleDurationDetails = () => {
        setShowDurationDetails(!showDurationDetails);
    };

    return (
        <div className="event-details-container">
          <h2 className='name_event'>{event.name}</h2>
          <img src={event.image} alt={event.name} className="event-image" />
          <p>Category: {event.category}</p>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>Description: {event.description}</p>
          <p>Participants: {event.participants}</p>
          <p>Ticket Availability: {event.ticketAvailability}</p>
    
          {/* Button to toggle the organizer details */}
          <button className="toggle-button" onClick={toggleOrganizerDetails}>
            {showOrganizerDetails ? 'Hide Organizer Details' : 'Show Organizer Details'}
          </button>
    
          {/* Organizer details */}
          {showOrganizerDetails && (
            <div className="details-section">
              <p>Organizer: {event.organizer}</p>
              {/* Additional organizer details */}
              <p>Contact: {event.contact}</p>
              <p>Phone: {event.phone}</p>
              {/* <p>Website: {event.website}</p> */}
            </div>
          )}
    
          {/* Button to toggle the duration details */}
          <button className="toggle-button" onClick={toggleDurationDetails}>
            {showDurationDetails ? 'Hide Duration Details' : 'Show Duration Details'}
          </button>
    
          {/* Duration details */}
          {showDurationDetails && (
            <div className="details-section">
              <p>Duration: {event.duration}</p>
              {/* Additional duration details */}
              <p>Event Timings: {event.eventTimings}</p>
              <p>Full-day Event: {event.fullDayEvent}</p>
              <p>Multiple Sessions: {event.multipleSessions}</p>
            </div>
          )}
    
          <button className="go_back-button">
            <Link to="/allevents">Go Back</Link>
          </button>
        </div>
      );
    };

export default EventDetailsPage;
