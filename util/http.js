import axios from "axios";

const baseURL = "https://react-native-expenses-5d6de-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const resp = await axios.post(baseURL + "/expenses.json", expenseData);
  const id = resp.data.name;
  return id;
}

export async function fetchExpenses() {
  const resp = await axios.get(baseURL + "/expenses.json");

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

export function updateExpense(id, expenseData) {
  return axios.put(baseURL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(baseURL + `/expenses/${id}.json`);
}
