import React from "react";
import { Link } from "react-router-dom";

function TodoList(props) {

    return (
        <div className="todos">
            {
                props.todos.length ? (
                    props.todos.map(function (todo, index) {
                        return (
                            <TodoItem key={index} item={todo}
                                index={index}
                                checkItem={() => props.checkItem(index)}
                            />
                        );
                    })
                ) : (
                    <div style={{textAlign: 'center', padding: '.5rem'}}>目前沒有任何待辦項目</div>
                )
            }
        </div>
    );
}

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox"
                checked={props.item.isChecked}
                onChange={props.checkItem}
            />
            <span className="todo-title">{props.item.title}</span>
            <Link to={'/' + props.index} className="button button-success">檢示</Link>
        </div>
    )
}

export default TodoList;