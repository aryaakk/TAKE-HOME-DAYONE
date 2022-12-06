import React, { useState } from "react";
import Input from "../components/input";
import Header from "../components/todoHeader";
import './../assets/todoApp.css'

const ToDoApp = () => {
    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])

    const [style, setStyle] = useState("")
    const [focus, setFocus] = useState("")

    const getText = (e) => {
        setText(e.target.value)
    }

    const submitTodo = (e) => {
        e.preventDefault()
        console.log(text)
        console.log(todo)
        setTodo([...todo, text])
        setFocus("autofocus")
        document.getElementById('form').reset()
    }

    const HandleChecked = () => {
        setStyle("checked")
    }

    function deleteTodo(todoItem) {
        alert('Berhasil Hapus Todo')
        setTodo(todo.filter((t) => t !== todoItem))
    }

    return (
        <div className="wrapper">
            <div className="todo-wrapper">
                <Header />
                <div className="inp">
                    <form id="form" onSubmit={submitTodo}>
                        <Input autoFocus = {focus} type={"text"} class={"text"} fungsi={getText} />
                        <Input type={"submit"} class={"submit"} value={"ADD TODO"} />
                    </form>
                </div>
            </div>
            <div className="hasil">
                {todo.map((item, index) => {
                    return (
                        <div key={index} className="list">
                            <Input type={"checkbox"} fungsi={HandleChecked} />
                            <span key={index}>{item}</span>
                            <button onClick={() => deleteTodo(item)}><i className='bx bxs-trash'></i></button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ToDoApp