import { getTransactionColor } from '../../utils/transactionColor';
export const TransactionRow = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} style={{ backgroundColor: getTransactionColor(type) }}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
