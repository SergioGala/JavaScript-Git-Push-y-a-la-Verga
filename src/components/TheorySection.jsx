// TheorySection.jsx

import PropTypes from 'prop-types';

const TheorySection = ({ content }) => {
  const styles = {
    container: {
      fontSize: '1.1em',
      lineHeight: '1.8',
      color: '#2c3e50'
    }
  };

  return (
    <div style={styles.container}>
      {content}
    </div>
  );
};

TheorySection.propTypes = {
  content: PropTypes.node.isRequired
};

export default TheorySection;