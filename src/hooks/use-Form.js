import { useState } from "react";

const useForm = () => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const validation = () => {
    return value > 0;
  };

  const isValid = validation();
  const hasError = !isValid && touched;

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const onBlurHandler = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useForm;
