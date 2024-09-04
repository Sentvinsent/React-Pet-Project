import { useState, useCallback } from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
import calculation from "./utils/calculation";

function App() {
  const [data, setData] = useState();

  const calculateHandler = useCallback((userInput) => {
    setData(calculation(userInput));
  }, []);

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
