import React from "react";

function InputBox(props) {

    function submitHandler(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value.trim();
        form.title.value = "";

        if (title) {
            props.addItem(title);
        }
    }

    return (
        <form className="input-box" onSubmit={submitHandler}>
            <input type="text" className="input-text" placeholder="待辦事項…" name="title" autoComplete="off" />
            <button type="submit" className="button">新增</button>
        </form>
    );
}

export default InputBox;