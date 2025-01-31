// NavigationMenu.jsx

import PropTypes from 'prop-types';

const NavigationMenu = ({ sections, activeSection, onSelect }) => {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '30px',
      padding: '15px',
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: '#f0f2f5',
      color: '#2c3e50',
      fontSize: '0.9em',
      fontWeight: '500'
    },
    activeButton: {
      backgroundColor: '#3498db',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 2px 8px rgba(52, 152, 219, 0.3)'
    }
  };

  return (
    <nav style={styles.nav}>
      {Object.keys(sections).map((section) => (
        <button
          key={section}
          style={{
            ...styles.button,
            ...(activeSection === section ? styles.activeButton : {})
          }}
          onClick={() => onSelect(section)}
        >
          {sections[section].title}
        </button>
      ))}
    </nav>
  );
};

NavigationMenu.propTypes = {
  sections: PropTypes.object.isRequired,
  activeSection: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default NavigationMenu;