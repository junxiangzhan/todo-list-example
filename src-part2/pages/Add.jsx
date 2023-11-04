import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Add(props) {

    const navigateFunction = useNavigate();

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

        if (title) {
            props.addItem({ title, place, participants, note });
            navigateFunction('/');
        }
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <div style={{textAlign: 'center'}}>新增待辦事項</div>
            <label className="input-box">
                <span className="text">待辦事項</span>
                <input type="text" className="input-text" placeholder="" name="title" autoComplete="off" />
            </label>
            <label className="input-box">
                <span className="text">地　　點</span>
                <input type="text" className="input-text" placeholder="" name="place" autoComplete="off" />
            </label>
            <label className="input-box">
                <span className="text">參與人員</span>
                <input type="text" className="input-text" placeholder="" name="participants" autoComplete="off" />
            </label>
            <textarea className="multi-input" name="note" placeholder="備註…" width="100%"></textarea>
            <div className="button-list">
                <Link to=".." className="button button-danger">返回</Link>
                <button type="reset" className="button button-warning">重置</button>
                <button type="submit" className="button button-success">新增</button>
            </div>
        </form>
    );
}