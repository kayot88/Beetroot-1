import React from 'react';
import PropTypes from 'prop-types';
import Button from './../Button';

import './style.css';

const TodoItemDone = (props) => (
  <div className="todoItemDone">
    <div className="input__field">
      <span>{props.number}. </span>
      <span>{props.name}</span>
    </div>
    <p className="finish">
      <span>Date of complete: </span>
      <span>{props.date}</span>
    </p>
    <Button
      label='Garbage'
      onClick={props.deleteTodoItemDone}
      className='deleteButton'
    />
  </div>
);

TodoItemDone.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  deleteTodoItemDone: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired
}

export default TodoItemDone;