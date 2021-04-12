import React from 'react';
import { useSelector } from 'react-redux';

function AccountStatus() {
    const isSavingsAccount = useSelector(state => state.banking.isSavingsAccount);
    return (
        <div>
            <h1 className="bank">{isSavingsAccount ? "Checking Accounts" : "Saving Accounts"}</h1>
        </div>
    )
}

export default AccountStatus;
