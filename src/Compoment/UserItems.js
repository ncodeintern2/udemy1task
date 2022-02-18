import React,{Fragment} from "react";
import UserDate from "./UserDate";

const UserItems = (props) => {
    

    return (
        <Fragment>
            <div>
                <UserDate date={props.date} />
                <div><h1>{props.title}</h1></div>
            </div>

            <div>{props.amount}</div>
        </Fragment>
    )

}
export default UserItems;
