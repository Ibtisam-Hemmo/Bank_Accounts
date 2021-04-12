import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeAccount, collectInterest, deleteAccount, deposit, withdraw } from '../actions/bankingActions';

function Banking() {

    const [amount, setAmount] = useState ('');
    const dispatch = useDispatch ('');

    const  handleDeposit = ()=>{
        dispatch(deposit(amount))
    }
    const  handleWithdraw = ()=>{
        dispatch(withdraw(amount))
    }
    const  handleCollect = ()=>{
        dispatch(collectInterest())
    }
    const  handleDelete = ()=>{
        dispatch(deleteAccount())
    }
    const  handleChange = ()=>{
        dispatch(changeAccount())
    }

    return (
        <div className="form-control">
            <input type="text" value={ amount } onChange = { (e)=> setAmount(e.target.value) } className="form-control"/>
            <button onClick={ handleDeposit } className="btn btn-success">Deposit</button>
            <button onClick={ handleWithdraw } className="btn btn-primary">Withdraw</button>
            <button onClick={ handleCollect } className="btn btn-warning">Collect Intreset</button>
            <button onClick={ handleDelete } className="btn btn-danger">Delete Account</button>
            <button onClick={ handleChange } className="btn btn-secondary">Change Account Type</button>
        </div>
    )
}

export default Banking;

// const deposit = {
//     type: 'DEPOSIT',
//     amount: 20,
//   }
  
//   const withdraw = {
//     type: 'WITHDRAW',
//     amount: 30,
//   }
  
//   const collectInterest = {
//     type: 'COLLECT_INTEREST',
//   }
  
//   const deleteAccount = {
//     type: 'DELETE_ACCOUNT',
//   }