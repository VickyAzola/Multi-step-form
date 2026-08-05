import { useTranslation } from "react-i18next";

interface SelectCardTypes {
  icon: string;
  label: string;
  amount: string;
  period: string;
  isSelected?: boolean;
  showBonus?: boolean;
  onClick: () => void;
}

function SelectCard({
  icon,
  label,
  amount,
  period,
  isSelected,
  showBonus,
  onClick,
}: SelectCardTypes) {
  const { t } = useTranslation();

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`cursor-pointer flex w-full gap-4 rounded-lg border p-4 text-left transition md:min-h-40 md:flex-col md:justify-between md:gap-10 ${
          isSelected
            ? "border-PrimaryPurple600 bg-PrimaryPurple600/5"
            : "border-NeutralGrey500"
        }`}
      >
        <img src={icon} alt="" className="h-10 w-10 shrink-0" />
        <div className="text-left">
          <p className="text-lg font-semibold text-PrimaryBlue950">
            {t(label)}
          </p>
          <p className="text-NeutralGrey500">
            ${amount}/{t(period)}
          </p>
          {showBonus && (
            <p className="text-sm text-PrimaryBlue950">
              {t("plans.freeMonths")}
            </p>
          )}
        </div>
      </button>
    </>
  );
}

export default SelectCard;
