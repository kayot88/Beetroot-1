/* eslint-disable */
import React, { Component } from 'react';

import TodoItem from './../../components/TodoItem';

import './style.css';

export default class HomePage extends Component {

  render() {
    const TODO_LIST_DATA = [
      {
        number: 1,
        name: 'Выучить HTML',
      },
      {
        number: 2,
        name: 'Выучить CSS',
      },
      {
        number: 3,
        name: 'Выучить JS',
      },
      {
        number: 4,
        name: 'Выучить React',
      },
      {
        number: 5,
        name: 'Выучить GIT',
      },
    ];

    return (
      <div className="container">
        <h1>Todo List:</h1>
        <ul>
          {
            TODO_LIST_DATA.map(item => 
            <TodoItem
              key={item.number}
              {...item}
            />
          )
          }
        </ul>
      </div>
    );
  }
}
