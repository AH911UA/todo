 
import {  useEffect, useState } from "react";
import Button from "../../controls/button/button";
import Input from "../../controls/input/input";
import getTodos from "../../services/getTodos/getTodos";
import Todo from "./todo";
import "./todos.scss";

export default function Todos() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos(10)
            .then((data) => {
                setTodos(data)
            })
            .catch((error) => alert("An error has occurred"));
}, []);


    function handlerAddTodo() {
        const todo = {
            id: null,
            title: newTodo.trim(),
        };

        if (!todo.title) return;

        todo.id = todos.length 
            ? todos[todos.length - 1].id + 1 
            : todo.id = 1;
 
    }

    function handlerDeleteTodo(id) {
       
    }

    return (
        <div className="todos">
            <h1 className="todos_title"> todos</h1>
            <div className="row mt_1 justify-content_center">
                <div className="mr_1">
                    <Input value={newTodo} handlerInput={setNewTodo} />
                </div>
                <Button txt="add todo" isSmall={true} handlerClick={handlerAddTodo} />
            </div>

            <ul className="mt_1">
                {todos && todos.length
                    ? todos.map((todo) => (
                          <li className="mt_1 todos_item row" key={todo.id}>
                              <div className="todos_item_todo mr_1">
                                  <Todo txt={todo.title} />
                              </div>
                              <div className="todos_item_delete">
                                  <Button
                                      txt="delete"
                                      type='warning'
                                      isSmall={true}
                                      handlerClick={() => handlerDeleteTodo(todo.id)}
                                  />
                              </div>
                          </li>
                      ))
                    : ""}
            </ul>
        </div>
    );
}
