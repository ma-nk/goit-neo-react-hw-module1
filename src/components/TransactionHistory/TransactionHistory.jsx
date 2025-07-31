import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHeader}>
        <tr>
          <th className={css.tableHeaderColumn}>Type</th>
          <th className={css.tableHeaderColumn}>Amount</th>
          <th className={css.tableHeaderColumn}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ amount, currency, type, id }) => (
          <tr className={css.tableBodyRow} key={id}>
            <td className={css.tableBodyItem}>{type}</td>
            <td className={css.tableBodyItem}>{amount}</td>
            <td className={css.tableBodyItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
