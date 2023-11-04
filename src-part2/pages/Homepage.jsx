import React from "react";
import { Link } from "react-router-dom";

import TodoList from "../components/TodoList";

export default function Homepage(props) {
    return (
        <>
            <Link to="new" className="button">新增事項</Link>
            <TodoList todos={props.todos}
                checkItem={props.checkItem}
                deleteItem={props.deleteItem}
                changeItemMode={props.changeItemMode}
                editItem={props.editItem}
            />
        </>
    );
}