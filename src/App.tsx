import StepsNavigation from "./components/StepsNavigation";
import Step1 from "./components/form/Step1";
import Step2 from "./components/form/Step2";
import Step3 from "./components/form/Step3";
import Step4 from "./components/form/Step4";
import iconThankYou from "./assets/images/icon-thank-you.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Step1Data, Step2Data, Step3Data } from "./types/form";
import { useCustomerPlan } from "./stores/customerPlan";
import LanguageSwitch from "./components/ui/LanguageSwitch";

function App() {
  const { t } = useTranslation();
  const customerData = useCustomerPlan((state) => state.customerData);
  const updateStep1 = useCustomerPlan((state) => state.updateStep1);
  const updateStep2 = useCustomerPlan((state) => state.updateStep2);
  const updateStep3 = useCustomerPlan((state) => state.updateStep3);
  const resetCustomerData = useCustomerPlan((state) => state.resetCustomerData);

  const [currentStep, setCurrentStep] = useState(1);
  const [isFormSended, setIsFormSended] = useState(false);

  const handlePrevStep = () => {
    setCurrentStep((current) => current - 1);
  };

  const handleSubmitStep1 = (step1Data: Step1Data) => {
    updateStep1(step1Data);
    setCurrentStep(2);
  };

  const handleSubmitStep2 = (step2Data: Step2Data) => {
    updateStep2(step2Data);
    setCurrentStep(3);
  };

  const handleSubmitStep3 = (step3Data: Step3Data) => {
    updateStep3(step3Data);
    setCurrentStep(4);
  };

  const handleConfirm = () => {
    setIsFormSended(true);
    console.log("customerData", customerData);
    resetCustomerData();
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <header className="absolute top-0 w-full">
        <div className="absolute right-2 top-2 z-30 md:right-8 md:top-8">
          <LanguageSwitch />
        </div>
          <StepsNavigation isMobile={true} currentStep={currentStep} /> 
      </header>

      <main className="absolute z-10 top-28 md:top-20 w-full overflow-y-auto px-4 pb-28 md:pb-10">
        <div className="md:bg-NeutralWhite md:shadow-lg md:rounded-lg md:grid md:grid-cols-3 md:p-4 md:max-w-4xl md:mx-auto">
          <div className="md:col-span-1">
            <StepsNavigation  isMobile={false}  currentStep={currentStep} />
          </div>
          <section className="mx-auto w-full max-w-xl md:col-span-2 md:max-w-lg md:mt-8 md:relative">
            {currentStep == 1 && <Step1 onSubmitStep={handleSubmitStep1} />}

            {currentStep == 2 && (
              <Step2
                handlePrevStep={handlePrevStep}
                onSubmitStep={handleSubmitStep2}
              />
            )}
            {currentStep == 3 && (
              <Step3
                period={customerData.period}
                handlePrevStep={handlePrevStep}
                onSubmitStep={handleSubmitStep3}
              />
            )}

            {currentStep == 4 && !isFormSended && (
              <Step4
                formData={customerData}
                handlePrevStep={handlePrevStep}
                onConfirm={handleConfirm}
              />
            )}

            {isFormSended && (
              <div className="px-6 py-12 md:py-0 md:px-8 rounded-lg bg-NeutralWhite shadow-lg md:shadow-NeutralWhite flex flex-col items-center justify-center h-full">
                <img src={iconThankYou} className="mx-auto mb-8" />
                <h1 className="text-center text-2xl md:text-3xl mb-3 font-semibold md:font-bold text-PrimaryBlue950">
                  {t("steps.thankYou.title")}
                </h1>
                <p className="text-center text-NeutralGrey500">
                  {t("steps.thankYou.description")}
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
