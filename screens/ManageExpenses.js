import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import ExpenseForm from "../components/ExpensesOutput/ManageExpense/ExpenseForm";
import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

function ManageExpenses({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpense() {
    navigation.goBack();
    expensesCtx.deleteExpense(editedExpenseId);
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, { description: 'updated', amount: 19.87, date: new Date()});
    } else {
      expensesCtx.addExpense({description: 'ddf', amount: 19.87, date: new Date()});
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm submitButtonLabel={isEditing ? 'Update' : 'Add'} onCancel={cancelHandler}/>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpense} />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
})