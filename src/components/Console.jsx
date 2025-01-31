// Console.jsx

import PropTypes from 'prop-types';

const Console = ({ output }) => {
  const styles = {
    console: {
      backgroundColor: '#1e1e1e',
      color: '#fff',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '15px',
      maxHeight: '200px',
      overflowY: 'auto',
      fontFamily: 'Monaco, monospace',
      boxSizing: 'border-box'
    },
    header: {
      color: '#666',
      marginBottom: '10px',
      paddingBottom: '5px',
      borderBottom: '1px solid #333'
    },
    output: {
      color: '#4CAF50',
      padding: '5px 0',
      borderLeft: '3px solid #4CAF50',
      paddingLeft: '10px',
      margin: '5px 0'
    },
    error: {
      color: '#f44336',
      padding: '5px 0',
      borderLeft: '3px solid #f44336',
      paddingLeft: '10px',
      margin: '5px 0'
    },
    empty: {
      color: '#666',
      fontStyle: 'italic'
    }
  };

  return (
    <div style={styles.console}>
      <div style={styles.header}>// Consola</div>
      {output.map((item, index) => (
        <div
          key={index}
          style={item.type === 'error' ? styles.error : styles.output}
        >
          {item.content}
        </div>
      ))}
      {output.length === 0 && (
        <div style={styles.empty}>
          Ejecuta el código para ver los resultados...
        </div>
      )}
    </div>
  );
};

Console.propTypes = {
  output: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Console;