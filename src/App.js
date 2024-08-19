import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [data, setData] = useState();

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput.currentInpt;
    const initInvestment = +userInput.currentInpt;
    const yearlyContribution = +userInput.yearlyVal;
    const expectedReturn = +userInput.expected / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initInvestment: initInvestment,
      });
    }

    console.log("User data: ", yearlyData);
    setData(yearlyData);
  };

  return (
    <div>
      <Header />
      <Form onFormSubmission={calculateHandler} />
      {!data && <p className="fallback">No investment have been calculated!</p>}
      {data && <Table data={data} />}
    </div>
  );
}

export default App;
