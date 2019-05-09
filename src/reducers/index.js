import { combineReducers } from 'redux';
import counter from './counterReducer';
import welcome from './welcomeReducer';

// const initState = {
//     counter: {
//         count: 0,
//         diff: 1,
//     },
//     welcomeList: [
//         {id:1, name: 'Nick', isTeacher:true },
//         {id:2, name: 'Tim', isTeacher:false },
//         {id:3, name: 'Sam', isTeacher:false },
//     ],
// }

// const defaultState = {
//     count: 0,
//     diff: 1,
// };

const rootReducer = combineReducers({
    counter: counter,
    welcome: welcome,
});
export default rootReducer;