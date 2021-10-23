import { createReducer } from '@reduxjs/toolkit';
import { serviceAdd, serviceRemove } from '../../actions/actions';
import { nanoid } from 'nanoid';

const initialState = [
    { id: nanoid(), content: 'Замена АКБ', price: 10000 },
    { id: nanoid(), content: 'Замена экрана', price: 20000 },
    { id: nanoid(), content: 'Замена ', price: 30000 },
]

const taskListReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(serviceAdd, (state, action) => {
            const existItem = state.findIndex( item => item.id === action.payload.id);
            (existItem !== -1) ? 
                state[existItem] = action.payload :
                state.push({...action.payload, id: nanoid() })
        })
        .addCase(serviceRemove, (state, action) => {
            state.splice(state.findIndex( item => item.id === action.payload), 1);
        })
})

export default taskListReducer;

