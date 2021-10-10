import { useEffect, useState } from "react";
import Button from "../../controls/button/button";
import Input from "../../controls/input/input";
import getTodos from "../../services/getTodos/getTodos";
import Todo from "./todo";
import addTodo from "../../app/actionCreators/addTodo";
import deleteTodo from "../../app/actionCreators/deleteTodo";
import store from "../../app/store";
import "./todos.scss";

export default function Todos() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos(10)
            .then((data) => {
                data.forEach((element) => {
                    store.dispatch(addTodo(element));
                });
            })
            .catch((error) => alert("An error has occurred"));
    }, []);

    store.subscribe(() => {
        setTodos(store.getState());
        setNewTodo("");
    });

    function handlerAddTodo() {
        const todo = {
            id: null,
            title: newTodo.trim(),
        };

        if (!todo.title) return;

        todo.id = todos.length ? todos[todos.length - 1].id + 1 : (todo.id = 1);

        store.dispatch(addTodo(todo));
    }

    function handlerDeleteTodo(id) {
        store.dispatch(deleteTodo(id));
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
                                  <Button txt="delete" type="warning" isSmall={true} handlerClick={() => handlerDeleteTodo(todo.id)} />
                              </div>
                          </li>
                      ))
                    : ""}
            </ul>
        </div>
    );
}
