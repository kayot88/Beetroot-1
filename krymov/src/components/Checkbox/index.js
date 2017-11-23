/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Checkbox = (props) => (
  <div>
    <input
      type='checkbox'
      onChange={props.onChange}
      className='addCheckbox'
      id={props.id}
    />
    <label for={props.id}></label>
  </div>
);

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  for: PropTypes.string.isRequired
}

export default Checkbox;