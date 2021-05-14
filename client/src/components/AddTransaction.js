import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction(){
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [choice, setChoice] = useState('expense')

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        if(choice === "expense"){
            var actualAmount = "-" + amount;
        }
        else{
            actualAmount = amount;
        }
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            name,
            category,
            amount: +actualAmount
        }
        addTransaction(newTransaction);

        setName('');
        setCategory('');
        setAmount(0);
    }

    return(
        <div>
            <h5>Add New Transaction</h5>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" checked={choice === 'income'} onChange={() => setChoice('income')} id="inlineRadio1" value="income"/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Income</label>
                        </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" checked={choice === 'expense'} onChange={() => setChoice('expense')} id="inlineRadio2" value="expense"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Expense</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Description</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Description" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Category</label>
                        {
                            choice==='income'
                            ? <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category of Purchase..." disabled/>
                            : <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category of Purchase..."/>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">
                            Amount
                        </label>
                        <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} min="0" placeholder="Enter amount..." required/>
                    </div>
                </div>
                <button className="btn btn-secondary">Add transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;