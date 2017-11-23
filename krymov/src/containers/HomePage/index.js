/* eslint-disable */
import React, { Component } from 'react';
import classNames from 'classnames';

import TodoItem from './../../components/TodoItem';
import TodoItemDone from './../../components/TodoItemDone';
import SimpleInput from './../../components/SimpleInput';
import Button from './../../components/Button';

import './../../assets/general_styles/reset.css';
import './../../assets/general_styles/base.css';
import './../../assets/fonts/mainFonts.css'
import './style.css';

export default class HomePage extends Component {
 
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todoList: [],
      doneList : [],
      inputValid: true,
      checkedList: [],
      todoChecked: true
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      inputValid: true,
    })
  }

  submitTodo = () => {
    if (this.state.inputValue) {
      let TodoItem = this.state.inputValue;
      let todoList = [...this.state.todoList];
      let d = new Date();
      const NEW_ITEM = {
        name: TodoItem,
        date: d.toUTCString()
      }
      todoList.push(NEW_ITEM);
      this.setState({ todoList, inputValue: '' })
    } else {
      this.setState({ inputValid: false })
    }
  }

  deleteTodoItem = (name) => {
    const FILTERED_LIST = this.state.todoList.filter(item => item.name !== name);
    this.setState({
      todoList: FILTERED_LIST
    });
  }

  completedTodoItem = (name) => {
    const FILTERED_LIST = this.state.todoList.filter(item => item.name !== name);
    this.setState({
      todoList: FILTERED_LIST
    });
    const COMPLETED_TODO_ITEM = this.state.todoList.filter(item => item.name == name);
    let d = new Date();
    COMPLETED_TODO_ITEM[0].date = d.toUTCString();
    const DONE_ITEMS = [...this.state.doneList];
    DONE_ITEMS.push(COMPLETED_TODO_ITEM);
    this.setState({ doneList: DONE_ITEMS });
  }

  checkTodoItem = (e) => {
    const CHECKED_ITEMS = [...this.state.checkedList];
    if (e.target.checked) {
      CHECKED_ITEMS.push(e.target.id);
      this.setState({
        checkedList: CHECKED_ITEMS,
      });
    } else {
      const FILTERED_CHECKED_LIST = this.state.checkedList.filter(item => item !== e.target.id);
      this.setState({
        checkedList: FILTERED_CHECKED_LIST
      });
    }
  }

  // todoChecked = (name) => {
  //   const CHECKED_LIST = [...this.state.checkedList];
  //   const CHECK = CHECKED_LIST.filter(item => item.name === name);
  //   return CHECK.length ? true : false;
  //   console.log(работает);
  // }

  deleteSelected = () => {
    let checkedItems = [...this.state.checkedList];
    let todoItems = [...this.state.todoList];
    let filteredList = [];
    checkedItems.map(checkedItem => {
      filteredList = todoItems.filter(todoItem => todoItem.name !== checkedItem);
      todoItems = filteredList;
    });
    this.setState({
      checkedList: [],
      todoList: todoItems
    });
  }

  compSelected = () => {
    let checkedItems = [...this.state.checkedList];
    let todoItems = [...this.state.todoList];
    let todoItemsDone = [...this.state.doneList];
    let filteredList = [];
    let completedList = [];
    let d = new Date();
    checkedItems.map(checkedItem => {
      completedList = todoItems.filter(todoItem => todoItem.name == checkedItem);
      todoItemsDone.push(completedList);
      completedList[0].date = d.toUTCString();
    });
    checkedItems.map(checkedItem => {
      filteredList = todoItems.filter(todoItem => todoItem.name !== checkedItem);
      todoItems = filteredList;
    });
    this.setState({
      checkedList: [],
      todoList: todoItems,
      doneList: todoItemsDone,
      completedList: []
    });
  }

  deleteTodoItemDone = (name) => {
    console.log(111, this.state.doneList);
    console.log(222, name);
    const EMPTY_DONE_LIST = this.state.doneList.filter(item => item.name !== name);
    this.setState({
      doneList: EMPTY_DONE_LIST
    });
  }

  render() {
    const { inputValue, todoList, doneList, inputValid, todoChecked } = this.state;

    let toggleButtonClassName = classNames({
      'btn__wrapper': this.state.checkedList.length > 0,
      'btn__wrapper btn__wrapper--hidden': this.state.checkedList.length === 0
    });

    return (
      <div className="main__container">
        <p className="containerTitle">Do more piece of meat!</p>
        <div className="container__list--todo section__container">
          
          <div className='formWrapper'>
            <SimpleInput
              type='text'
              name='todoItem'
              value={inputValue}
              placeholder='Text new todo...'
              onChange={this.handleInputChange}
              isvalid={inputValid}
              errortext='You are triyng to add empty todo item. Please, fill that input.'
            />
            <Button
              label='Add Todo'
              onClick={this.submitTodo}
              className='addButton'
            />
            <div className={toggleButtonClassName}>
              <Button
                label='Delete selected'
                onClick={this.deleteSelected}
                className='delSelButton'
              />
              <Button
                label='Selected to comp'
                onClick={this.compSelected}
                className='compSelButton'
              />
            </div>
          </div>
          <p className="container__list-title">Todo List:</p>
          <div>
            {
              todoList.map((item, index) =>
                <TodoItem
                  key={index}
                  number={index + 1}
                  name={item.name}
                  deleteTodoItem={() => this.deleteTodoItem(item.name)}
                  completedTodoItem={() => this.completedTodoItem(item.name)}
                  checkTodoItem={this.checkTodoItem}
                  date={item.date}
                  isCheck={todoChecked}
                />
              )
            }
          </div>
        </div>
        <div className="container__list--done section__container">
          <p className="container__list-title">Completed Todo list:</p>
            <div>
              {
                doneList.map((item, index) =>
                <TodoItemDone
                  key={index}
                  number={index + 1}
                  name={item[0].name}
                  deleteTodoItemDone={() => this.deleteTodoItemDone(item[0].name)}
                  date={item[0].date}
                />
                )
              }
            </div>
        </div>
      </div>
    );
  }
}
