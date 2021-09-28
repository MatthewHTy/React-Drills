import React, {Component} from 'react';
import Todo from "./components/todo";

export default class Todo extends Component {
  render() {
    return <p>{this.props.task}</p>;
  }
}