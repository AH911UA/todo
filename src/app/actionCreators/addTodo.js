function addTodo(value) {
    return { 
        type: 'ADD_TODO',
        value
    };
}

export default addTodo;