import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const PreferencesForm = ({ onSubmit, events }) => {
    const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [formData, setFormData] = useState({
        searchQuery: '',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        const filteredEvents = filterEventsBasedOnPreferences(events, formData);
        console.log(events);
        console.log(formData);
        console.log('filteredEvents:', filteredEvents);
        console.log('searchQuery:', formData.searchQuery);
        if (formData.searchQuery.trim() === '') {
            setAlertVisible(true);
            setAlertMessage('Please enter an event.'); // Set the alert message
        } else if (filteredEvents.length > 0) {
            setAlertVisible(false);
            navigate(`/events?search=${formData.searchQuery}`);
        } else {
            setAlertVisible(true);
            setAlertMessage('No events found.'); // Set the alert message
        }
    };
      

    const filterEventsBasedOnPreferences = (events, preferences) => {
        if (!preferences || !events) {
            return [];
        }

        const { searchQuery } = preferences;
        const filteredEvents = events.filter((event) =>
            event.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return filteredEvents;
    };


    return (
        <div>
            <form onSubmit={handleSubmit} style={styles.searchBar}>
                <input
                    type="text"
                    name="searchQuery"
                    placeholder="Enter your search query"
                    value={formData.searchQuery}
                    onChange={handleChange}
                    style={styles.searchInput}
                />
                <button type="submit" style={styles.submitButton}>Submit</button>
            </form>
            {alertVisible && (
                <div style={styles.alertContainer}>
                    <FontAwesomeIcon icon={faExclamationCircle} style={styles.alertIcon} />
                    {formData.searchQuery.trim() === '' ? (
                        <p style={styles.alertMessage}>Please enter an event.</p>
                    ) : (
                        <p style={styles.alertMessage}>No events found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

const styles = {
    searchInput: {
        flex: '1',
        padding: '8px',
        borderRadius: '4px 0 0 4px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '0 auto',
    },
    submitButton: {
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: '#fff',
        fontSize: '16px',
        marginLeft: '8px', // Added margin to create space between search bar and button
        cursor: 'pointer',
    },
    alertContainer: {
        display: 'flex',
        alignItems: 'center',
        background: '#f8d7da',
        color: '#721c24',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '26px',
        marginRight: '14em',
        marginLeft: '12em',
        marginTop: '1em',
    },
    alertIcon: {
        marginRight: '10px',
        color: '#721c24',
    },
    alertMessage: {
        margin: '0',
    },
}

export default PreferencesForm;
