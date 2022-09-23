import axios from "axios";

const BACKEND_URL = "https://react-native-expenses-5d6de-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const resp = await axios.post(BACKEND_URL + "/expenses.json", expenseData);
  const id = resp.data.name;
  return id;
}

export async function fetchExpenses() {
  const resp = await axios.get(BACKEND_URL + "/expenses.json");

  //   console.log('first', resp.data)

  const expenses = [];
  for (const key in resp.data) {
    const expenseObj = {
      id: key,
      amount: resp.data[key].amount,
      date: new Date(resp.data[key].date),
      description: resp.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
