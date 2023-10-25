import { createSlice, createAction  } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  expenses: [],
}

export const setExpensesError = createAction('setExpensesError');
export const newExpenseError = createAction('newExpenseError');
export const editExpenseError = createAction('editExpenseError');
export const deleteExpenseError = createAction('deleteExpenseError');

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setExpenses: (state, action) => {    
       return { ...state, expenses: [...action.payload] };
    },
    newExpense: (state, action) => {
        return { ...state, expenses: [action.payload, ...state.expenses] };
    },
    editExpense: (state, action) => {
        const expenses = state.expenses.map(expense => {
            if (expense.id === action.payload.id) {
                expense = action.payload;
            }
            return expense;
        });
        return { ...state, expenses: [...expenses] };
    },
    deleteExpense:(state, action) => {
        const expenses = state.expenses.filter(expense =>
            expense.id !== action.payload.id);
        return { ...state, expenses: [...expenses] };
    }
  },
})

// Action creators are generated for each case reducer function
export const { setExpenses, newExpense, editExpense, deleteExpense } = expensesSlice.actions

export default expensesSlice.reducer