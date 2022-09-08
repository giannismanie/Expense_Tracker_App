import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const Dummy_Expenses = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-06-15')
    },
    {
        id: 'e2',
        description: 'A pair of shoes',
        amount: 89.99,
        date: new Date('2022-07-15')
    },
    {
        id: 'e3',
        description: 'A pair of trousers',
        amount: 189.99,
        date: new Date('2022-06-17')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 9.99,
        date: new Date('2022-02-10')
    },
    {
        id: 'e5',
        description: 'A pair of shoes',
        amount: 39.99,
        date: new Date('2022-01-11')
    },
    {
      id: 'e6',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2022-06-15')
  },
  {
      id: 'e7',
      description: 'A pair of shoes',
      amount: 89.99,
      date: new Date('2022-07-15')
  },
  {
      id: 'e8',
      description: 'A pair of trousers',
      amount: 189.99,
      date: new Date('2022-06-17')
  },
  {
      id: 'e9',
      description: 'A book',
      amount: 9.99,
      date: new Date('2022-02-10')
  },
  {
      id: 'e10',
      description: 'A pair of shoes',
      amount: 39.99,
      date: new Date('2022-01-11')
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={Dummy_Expenses} periodName={expensesPeriod}/>
      <ExpensesList expenses={Dummy_Expenses}/>
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
});