import React,{useState,Fragment} from "react";
import FilteredYear from "./FilteredYear";
import UserItems from "./UserItems";

const User = (props) => {
    const[selectYear,setSelectYear]=useState('')
    const selectedYear=(year)=>{
        setSelectYear(year)
    }
    const FilteredList =
        props.expens.filter((p)=>{
            return(p.date.getFullYear().toString()===selectYear)
        })
    console.log(FilteredList)
    console.log(typeof(selectYear))
    console.log(typeof(props.expens[0].date.getFullYear().toString()))

    return (
        <Fragment>
            <div>
                <FilteredYear year={selectYear} selectedYear={selectedYear}/>
            </div>
        
            {FilteredList.map((expens ,key) =>{
                return(
                    <UserItems title={expens.title} amount={expens.amount} date={expens.date} key={expens.id} />

                )
            })}
            {/* <UserItems title={props.expens[0].title} amount={props.expens[0].amount} date={props.expens[0].date} />
            <UserItems title={props.expens[1].title} amount={props.expens[1].amount} date={props.expens[1].date} />
            <UserItems title={props.expens[2].title} amount={props.expens[2].amount} date={props.expens[2].date} />
         */}
        </Fragment>

    )

}
export default User;