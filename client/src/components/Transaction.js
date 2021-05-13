// import React from 'react';
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

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

function displayData(name, category){
  if(category === ""){
    return `${name}`;
  }
  return `${name} (${category})`;
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {displayData(transaction.name, transaction.category)}
      <span>{sign}{moneyFormatter(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}