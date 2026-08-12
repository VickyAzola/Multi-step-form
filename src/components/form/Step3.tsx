import CardForm from "../CardForm";
import CheckboxCard from "../ui/CheckboxCard";
import Button from "../ui/Button";
import { Periods, type Step3Data, type AddOns } from "../../types/form";
import { useState } from "react";

interface Step3Types {
  period: string;
  handlePrevStep: () => void;
  onSubmitStep: (data: Step3Data) => void;
}

function Step3({ period, handlePrevStep, onSubmitStep }: Step3Types) {
  const [selectedAddOns, setSelectedAddOns] = useState<AddOns[]>([]);

  const addOns = [
    {
      name: "addons.onlineService.title",
      description: "addons.onlineService.description",
      amount: period === Periods.MONTHLY ? "1" : "10",
    },
    {
      name: "addons.largerStorage.title",
      description: "addons.largerStorage.description",
      amount: period === Periods.MONTHLY ? "2" : "20",
    },
    {
      name: "addons.customProfile.title",
      description: "addons.customProfile.description",
      amount: period === Periods.MONTHLY ? "2" : "20",
    },
  ];

  const handleToggleAddOns = (item: AddOns) => {
    setSelectedAddOns((current) => {
      const exists = current.some((addOn) => addOn.name === item.name);

      if (exists) {
        return current.filter((addOn) => addOn.name !== item.name);
      }

      return [...current, item];
    });
  };

  const handleSubmit = () => {
    const stepData: Step3Data = {
      addOns: selectedAddOns,
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
                key={item.name}
                label={item.name}
                description={item.description}
                amount={item.amount}
                period={
                  period === Periods.MONTHLY ? "plans.mo" : "plans.yr"
                }
                isSelected={selectedAddOns.some(
                  (addOn) => addOn.name === item.name,
                )}
                onClick={() =>
                  handleToggleAddOns({ name: item.name, amount: item.amount })
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
