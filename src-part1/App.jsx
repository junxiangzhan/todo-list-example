import { Component } from "react";

import InputBox from "./InputBox";
import TodoList from "./TodoList";

class App extends Component {
    state = { todos: [] };
    
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.checkItem = this.checkItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.changeItemMode = this.changeItemMode.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    addItem(todo) {
        const todos = this.state.todos.slice();
        todos.push({
            title: todo,
            isChecked: false,
            isEditing: false
        });
        this.setState({ todos });
    }

    checkItem(id) {
        const todos = this.state.todos.slice();
        todos[id].isChecked = !todos[id].isChecked;
        this.setState({ todos });
    }

    deleteItem(id) {
        const todos = this.state.todos.slice();
        todos.splice(id, 1);
        this.setState({ todos });
    }

    changeItemMode(id) {
        const todos = this.state.todos.slice();
        todos[id].isEditing = !todos[id].isEditing;
        this.setState({ todos });
    }

    editItem(id, todo) {
        const todos = this.state.todos.slice();
        todos[id].title = todo;
        todos[id].isEditing = false;
        this.setState({ todos });
    }

    render() {
        return (
            <>
                <InputBox addItem={this.addItem} />
                <TodoList todos={this.state.todos}
                    checkItem={this.checkItem}
                    deleteItem={this.deleteItem}
                    changeItemMode={this.changeItemMode}
                    editItem={this.editItem}
                />
            </>
        );
    }
}

export default App