import React from 'react'; 
import { connect } from "react-redux";
import { increment, decrement } from "../actions/counterActions";

// export const Counter = (props) => {
//     return (
//         <div>
//             <span>count is : {props.count} </span>
//             <button onClick={()=>props.dispatch(decrement(props.diff))}>-</button>
//             <button onClick={()=>props.dispatch(increment(props.diff))}>+</button>
//         </div>
//         );
// }

class Counter extends React.Component {
    handleAdd = () => {
        this.props.dispatch(increment(this.props.diff));
    }

    render(){
        return (
            <div>
                <span>count is : {this.props.count} </span>
                <button onClick={()=>this.props.dispatch(decrement(this.props.diff))}>-</button>
                <button onClick={this.handleAdd}>+</button>
            </div>
        );
    }
}


// const mapDispatchToProps = dispatch => {
//     return {
//         handleSubtract: () => {
//             dispatch(decrement(1));
//         },
//         handleAdd: () => {
//             dispatch(increment(1));
//         }
//     }
// }

export default Counter;