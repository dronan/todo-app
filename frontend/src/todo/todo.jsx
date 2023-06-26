import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        
        // This is the initial state of the Todo component.
        // The description property is the value of the input field.
        // The list property is the list of tasks.
        this.state = { description: '', list: [] };

        // This is necessary to bind the handleAdd and handleChange methods to the Todo class or else 
        // it will not be able to access the this object.
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleAdd() {
        console.log(this.state.description);
    }

    render() {
        return (
            <div>
                <PageHeader name='Tasks' small='Register' />
                <TodoForm 
                        description={this.state.description} 
                        handleAdd={this.handleAdd}
                        handleChange={this.handleChange}
                        />
                <TodoList />
            </div>
        );
    }
}
