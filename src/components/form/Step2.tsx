import CardForm from "../CardForm";
import SelectCard from "../ui/SelectCard";
import Button from "../ui/Button";
import iconArcade from "../../assets/images/icon-arcade.svg";
import iconAdvaced from "../../assets/images/icon-advanced.svg";
import iconPro from "../../assets/images/icon-pro.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Periods, Plans, type Step2Data } from "../../types/form";
import { useCustomerPlan } from "../../stores/customerPlan";

interface Step2Types {
  handlePrevStep: () => void;
  onSubmitStep: (data: Step2Data) => void;
}

function Step2({ handlePrevStep, onSubmitStep }: Step2Types) {
  const { t } = useTranslation();
  const customerData = useCustomerPlan((state) => state.customerData);

  const [selectedPeriod, setSelectedPeriod] = useState<Periods>(
    customerData.period === Periods.YEARLY ? Periods.YEARLY : Periods.MONTHLY,
  );
  const [plan, setPlan] = useState<Plans>(
    (customerData.plan.id as Plans) || Plans.ARCADE,
  );

  const plans = [
    {
      id: Plans.ARCADE,
      icon: iconArcade,
      label: "plans.arcade",
      amount: selectedPeriod === Periods.MONTHLY ? "9" : "90",
    },
    {
      id: Plans.ADVANCED,
      icon: iconAdvaced,
      label: "plans.advanced",
      amount: selectedPeriod === Periods.MONTHLY ? "12" : "120",
    },
    {
      id: Plans.PRO,
      icon: iconPro,
      label: "plans.pro",
      amount: selectedPeriod === Periods.MONTHLY ? "15" : "150",
    },
  ];

  const handleSelectPlan = (selectedPlan: Plans) => {
    setPlan(selectedPlan);
  };

  const handleTogglePeriod = () => {
    setSelectedPeriod((currentPeriod) =>
      currentPeriod === Periods.MONTHLY ? Periods.YEARLY : Periods.MONTHLY,
    );
  };

  const handleSubmit = () => {
    const selectedPlan = plans.find((item) => item.id === plan);
    if (!selectedPlan) return;

    const stepData: Step2Data = {
      plan: {
        id: selectedPlan.id,
        label: selectedPlan.label,
        amount: selectedPlan.amount,
      },
      period: selectedPeriod,
    };

    onSubmitStep(stepData);
  };

  return (
    <>
      <CardForm title="steps.step2.title" subTitle="steps.step2.description">
        <form className="space-y-6">
          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            {plans.map((item) => (
              <SelectCard
                key={item.id}
                icon={item.icon}
                label={item.label}
                amount={item.amount}
                period={selectedPeriod === Periods.MONTHLY ? "plans.mo" : "plans.yr"}
                isSelected={plan === item.id}
                showBonus={selectedPeriod === Periods.YEARLY}
                onClick={() => handleSelectPlan(item.id)}
              />
            ))}
          </div>

          <div className="bg-NeutralBlue50 flex items-center justify-center gap-4 rounded-lg bg-PrimaryBlue50 px-4 py-3">
            <span
              className={`text-sm font-semibold ${
                selectedPeriod === Periods.MONTHLY
                  ? "text-PrimaryBlue950"
                  : "text-NeutralGrey500"
              }`}
            >
              {t("plans.monthly")}
            </span>
            <button
              type="button"
              onClick={handleTogglePeriod}
              className="relative h-6 w-11 rounded-full bg-PrimaryBlue950 transition cursor-pointer"
            >
              <span
                className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-NeutralWhite transition ${
                  selectedPeriod === Periods.MONTHLY ? "left-1" : "left-6"
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold ${
                selectedPeriod === Periods.YEARLY
                  ? "text-PrimaryBlue950"
                  : "text-NeutralGrey500"
              }`}
            >
              {t("plans.yearly")}
            </span>
          </div>
        </form>
      </CardForm>

      <footer className="fixed md:absolute flex left-0 bottom-0 w-full bg-NeutralWhite p-4 justify-between">
        <Button
          variant="text"
          type="button"
          text="form.buttons.back"
          onClick={handlePrevStep}
        />

        <Button
          variant="square"
          type="button"
          text="form.buttons.next"
          onClick={handleSubmit}
        />
      </footer>
    </>
  );
}

export default Step2;
