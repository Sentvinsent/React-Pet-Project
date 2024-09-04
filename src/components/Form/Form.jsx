import { useMemo } from "react";
import useForm from "../../hooks/use-Form";
import classes from "./Form.module.css";

const Form = (props) => {
  const error = (
    <p className={classes.form__error}>Value must be greater than 0</p>
  );

  const {
    value: currentInpt,
    isValid: currentInptValidity,
    hasError: currentInptError,
    onChangeHandler: currentInptChangeHandler,
    onBlurHandler: currentInptBlurHandler,
    reset: currentInptResetHandler,
  } = useForm();
  const {
    value: yearlyVal,
    isValid: yearlyValidity,
    hasError: yearlyError,
    onChangeHandler: yearlyChangeHandler,
    onBlurHandler: yearlyBlurHandler,
    reset: yearlyResetHandler,
  } = useForm();
  const {
    value: expected,
    isValid: expectedValidity,
    hasError: expectedError,
    onChangeHandler: expectedChangeHandler,
    onBlurHandler: expectedBlurHandler,
    reset: expectedResetHandler,
  } = useForm();
  const {
    value: duration,
    isValid: durationValidity,
    hasError: durationError,
    onChangeHandler: durationChangeHandler,
    onBlurHandler: durationBlurHandler,
    reset: durationResetHandler,
  } = useForm();

  //Save data

  const formValidity = useMemo(() => {
    return (
      currentInptValidity &&
      yearlyValidity &&
      expectedValidity &&
      durationValidity
    );
  }, [currentInptValidity, yearlyValidity, expectedValidity, durationValidity]);

  const handleFormReset = () => {
    currentInptResetHandler();
    yearlyResetHandler();
    expectedResetHandler();
    durationResetHandler();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formValidity) {
      return;
    }

    let formData = {
      currentInpt: +currentInpt,
      yearlyContribution: +yearlyVal,
      expectedReturn: +expected / 100,
      duration: +duration,
    };

    props.onFormSubmission(formData);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes["input-group"]}>
        <div className={classes["single-input"]}>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentInptChangeHandler}
            onBlur={currentInptBlurHandler}
            value={currentInpt}
          />
          {currentInptError && error}
        </div>
        <div className={classes["single-input"]}>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlyChangeHandler}
            onBlur={yearlyBlurHandler}
            value={yearlyVal}
          />
          {yearlyError && error}
        </div>
      </div>
      <div className={classes["input-group"]}>
        <div className={classes["single-input"]}>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedChangeHandler}
            onBlur={expectedBlurHandler}
            value={expected}
          />
          {expectedError && error}
        </div>
        <div className={classes["single-input"]}>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={durationChangeHandler}
            onBlur={durationBlurHandler}
            value={duration}
          />
          {durationError && error}
        </div>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={handleFormReset}
        >
          Reset
        </button>
        <button
          type="submit"
          className={classes.button}
          disabled={!formValidity}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
