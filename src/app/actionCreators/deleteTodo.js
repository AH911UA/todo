function deleteTodo(value) {
    return { 
        type: 'DELETE_TODO',
        value
    };
}

export default deleteTodo;