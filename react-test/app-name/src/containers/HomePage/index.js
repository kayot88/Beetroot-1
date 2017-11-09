/* eslint-disable */
import React, { Component } from 'react';

import TodoItem from './../../components/TodoItem';
import SimpleInput from './../../components/SimpleInput';
import Button from './../../components/Button';

import './style.css';

export default class HomePage extends Component {
 
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todoList: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  submitTodo = () => {
    const Obj = {
      number: this.state.todoList.length + 1,
      name: this.state.inputValue,
    };
    const todoList = [...this.state.todoList];
    todoList.push(Obj);
    this.setState({ todoList, inputValue: '' });
    console.log(this.state.todoList);
  }

  render() {
    const { inputValue, todoList } = this.state;

    return (
      <div className="container">
        <h1>Todo List:</h1>
        <div>
          <SimpleInput
            type='text'
            name='todoItem'
            value={inputValue}
            placeholder='Введите название новой задачи'
            onChange={this.handleInputChange}
          />
          <Button
            label='Add Todo'
            onClick={this.submitTodo}
          />
        </div>
        <div>
          {
            todoList.map((item, index) => 
            <TodoItem
              key={index}
              number={item.number}
              name={item.name}
            />
          )
          }
        </div>
      </div>
    );
  }
}
