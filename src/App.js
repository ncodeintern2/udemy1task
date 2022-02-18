import React,{Fragment, useState} from "react";
import User from "./Compoment/User";
import NewData from "./Compoment/NewData";


const expens = [
  {
    id: 'e1',
    title: 'Paper',
    amount: 94.5,
    date: new Date(2020, 12, 1)

  },
  {
    id: 'e2',
    title: 'Boook',
    amount: 23.5,
    date: new Date(2019, 11, 1)

  },
  {
    id: 'e3',
    title: 'pencil',
    amount: 123,
    date: new Date(2020, 2, 5)

  }




]
const App = () => {

  const[expense,setExpense]=useState(expens);

  const NewExpenseHander=(newExpenseData) =>{
    
    setExpense((ex)=>{
      return([...ex,newExpenseData])
    })
  }
  console.log(expense)
  


  return (
    <Fragment>
      <NewData NewExpenseHander={NewExpenseHander}/>
      <User expens={expense }/>
    </Fragment>
  );
}

export default App;
