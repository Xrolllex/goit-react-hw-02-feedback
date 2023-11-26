import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title, children}) => (
    <section>
        <h2>{title}</h2>
        {children}
    </section>
)


Title.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  export default Title;