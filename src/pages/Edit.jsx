import React from "react";
import { Link } from "react-router-dom";

import { useParams, useNavigate } from "react-router-dom";


export default function Edit(props) {

    const { id } = useParams();
    const navigateFunction = useNavigate();
    const todo = props.todos[id];

    function submitHandler(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value.trim();
        form.title.value = "";
        const place = form.place.value.trim();
        form.place.value = "";
        const participants = form.participants.value.trim();
        form.participants.value = "";
        const note = form.note.value.trim();
        form.note.value = "";

        props.editItem(id, { title: title || todo.title, place, participants, note });
        navigateFunction('/' + id);
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <div style={{ textAlign: 'center' }}>修改待辦事項</div>
            <label className="input-box">
                <span className="text">待辦事項</span>
                <input type="text" className="input-text" placeholder="" name="title" autoComplete="off" defaultValue={todo.title} />
            </label>
            <label className="input-box">
                <span className="text">地　　點</span>
                <input type="text" className="input-text" placeholder="" name="place" autoComplete="off" defaultValue={todo.place} />
            </label>
            <label className="input-box">
                <span className="text">參與人員</span>
                <input type="text" className="input-text" placeholder="" name="participants" autoComplete="off" defaultValue={todo.participants} />
            </label>
            <textarea className="multi-input" name="note" placeholder="備註…" width="100%" defaultValue={todo.note}></textarea>
            <div className="button-list">
                <Link to=".." className="button button-danger">取消</Link>
                <button type="reset" className="button button-warning">重置</button>
                <button type="submit" className="button button-success">完成</button>
            </div>
        </form>
    );
}