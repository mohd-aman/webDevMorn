import {createStore} from 'redux';
const DEPOSIT = 'deposit';
const WITHDRAW = 'withdraw';
const EMI = 'PayEMI';

const initialState = {name:"Aman", amount:1000, loanAmount:50000,creditScore:"negative"};
const store = createStore(reducer);

function reducer(state = initialState, action){
    if(action.type == DEPOSIT){
        return {...state, amount: state.amount + action.payload};
    }else if(action.type == WITHDRAW){
        return {...state, amount: state.amount - action.payload};
    }else if(action.type == EMI) {
        return {...state, loanAmount: state.loanAmount - action.payload}
    } else {
        return state;
    } 
}

// Actions     
// const depositAction = {type: DEPOSIT,payload:100};
// const withdrawAction = {type: WITHDRAW,payload:200};

// Action Creator 
function depositAction(value){
    return {type: DEPOSIT,payload:value};
}

function withdrawAction(value){
    return {type: WITHDRAW,payload:value};
}

function emiAction(value){
    return {type: EMI, payload:value}
}

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(depositAction(500));
store.dispatch(withdrawAction(100));
store.dispatch(withdrawAction(300));
store.dispatch(depositAction(700));
store.dispatch(emiAction(500));
store.dispatch(emiAction(10000));
// console.log(store.getState());