import NavMobile from "./components/NavMobile";
import Button from "./components/ui/Button";
import Step1 from "./components/form/Step1";
import Step2 from "./components/form/Step2";
import Step3 from "./components/form/Step3"
import { useState } from "react";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((current) => current + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((current) => current - 1);
  };

  return (
    <>
      <header>
        <NavMobile 
        currentStep={currentStep}
        />
      </header>
      <main>
        <section className="absolute z-20 top-24 inset-x-0 mx-4">
          {currentStep == 1 && <Step1 />}
          {currentStep == 2 && <Step2 />}
          {currentStep == 3 && <Step3 />}
        </section>
      </main>
      <footer
        className={`fixed flex  bottom-0 w-full bg-NeutralWhite p-4
        ${currentStep != 1 ? "justify-between" : "justify-end"}`}
      >
        {currentStep != 1 && (
          <Button
            variant="text"
            type="button"
            text="Go Back"
            onClick={handlePrevStep}
          />
        )}
        <Button
          variant="square"
          type="button"
          text="Next Step"
          onClick={handleNextStep}
        />
      </footer>
    </>
  );
}

export default App;
