import React, { useState } from 'react';
import Event_List from './Event_List';
import FilterOptions from './FilterOptions';

const AllEventsPage = ({ events }) => {
  const [sortCriteria, setSortCriteria] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Handle sorting by date
  const handleSortByDate = () => {
    setSortCriteria('date');
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Handle sorting by category
  const handleSortByCategory = () => {
    setSortCriteria('category');
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Filter events based on the selected filter
  const filteredEvents = selectedFilter === 'All'
    ? events
    : events.filter((event) => event.category === selectedFilter);

  // Sort events based on the current sort criteria and order
  const sortedEvents = filteredEvents.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortCriteria].localeCompare(b[sortCriteria]);
    } else {
      return b[sortCriteria].localeCompare(a[sortCriteria]);
    }
  });

  const filters = [
    { label: 'All' },
    { label: 'Track and Field' },
    { label: 'Aquatics' },
    { label: 'Basketball' },
    { label: 'Gymnastics' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>SPORTS</h2>
      <div style={styles.filterContainer}>
        <FilterOptions
          filters={filters}
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleSortByDate}>
          Sort by Date {sortCriteria === 'date' && sortOrder === 'asc' && '(Asc)'}
          {sortCriteria === 'date' && sortOrder === 'desc' && '(Desc)'}
        </button>
        <button style={styles.button} onClick={handleSortByCategory}>
          Sort by Category {sortCriteria === 'category' && sortOrder === 'asc' && '(Asc)'}
          {sortCriteria === 'category' && sortOrder === 'desc' && '(Desc)'}
        </button>
      </div>
      <Event_List events={sortedEvents} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    background: '#f4f4f4',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  filterContainer: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    background: 'lightblue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AllEventsPage;
