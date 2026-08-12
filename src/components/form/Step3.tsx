import CardForm from "../CardForm";
import CheckboxCard from "../ui/CheckboxCard";
import Button from "../ui/Button";
import { Periods, type Step3Data, type AddOns } from "../../types/form";
import { useState } from "react";
import { useCustomerPlan } from "../../stores/customerPlan";

interface Step3Types {
  period: string;
  handlePrevStep: () => void;
  onSubmitStep: (data: Step3Data) => void;
}

function Step3({ period, handlePrevStep, onSubmitStep }: Step3Types) {
  const customerData = useCustomerPlan((state) => state.customerData);

  const addOns = [
    {
      id: "onlineService",
      label: "addons.onlineService.title",
      description: "addons.onlineService.description",
      amount: period === Periods.MONTHLY ? "1" : "10",
    },
    {
      id: "largerStorage",
      label: "addons.largerStorage.description",
      description: "addons.largerStorage.description",
      amount: period === Periods.MONTHLY ? "2" : "20",
    },
    {
      id: "customProfile",
      label: "addons.customProfile.title",
      description: "addons.customProfile.description",
      amount: period === Periods.MONTHLY ? "2" : "20",
    },
  ];

  const [selectedAddOns, setSelectedAddOns] = useState<AddOns[]>(() => {
    const selectedNames = new Set(
      customerData.addOns.map((addOn) => addOn.label),
    );

    return addOns
      .filter((item) => selectedNames.has(item.label))
      .map((item) => ({
        id: item.id,
        label: item.label,
        amount: item.amount,
      }));
  });

  const handleToggleAddOns = (item: AddOns) => {
    setSelectedAddOns((current) => {
      const exists = current.some((addOn) => addOn.label === item.label);
      const nextAddOns = exists
        ? current.filter((addOn) => addOn.label !== item.label)
        : [...current, item];

      return nextAddOns;
    });
  };

  const handleSubmit = () => {
    const stepData: Step3Data = {
      addOns: selectedAddOns.map((item) => ({
        id: item.id,
        label: item.label,
        amount: item.amount,
      })),
    };
    onSubmitStep(stepData);
  };

  return (
    <>
      <CardForm title="steps.step3.title" subTitle="steps.step3.description">
        <form className="space-y-6">
          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            {addOns.map((item) => (
              <CheckboxCard
                key={item.id}
                label={item.label}
                description={item.description}
                amount={item.amount}
                period={period === Periods.MONTHLY ? "plans.mo" : "plans.yr"}
                isSelected={selectedAddOns.some(
                  (addOn) => addOn.label === item.label,
                )}
                onClick={() =>
                  handleToggleAddOns({id: item.id, label: item.label, amount: item.amount })
                }
              />
            ))}
          </div>
        </form>
      </CardForm>

      <footer className="fixed flex left-0 bottom-0 w-full bg-NeutralWhite p-4 justify-between">
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

export default Step3;
