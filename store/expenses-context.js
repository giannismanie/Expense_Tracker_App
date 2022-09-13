import { createContext, useReducer } from "react";

const Dummy_Expenses = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-09-11"),
  },
  {
    id: "e2",
    description: "A pair of shoes",
    amount: 89.99,
    date: new Date("2022-07-15"),
  },
  {
    id: "e3",
    description: "A pair of trousers",
    amount: 189.99,
    date: new Date("2022-06-17"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 9.99,
    date: new Date("2022-02-10"),
  },
  {
    id: "e5",
    description: "A pair of shoes",
    amount: 39.99,
    date: new Date("2022-01-11"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-06-15"),
  },
  {
    id: "e7",
    description: "A pair of shoes",
    amount: 89.99,
    date: new Date("2022-07-15"),
  },
  {
    id: "e8",
    description: "A pair of trousers",
    amount: 189.99,
    date: new Date("2022-06-17"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 9.99,
    date: new Date("2022-02-10"),
  },
  {
    id: "e10",
    description: "A pair of shoes",
    amount: 39.99,
    date: new Date("2022-01-11"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: ({ id, description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatableExpenses = [...state];
      updatableExpenses[updatableExpenseIndex] = updatedItem;
      return updatableExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id != action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, Dummy_Expenses);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
