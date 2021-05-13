import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

//Money formatter function
// function moneyFormatter(num) {
//     let p = num.toFixed(2).split('.');
//     return (
//       '$ ' +
//       p[0]
//         .split('')
//         .reverse()
//         .reduce(function (acc, num, i, orig) {
//           return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
//         }, '') +
//       '.' +
//       p[1]
//     );
//   }

function TransactionList(){
    // const { transactions, getTransactions, deleteTransaction } = useContext(GlobalContext);
    const { transactions, getTransactions} = useContext(GlobalContext);
    // const sign = transactions.amount < 0 ? '-' : '+';

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction._id} transaction={transaction}/>))
                }
            </ul>
            {/* <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                        <th scopt="col"></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(transaction => (
                            <tr className={transaction.amount < 0 ? 'table-danger' : 'table-success'} key={transaction._id}>
                                <th scope="row">{transaction.name}</th>
                                <td>{transaction.category}</td>
                                <td>{transaction.amount < 0 ? '-' : '+'}{moneyFormatter(transaction.amount)}</td>
                                <td>
                                    <button onClick={() => deleteTransaction(transaction._id)} className="btn btn-sm btn-danger">x</button>
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table> */}
        </div>
    )
}

export default TransactionList;