import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Add from "./pages/Add";
import View from "./pages/View";
import Edit from "./pages/Edit";

class App extends Component {
    state = { todos: [] };

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.checkItem = this.checkItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    addItem(todo) {
        const todos = this.state.todos.slice();
        todos.push({
            ...todo,
            isChecked: false,
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

        // Ecmascript 2023
        // this.setState({ todos: this.state.todos.toSpliced(id, 1) });
    }

    editItem(id, todo) {
        const todos = this.state.todos.slice();
        Object.assign(todos[id], todo);
        this.setState({ todos });
    }

    render() {

        return (
            <Routes>
                <Route path="" element={
                    <Homepage
                        todos={this.state.todos}
                        checkItem={this.checkItem}
                    />
                } />
                <Route path="new" element={
                    <Add addItem={this.addItem} />
                } />
                <Route path=":id">
                    <Route path="" element={
                        <View todos={this.state.todos} deleteItem={this.deleteItem} />
                    } />
                    <Route path="edit" element={
                        <Edit todos={this.state.todos} editItem={this.editItem} />
                    } />
                </Route>
            </Routes>
        );
    }
}

export default App