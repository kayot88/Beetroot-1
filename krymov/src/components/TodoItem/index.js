import React from 'react';
import PropTypes from 'prop-types';
import Button from './../Button';
import Checkbox from './../Checkbox';

import './style.css';

const TodoItem = (props) => {
  const { isCheck } = props;
  return (
    <div className="todoItem">
      <Checkbox
        onChange={props.checkTodoItem}
        id={props.name}
      />
      <div className={isCheck ? `input__field input__field--checked` : `input__field`}>
        <span>{props.number}. </span>
        <span>{props.name}</span>
      </div>
      <p className="create">
        <span>Date of create: </span>
        <span>{props.date}</span>
      </p>
      <Button
        label='Delete'
        onClick={props.deleteTodoItem}
        className='deleteButton'
      />
      <Button
        label = 'Done'
        onClick = {props.completedTodoItem}
        className='doneButton'
      />
    </div>
  )
};

TodoItem.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
  completedTodoItem: PropTypes.func.isRequired,
  checkTodoItem: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  isCheck: PropTypes.bool.isRequired
}

export default TodoItem;