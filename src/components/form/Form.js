import React, {useState} from 'react';

import './form.sass';

function Form () {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [isExpense, setIsExpense] = useState(true);

    const handleSave = () => {
        if(!description || !amount) {
            alert('Inform description and value');
            return;
        } else if (amount === 0) {
            alert('Value must be greater than 0');
            return;
        }
        console.log(amount)
    }

    const descriptionHandleChange = (e) => {
        setDescription(e.target.value)
    }

    const amountHandleChange =(e) => {
        setAmount(e.target.value)
    }

    const inOutHandleChange = () => {
        setIsExpense(!isExpense)
    }

    return (
        <div className='form'>
            <div className='form-inputContent'>          {/*(e) => setDescription(e.target.value)*/}
                <label>Description:</label>
                <input value={description} onChange={descriptionHandleChange} />
            </div>
            <div className='form-inputContent'>          {/*(e) => setDescription(e.target.value)*/}
                <label>Value:</label>
                <input value={amount} type="number" onChange={amountHandleChange} />
            </div>
            <div className='form-inputContent-radio'>
                <input
                    type='radio' 
                    id='income' 
                    defaultChecked
                    name='inOut' 
                    onChange={inOutHandleChange} />
                <label htmlFor='income'>Income</label>
                <input
                    type='radio' 
                    id='outcome' 
                    name='inOut' 
                    onChange={inOutHandleChange} />
                <label htmlFor='income'>Outcome</label>
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}

export default Form;