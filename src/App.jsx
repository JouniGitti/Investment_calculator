import { useState } from "react";

import { Header } from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx";

function App() {
  const [userInputState, setUserInputState] = useState({
    initialInvestment: 5000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInputState.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    setUserInputState(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue, // + forces a conversion from string to number value
        };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInputState} onChangeInput={handleChange}/>
      {!inputIsValid && (
        <p className="center">please enter a duration greater than zero.</p>)}
      {inputIsValid && <Results input={userInputState} />}
    </>
  )
}

export default App
