// import PropTypes from 'prop-types';
import { TransactionRow } from './TransactionRow';
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TransactionRow
              key={id}
              id={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};
