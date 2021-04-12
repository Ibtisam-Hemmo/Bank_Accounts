import { combineReducers } from 'redux';
import { bankingReducer } from './BankingReducers';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers ({
    auth: authReducer,
    banking: bankingReducer
});

//this is how our store is gonna look alike.
// store = {
//     auth = {
//         isLoggedIn: false,
//     },
//     banking = {
//         balance : 0,
//         isSavingsAccount: false,
//     },
// }