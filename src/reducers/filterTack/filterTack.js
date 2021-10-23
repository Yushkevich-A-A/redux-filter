import { createReducer } from "@reduxjs/toolkit";
import { setFilter, resetFilter } from "../../actions/actions";

const initfilset = {
    filterValue: '',
};

const filterReduser = createReducer( initfilset, (builder) => {
    builder
        .addCase(setFilter, (state, action) => {
            state.filterValue = action.payload;
        })
        .addCase(resetFilter, (state, action) => {
            state.filterValue = '';
        })
})

export default filterReduser;