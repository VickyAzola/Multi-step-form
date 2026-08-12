import NavMobile from "./components/NavMobile";
import Step1 from "./components/form/Step1";
import Step2 from "./components/form/Step2";
import Step3 from "./components/form/Step3";
import Step4 from "./components/form/Step4";
import iconThankYou from "./assets/images/icon-thank-you.svg"; 
import { useState } from "react"; 
import { useTranslation } from "react-i18next"; 
import type {
  FormRequest,
  Step1Data,
  Step2Data,
  Step3Data,
} from "./types/form";

function App() {
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(1);
  const [isFormSended, setIsFormSended] = useState(false);
  const [formData, setFormData] = useState<FormRequest>({
    name: "",
    email: "",
    phone: "",
    plan: {
      name: "",
      amount: "",
    },
    period: "",
    addOns: [],
  });

  const handlePrevStep = () => {
    setCurrentStep((current) => current - 1);
  };

  const handleSubmitStep1 = (step1Data: Step1Data) => {
    setFormData((current) => ({
      ...current,
      ...step1Data,
    }));

    setCurrentStep(2);
  };

  const handleSubmitStep2 = (step2Data: Step2Data) => {
    setFormData((current) => ({
      ...current,
      ...step2Data,
    }));

    setCurrentStep(3);
  };

  const handleSubmitStep3 = (step3Data: Step3Data) => {
    setFormData((current) => ({
      ...current,
      ...step3Data,
    }));

    setCurrentStep(4);
  };

  const handleConfirm = () => {
    setIsFormSended(true)
    console.log(formData);
  };

  return (
    <>
      <header>
        <NavMobile currentStep={currentStep} />
      </header>
      <main>
        <section className="absolute z-20 top-24 inset-x-0 mx-4">
          {currentStep == 1 && <Step1 onSubmitStep={handleSubmitStep1} />}

          {currentStep == 2 && (
            <Step2
              handlePrevStep={handlePrevStep}
              onSubmitStep={handleSubmitStep2}
            />
          )}
          {currentStep == 3 && (
            <Step3
              period={formData.period}
              handlePrevStep={handlePrevStep}
              onSubmitStep={handleSubmitStep3}
            />
          )}

          {currentStep == 4 && !isFormSended && (
            <Step4
              formData={formData}
              handlePrevStep={handlePrevStep}
              onConfirm={handleConfirm}
            />
          )}

          {isFormSended && (
              <div className="px-6 py-12 rounded-lg bg-NeutralWhite shadow-lg">
                <img src={iconThankYou} className="mx-auto mb-8" />
                <h1 className="text-center text-2xl mb-3 font-semibold text-PrimaryBlue950">
                  {t("steps.thankYou.title")}
                </h1>
                <p className="text-center text-NeutralGrey500">
                  {t("steps.thankYou.description")}
                </p>
              </div>
            )}
        </section>
      </main>
    </>
  );
}

export default App;
