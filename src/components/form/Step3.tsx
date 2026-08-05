import CardForm from "../CardForm";
import CheckboxCard from "../ui/CheckboxCard";
import { Periods } from "../../types/global";
import { useState } from "react";

interface Step3Types {
  period: Periods;
}

function Step3({ period }: Step3Types) {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const addOns = [
    {
      id: "addons.onlineService.title",
      label: "addons.onlineService.title",
      description: "addons.onlineService.description",
      amount: period === Periods.MONTHLY ? "1" : "10",
      period: period === Periods.MONTHLY ? "plans.month" : "plans.year",
    },
    {
      id: "addons.largerStorage.title",
      label: "addons.largerStorage.title",
      description: "addons.largerStorage.description",
      amount: period === Periods.MONTHLY ? "2" : "20",
      period: period === Periods.MONTHLY ? "plans.month" : "plans.year",
    },
    {
      id: "addons.customProfile.title",
      label: "addons.customProfile.title",
      description: "addons.customProfile.description",
      amount: period === Periods.MONTHLY ? "2" : "20",
      period: period === Periods.MONTHLY ? "plans.month" : "plans.year",
    },
  ];

  const handleToggleAddOns = (itemId: string) => {
    const alreadyExist = selectedAddOns.includes(itemId)
    console.log(alreadyExist)
    if(alreadyExist) {
        setSelectedAddOns(selectedAddOns.filter(id => id !== itemId))
    } else {
        setSelectedAddOns([...selectedAddOns, itemId]);
    }
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
                period={item.period}
                isSelected={selectedAddOns.includes(item.id)}
                onClick={() => handleToggleAddOns(item.id)}
              />
            ))}
          </div>
        </form>
      </CardForm>
    </>
  );
}

export default Step3;
