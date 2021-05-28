import React, {useState} from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpence.css";

function NewExpence(props){
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandle = (enteredDate) => {
        const expenseData ={
            ...enteredDate,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    const stopEditingHandler =() =>{
        setIsEditing(false);
    }
    return(
        <div className ="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <NewExpenseForm onSaveData = {saveExpenseDataHandle} 
            onCancle={stopEditingHandler}/>}
        </div>
    );
}


export default NewExpence;