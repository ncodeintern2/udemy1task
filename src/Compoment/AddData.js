import React, { useState} from "react";


const AddData = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHander = (e) => {
        setEnteredTitle(e.target.value)

    }

    const amountChangeHander = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangeHander = (e) => {
        setEnteredDate(e.target.value)
    }

    const formSubmitHander = (e) => {
        e.preventDefault();
        const expenssData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        }
        props.ExpenseHander(expenssData)
        setEnteredTitle('')
        setEnteredDate('')
        setEnteredAmount('')
    }

    return (
        <form onSubmit={formSubmitHander}>
            <div>
                <div>
                    <label>Tittle</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHander} />

                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHander} />

                </div>
                <div>
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2001-01-01" max="2040-11-2" onChange={dateChangeHander} />
                </div>
            </div>

            <div>
                <button type="submit">Add Data</button>
            </div>
        </form>
    )

}
export default AddData;