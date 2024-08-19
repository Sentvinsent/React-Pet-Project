import TableItem from "./TableItem";
import classes from "./Table.module.css";

const Table = (props) => {
  const tableContent = props.data.map((item) => {
    return (
      <TableItem
        key={item.year}
        year={item.year}
        yearlyInterest={item.yearlyInterest}
        savingsEndOfYear={item.savingsEndOfYear}
        yearlyContribution={item.yearlyContribution}
        initInvestment={item.initInvestment}
      />
    );
  });

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{tableContent}</tbody>
    </table>
  );
};

export default Table;
