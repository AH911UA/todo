import  {ADD_TODO, DELETE_TODO } from '../actions/actions';

export default function reducer(state, action) {
    switch(action.type) {
        case ADD_TODO: 
            return state.find(todo => 
                    todo.id === action.value.id) 
                    ? state 
                    :  [...state, action.value]  ;

        case DELETE_TODO: return state.filter(todo => todo.id !== action.value) ;
        
        default: return state;
    }
}
