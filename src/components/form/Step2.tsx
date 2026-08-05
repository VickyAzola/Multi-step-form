import CardForm from "../CardForm";
import SelectCard from "../ui/SelectCard";
import iconArcade from "../../assets/images/icon-arcade.svg";
import iconAdvaced from "../../assets/images/icon-advanced.svg";
import iconPro from "../../assets/images/icon-pro.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Periods, Plans } from "../../types/global";

function Step2() {
  const { t } = useTranslation();
  const [period, setPeriod] = useState(Periods.MONTHLY);
  const [plan, setPlan] = useState(Plans.ARCADE);

  const plans = [
    {
      id: Plans.ARCADE,
      icon: iconArcade,
      label: "plans.arcade",
      amount: period === Periods.MONTHLY ? "9" : "90",
      period: period === Periods.MONTHLY ? "plans.month" : "plans.year",
    },
    {
      id: Plans.ADVANCED,
      icon: iconAdvaced,
      label: "plans.advanced",
      amount: period === Periods.MONTHLY ? "12" : "120",
      period: period === Periods.MONTHLY ? "plans.month" : "plans.year",
    },
    {
      id: Plans.PRO,
      icon: iconPro,
      label: "plans.pro",
      amount: period === Periods.MONTHLY ? "15" : "150",
      period: period === Periods.MONTHLY ? "plans.month" : "plans.year",
    },
  ];

  const handleSelectPlan = (plan: Plans) => {
    setPlan(plan);
  };

  const handleTogglePeriod = () => {
    setPeriod((currentPeriod) =>
      currentPeriod === Periods.MONTHLY ? Periods.YEARLY : Periods.MONTHLY
    );
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
                period={item.period}
                isSelected={plan === item.id}
                showBonus={period === Periods.YEARLY}
                onClick={() => handleSelectPlan(item.id)}
              />
            ))}
          </div>

          <div className="bg-NeutralBlue50 flex items-center justify-center gap-4 rounded-lg bg-PrimaryBlue50 px-4 py-3">
            <span
              className={`text-sm font-semibold ${
                period === Periods.MONTHLY
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
                  period === Periods.MONTHLY ? "left-1" : "left-6"
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold ${
                period === Periods.YEARLY
                  ? "text-PrimaryBlue950"
                  : "text-NeutralGrey500"
              }`}
            >
              {t("plans.yearly")}
            </span>
          </div>
        </form>
      </CardForm>
    </>
  );
}

export default Step2;
