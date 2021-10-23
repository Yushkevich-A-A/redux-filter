import { createAction } from "@reduxjs/toolkit";

export const serviceAdd = createAction('ADD_TASK');
export const serviceRemove  = createAction('REMOVE_TASK');
export const serviceReset  = createAction('RESET_TASK');
export const serviceChange  = createAction('CHANGE_TASK');
export const setFilter  = createAction('SET_FILTER');
export const resetFilter  = createAction('RESET_FILTER');