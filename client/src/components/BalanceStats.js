import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
}

function BalanceStats(){
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1);

    return(
        <div className="inc-exp-container">
            <div>
                <h5>Income</h5>
                <p id="money-plus" className="money plus">
                    {moneyFormatter(income)}
                </p>
            </div>
            <div>
                <h5>Expenses</h5>
                <p id="money-minus" className="money minus">
                    {moneyFormatter(expense)}
                </p>
            </div>
        </div>
    );
}

export default BalanceStats;