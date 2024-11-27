import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 50000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  function handleChangeInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChangeInput} />
      {!isInputValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
      {isInputValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
