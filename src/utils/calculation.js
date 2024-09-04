const calculation = (userInput) => {
  const yearlyData = [];

  const {
    currentInpt: initInvestment,
    yearlyContribution,
    expectedReturn,
    duration,
  } = userInput;

  let currentSavings = initInvestment;

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

  return yearlyData;
};

export default calculation;
