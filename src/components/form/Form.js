import React, { useState } from 'react';
import {v4 as uniqueId} from 'uuid';
import InputMask from 'react-input-mask';

import './form.sass';
import Grid from '../grid/Grid';

function Form ({handleAdd, transactionsList, setTransactionsList}) {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setIsExpense] = useState(false);
    const [date, setDate] = useState('');

    const handleSave = () => {
        if(!description || !amount || !date) {
            alert('Inform all fields must be filled');
            return;
        } else if (amount <= 0) {
            alert('Value must be greater than 0');
            return;
        }
        
        const transaction = {
            id: uniqueId(),
            description: description,
            amount: amount,
            expense: isExpense,
            date: date
        };

        handleAdd(transaction);
        setDescription('');
        setAmount('');
        setDate('');
    }


    const descriptionHandleChange = (e) => {
        setDescription(e.target.value)
    }

    const amountHandleChange =(e) => {
        setAmount(e.target.value)
    }

    const dateHandleChange = (e) => {
        setDate(e.target.value)
    }

    const inOutHandleChange = () => {
        setIsExpense(!isExpense)
    }


    return (
        <>
            <div className='form'>
                <div className='form-inputContent'>          {/*(e) => setDescription(e.target.value)*/}
                    <label>Description:</label>
                    <input value={description} onChange={descriptionHandleChange} />
                </div>
                <div className='form-inputContent'>          {/*(e) => setDescription(e.target.value)*/}
                    <label>Value:</label>
                    <input value={amount} type="number" onChange={amountHandleChange} />
                </div>
                <div className='form-inputContent'>          {/*(e) => setDescription(e.target.value)*/}
                    <label>Date:</label>
                    <InputMask mask='99/99/99' value={date} onChange={dateHandleChange} />
                </div>
                <div className='form-inputContent-radio'>
                    <input
                        type='radio' 
                        defaultChecked
                        id='incoming' 
                        name='inOut' 
                        onChange={inOutHandleChange} />
                    <label htmlFor='incoming'>Incoming</label>
                    <input
                        type='radio' 
                        id='outgoing' 
                        name='inOut' 
                        onChange={inOutHandleChange} />
                    <label htmlFor='outgoing'>Outgoing</label>
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
            <Grid items={transactionsList} setItems={setTransactionsList} />
        </>
    )
}

export default Form;