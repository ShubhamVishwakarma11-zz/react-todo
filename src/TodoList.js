import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.toggleTaskStatus = this.toggleTaskStatus.bind(this); 
        this.toggleEdit = this.toggleEdit.bind(this);  
        this.updateTask = this.updateTask.bind(this);
    }


    addTask(task) {
        this.setState(currState => (
            {
                todos: [...currState.todos,task]
            }
        ));
    }

    removeTask(id) {
        this.setState({
            todos: this.state.todos.filter(todo => (todo.id !== id))
        });
    }

    toggleTaskStatus(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                }
                return todo;
            })
        });
    }

    toggleEdit(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.editing = !todo.editing;
                }
                return todo;
            })
        });
    }

    updateTask(updatedTask,id) {
        this.setState(currState => {
            let newTaskList = currState.todos.map(todo => {
                if (todo.id === id) {
                    return updatedTask;
                }
                return todo;
            })

            return {todos: newTaskList};
        })
    }

    render() {
        let taskList = this.state.todos.map(todo => (
            <Todo 
                key={todo.id} 
                task = {todo.task} 
                toggleTaskStatus={this.toggleTaskStatus} 
                removeTask={this.removeTask} 
                id={todo.id}
                done={todo.done}
                editing={todo.editing}
                toggleEdit = {this.toggleEdit}
                updateTask = {this.updateTask}
                />
            
        ));
        let emptyList = <p className='emptyList'>No task available...</p>;
        return (
            <div className='TodoList'>
                    {this.state.todos.length===0 ? emptyList : taskList }
                
                <NewTodoForm addTask = {this.addTask}/>
            </div>
        )
    }
}

export default TodoList;