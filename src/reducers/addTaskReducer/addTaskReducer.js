import { createReducer } from "@reduxjs/toolkit";
import { serviceReset, serviceChange } from '../../actions/actions';

const initialState = {
    content: '', 
    price: '',
    id: '',
 }

const addTaskReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(serviceChange, (state, action) => {
            const { content, price, id } = action.payload;
            state.id = id;
            state.content = content;
            state.price = price;
        })
        .addCase(serviceReset, (state) => {
            state.id = '';
            state.content = '';
            state.price = '';
        })
})

// function addTaskReducer( state = initialState, action) {
//     switch (action.type) {
//         case 'CHANGE_TASK': 
//             const { content, price, id } = action.payload;
//             return {...state, content: content, price: price, id: id};
//         case 'RESET_TASK':
//             return {...state, content: '', price: '', id: ''};
//         default:
//             return state;
//     }
// }

export default addTaskReducer;