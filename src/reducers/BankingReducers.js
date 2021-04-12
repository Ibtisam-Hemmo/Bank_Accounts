
const initialState = {
    balance : 0,
    isSavingsAccount: false,
};

 export const bankingReducer = (state = initialState, action) =>{
     switch(action.type){
        case "DEPOSIT":
            return {...state, balance: state.balance + action.amount};
        case "WITHDRAW":
            return {...state, balance: state.balance - action.amount};
        case "COLLECT_INTEREST":
            return {...state, balance: state.balance * 1.03};
        case "DELETE_ACCOUNT":
            return {...state, balance : 0};
        case "CHANGE_ACCOUNT":
            return {...state, isSavingsAccount : !state.isSavingsAccount};
  
        default: 
            return state;
     }

    //This can be replacable with the above statmants.
    //  if(action.type === 'DEPOSIT'){
    //  }
    //  if(action.type === 'WITHDRAW'){
    // }
    //return state; // this fun returns the old state, it doesn't update it because it has no action.
};
