import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AllEventsPage from './components/AllEventsPage';
import Event_List from './components/Event_List';
// import PreferencesForm from './components/PreferencesForm';
import FilterOptions from './components/FilterOptions';
import EventDetailsPage from './components/EventDetailsPage';
import { events } from './data/data';
import './components/Navbar.css'; // Import the CSS file
import OlympicGamesPage from './components/OlympicGamesPage';
import './components/main.css';

const Home = ({ handlePreferencesSubmit }) => {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src="https://olympics.com/images/static/b2p-images/logo_color.svg" style={styles.logo} />
        </div>
        <div style={styles.navLinks}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/olympic-games" className="navLink">Olympic Games</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/athletes" className="navLink">Athletes</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/allevents" className="navLink">Sports</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/news" className="navLink">News</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/esports" className="navLink">Esports</Link>
            </li>
            {/* <li style={styles.navItem}>
              <Link to="/athletes" className="navLink">Olympic Channel</Link>
            </li> */}
            {/* Add more links as needed */}
          </ul>
        </div>
      </nav>

      <section className='blbIQR  dUkAOI  bjfhbI  eJISmc'>
        <h1>Olympic Games</h1>
        <h2>The Olympics are the wolrd's only true global, multi-sport,
          celebratory athletics competition. With more than 200 countries patricipation in over 400 events
          across the summer and Winter Games, the Olympics are where the world comes to compete, feel inspired, and be together.
        </h2>
      </section>

      <section data-cy="future-games-title" className='bUaGE'>
        <h2>Future Games</h2>
      </section>

      <section className='sc-bcXHqe cooZqq' data-cy="next-olympic-game">
        <section data-cy="img-wrapper" className='indexstyles-sc-g3vyh0-0 jGOKKW sc-dkrFOg vissk full-width'>
          <picture data-cy="picture-wrapper" className='styles_Picture-sc-jar9mj-0 cycHZT'>
            <img alt='Paris' loading='lazy' src='https://img.olympicchannel.com/images/image/private/t_s_pog_overview_hero_xl/f_auto/primary/ufiinqivfn8ig30anqpe' />
          </picture>
        </section>
        <div className='sc-gswNZR hJzAXy'>
          <h3 className='sc-hLBdgP hZnhpM'>
            <span>26 July - 11 August</span>
            PARIS <br />2024
          </h3>
          <section className='CardTilestyles__Card-sc-bb51o0-0 fURNPy sc-eDvSVe gWzzMW'>
            <picture data-cy="picture-wrapper" className='styles__Picture-sc-jar9mj-0'>
              <img alt='Explore' height="1" loading='lazy' src='https://img.olympicchannel.com/images/image/private/t_1-1_300/f_auto/primary/gpo3co3bpkqsikyznrns' width="1" />
            </picture>
            <a href='/olympic-games'>
              Explore
              <span className='CardTilestyles__Arrow-sc-bb51o0-1 eVJNvO'>
                <svg height="14" role='img' viewBox='0 0 15 13' width="15" xmlns='http://www.w3.org/2000/svg'>
                  <path d='M0 5.26557H11.8817L7.57006 1.11011L8.7219 0L15 6.05066L8.7219 12.1013L7.57006 10.9912L11.8817 6.83574H0V5.26557Z' fill='#2e2e2e'></path>
                </svg>
              </span>
            </a>
          </section>
        </div>
      </section>

      <section data-cy="future-games-carousel" className='Gridstyles__GridContainer-sc-1p7u4tu-0 blbIQR styles__FutureGames-sc-pf7qx0-3 jLUlPp'>
        <section className='CardTilestyles__Card-sc-bb51o0-0 fURNPY styles__OlympicGameCard-sc-pf7qx0-2 krdPDi'>
          <picture data-cy="picture-wrapper" className='styles_Picture-sc-jar9mj-0 kmBXtR'>
            <img alt='Milano Cortina 2026' height="1" loading='lazy' src='https://img.olympicchannel.com/images/image/private/t_s_fog_logo_m/f_auto/primary/d3e9dswgklvosv1ywan2' width='1' title />
          </picture>
          <a data-cy="link" href='https://milanocortina2026.olympics.com/en/'>
            Milano Cortina 2026
            {/* <span className='CardTilestyles__Arrow-sc-bb51o0-1 eVJNvO'>
              <svg height="13" role='img' viewBox='0 0 15 13' width='15' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0 5.26557H11.8817L7.57006 1.11011L8.7219 0L15 6.05066L8.7219 12.1013L7.57006 10.9912L11.8817 6.83574H0V5.26557Z' fill='#2e2e2e'></path>
              </svg>
            </span> */}
          </a>
        </section>

        <section className='CardTilestyles__Card-sc-bb51o0-0 fURNPY styles__OlympicGameCard-sc-pf7qx0-2 krdPDi'>
          <picture data-cy="picture-wrapper" className='styles_Picture-sc-jar9mj-0 kmBXtR'>
            <img alt='Milano Cortina 2026' height="1" loading='lazy' src='https://img.olympicchannel.com/images/image/private/t_s_fog_logo_m/f_auto/primary/sd6gix7qvjwbtn9zlrlb' width='1' title />
          </picture>
          <a data-cy="link" href='https://milanocortina2026.olympics.com/en/'>
            LA 2028
            {/* <span className='CardTilestyles__Arrow-sc-bb51o0-1 eVJNvO'>
              <svg height="13" role='img' viewBox='0 0 15 13' width='15' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0 5.26557H11.8817L7.57006 1.11011L8.7219 0L15 6.05066L8.7219 12.1013L7.57006 10.9912L11.8817 6.83574H0V5.26557Z' fill='#2e2e2e'></path>
              </svg>
            </span> */}
          </a>
        </section>

        <section className='CardTilestyles__Card-sc-bb51o0-0 fURNPY styles__OlympicGameCard-sc-pf7qx0-2 krdPDi'>
          <picture data-cy="picture-wrapper" className='styles_Picture-sc-jar9mj-0 kmBXtR'>
            <img alt='Milano Cortina 2026' height="1" loading='lazy' src='https://img.olympicchannel.com/images/image/private/t_s_fog_logo_m/f_auto/primary/mt2p6xy5fbsxazpfjdny' width='1' title />
          </picture>
          <a data-cy="link" href='https://milanocortina2026.olympics.com/en/'>
            Brisbane 2032
            {/* <span className='CardTilestyles__Arrow-sc-bb51o0-1 eVJNvO'>
              <svg height="13" role='img' viewBox='0 0 15 13' width='15' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0 5.26557H11.8817L7.57006 1.11011L8.7219 0L15 6.05066L8.7219 12.1013L7.57006 10.9912L11.8817 6.83574H0V5.26557Z' fill='#2e2e2e'></path>
              </svg>
            </span> */}
          </a>
        </section>

      </section>

      {/* <header style={styles.header}>
        <h1 style={styles.heading}>Welcome to the Olympics!</h1>
        <div style={styles.preferencesContainer}>
          <h2 style={styles.preferencesHeading}>Preferences</h2>
          <PreferencesForm onSubmit={handlePreferencesSubmit} />
        </div>
      </header> */}
      {/* <footer style={styles.footer}>
        <p>&copy; 2023 Welcomes you to the Olympics!</p>
      </footer> */}
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    // padding: '20px',
    boxSizing: 'border-box',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#f2f2f2',
    color: '#333',
    width: '100%',
    borderBottom: '0.1rem solid rgb(229, 229, 229)',
  },
  logoContainer: {
    marginRight: '72px',
    display: 'flex',
  },
  logo: {
    width: '120px',
    height: 'auto',
    marginLeft: '4em',
    // Add any additional styles for the logo
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
    margin: '0px 3rem',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    borderBottom: '4px solid transparent',
    alignItems: 'center',
    gap: '38px',
  },
  navItem: {
    marginLeft: '10px', // Add space around the items
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    // Add any additional styles for the heading
  },
  preferencesContainer: {
    marginBottom: '20px',
  },
  preferencesHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    // Add any additional styles for the preferences heading
  },
  viewAllEventsLink: {
    textDecoration: 'none',
    backgroundColor: '#f4f4f4',
    padding: '10px 20px',
    borderRadius: '5px',
    color: '#000',
    // Add any additional styles for the "View All Events" link
  },
  footer: {
    textAlign: 'center',
    color: '#888',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    padding: '10px 0',
    backgroundColor: '#f2f2f2',
  },
};

