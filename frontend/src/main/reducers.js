import { combineReducers } from "redux";

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: () => ({
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    },
    {
        _id: 2,
        description: 'Reunião com a equipe às 10:00',
        done: false
    },
    {
        _id: 3,
        description: 'Consulta médica na terça depois do almoço',
        done: false
    }),
});

export default rootReducer;