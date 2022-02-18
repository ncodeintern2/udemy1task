import React from "react";
import AddData from "./AddData";

const NewData =(props) =>{
    const ExpenseHander =(expenssData)=>{
        const newExpenseData ={...expenssData,id:Math.random().toString()}
        props.NewExpenseHander(newExpenseData)

    }
    return(
        <AddData ExpenseHander={ExpenseHander}/>
    )

}
export default NewData;