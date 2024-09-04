import { memo } from "react";

const TableItem = memo((props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tr>
      <td>{props.year}</td>
      <td>{formatter.format(props.savingsEndOfYear)}</td>
      <td>{formatter.format(props.yearlyInterest)}</td>
      <td>
        {formatter.format(
          props.savingsEndOfYear -
            props.initInvestment -
            props.yearlyContribution * props.year
        )}
      </td>
      <td>
        {formatter.format(
          props.initInvestment + props.yearlyContribution * props.year
        )}
      </td>
    </tr>
  );
});

export default TableItem;
