import {
  TransactionTable,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableCell,
  TypeCell,
} from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <tbody>
        {items.map((transaction) => (
          <TableRow key={transaction.id}>
            <TypeCell>{transaction.type}</TypeCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

export default TransactionHistory;
