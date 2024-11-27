import { useState } from "react";
const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 50000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChangeInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) =>
              handleChangeInput("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) =>
              handleChangeInput("annualInvestment", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) =>
              handleChangeInput("expectedReturn", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => handleChangeInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
