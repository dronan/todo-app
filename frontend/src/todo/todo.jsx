import axios from 'axios';
import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';
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
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);

        // Load initial data.
        this.refresh();
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleAdd() {
        const description = this.state.description;
        axios.post(URL, { description })
            .then(resp => this.refresh() )
            .catch(err => console.log(err));
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({ ...this.state, description: '', list: resp.data }));
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh());
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh());
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
                <TodoList 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    list={this.state.list} />
            </div>
        );
    }
}
