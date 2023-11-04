import React from "react";
import { Link } from "react-router-dom";

import { useParams, useNavigate } from "react-router-dom";


export default function View(props) {

    const navigateFunction = useNavigate();
    const { id } = useParams();
    const todo = props.todos[id];

    function deleteItem() {
        props.deleteItem(id);
        navigateFunction('/');
    }

    return todo ? (
        <div className="form">
            <div style={{ textAlign: 'center' }}>檢視待辦事項</div>
            <label className="input-box">
                <span className="text">待辦事項</span>
                <input type="text" className="input-text" placeholder="" name="title" autoComplete="off" value={todo.title} readOnly />
            </label>
            <label className="input-box">
                <span className="text">地　　點</span>
                <input type="text" className="input-text" placeholder="無地點" name="place" autoComplete="off" value={todo.place} readOnly />
            </label>
            <label className="input-box">
                <span className="text">參與人員</span>
                <input type="text" className="input-text" placeholder="無參與人員" name="participants" autoComplete="off" value={todo.participants} readOnly />
            </label>
            <textarea className="multi-input" name="note" placeholder="無任何備註" width="100%" value={todo.note} readOnly></textarea>
            <div className="button-list">
                <Link to=".." className="button">返回</Link>
                <Link to="./edit" className="button button-warning">更改</Link>
                <button type="button" className="button button-danger" onClick={deleteItem}>刪除</button>
            </div>
        </div>
    ) : (
        'Not Found'
    );
}