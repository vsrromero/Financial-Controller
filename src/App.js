import React, {useEffect, useState} from 'react';

import Header from './components/header/Header';
import Summary from './components/summary/Summary';
import Form from './components/form/Form';

import './styles/global.sass'


function App () {

    const data = localStorage.getItem('transactions');

    //if any data from local storage parse to json, or if none, return an empty array
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : [] 
    );
    const [income, setincome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    //when app starts/render and if transactionList state change it gets the values from the trasactionsList state and update the states of income, expense and total
    useEffect(() => {

        const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

        const amountIncome = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((previousValue, currentValue) => previousValue + currentValue, 0).toFixed(2);
        const income = amountIncome.reduce((previousValue, currentValue) => previousValue + currentValue, 0).toFixed(2);
        const total = Math.abs(income - expense).toFixed(2);

        setincome(`£ ${income}`);
        setExpense(`£ ${expense}`)
        setTotal(`${Number(income) < Number(expense)  ? '-' : ''}£ ${total}`);

    },[transactionsList]);

    const handleAdd = (transaction) => {
        const updatedTransactions = [...transactionsList, transaction] //add the new transaction into the $updatedTransactions with the already existent transactions (...transactionsList) got from localstorage
        setTransactionsList(updatedTransactions);
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    }

    return (
        <>
            <Header />
            <main>
                <Summary income={income} expense={expense} total={total} />
                <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
            </main>
        </>
    )
}

export default App;