const App = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState(null);


  const handlePreferencesSubmit = (formData) => {
    setPreferences(formData);
    if (formData.searchQuery) {
      const filteredEvents = filterEventsBasedOnPreferences(events, formData);
      if (filteredEvents.length > 0) {
        navigate(`/events?search=${formData.searchQuery}`); // Navigate to the "/events" route
      } else {
        navigate(`/`);
      }
    }
  };

  const handleFilterChange = (selectedFilter) => {
    setPreferences((prevState) => ({
      ...prevState,
      category: selectedFilter === 'All' ? null : selectedFilter,
    }));
  };

  const filterEventsBasedOnPreferences = (events, preferences) => {
    if (!preferences) {
      return events;
    }

    const { category, date, searchQuery } = preferences;

    let filteredEvents = events;

    console.log('Initial filteredEvents:', filteredEvents);

    if (category) {
      filteredEvents = filteredEvents.filter((event) => event.category === category);
      console.log('Filtered by category:', filteredEvents);
    }

    if (date) {
      filteredEvents = filteredEvents.filter((event) => event.date === date);
      console.log('Filtered by date:', filteredEvents);
    }

    if (searchQuery) {
      const lowerCaseSearchQuery = searchQuery.toLowerCase();
      filteredEvents = filteredEvents.filter((event) =>
        event.category.toLowerCase().includes(lowerCaseSearchQuery)
      );
      console.log('Filtered by searchQuery:', filteredEvents);
    }

    return filteredEvents;
  };

  const filteredEvents = filterEventsBasedOnPreferences(events, preferences);

  return (
    <Routes>
      <Route
        path="/allevents"
        element={<AllEventsPage
          events={events}
          filteredEvents={filteredEvents}
          handleFilterChange={handleFilterChange}
        />} />
      <Route
        path="/"
        element={<Home handlePreferencesSubmit={handlePreferencesSubmit} />}
      />
      <Route path="/event/:eventId" element={<EventDetailsPage events={events} />} />
      <Route path="/olympic-games" element={<OlympicGamesPage />} />
      <Route
        path="/events"
        element={
          <EventPage
            preferences={preferences}
            handleFilterChange={handleFilterChange}
            filteredEvents={filteredEvents}
          />
        }
      />
    </Routes>
  );
};



const EventPage = ({ handleFilterChange, filteredEvents, events }) => {
  const filters = [
    { label: 'All' },
    { label: 'Track and Field' },
    { label: 'Aquatics' },
    { label: 'Basketball' },
    { label: 'Gymnastics' },
  ]; // Define your filters data here

  return (
    <div>
      <FilterOptions filters={filters} onFilterChange={handleFilterChange} events={events} />
      {filteredEvents.length > 0 ? (
        <Event_List events={filteredEvents} />
      ) : (
        <p>No Events found</p>
      )}
      {/* <AllEventsPage events={filteredEvents} /> */}
    </div>
  );
};


export default App;