import { useTranslation } from "react-i18next";

interface CheckboxCardTypes {
  label: string;
  description: string;
  amount: string;
  period: string;
  isSelected?: boolean;
  onClick: () => void;
}

function CheckboxCard({
  label,
  description,
  amount,
  period,
  isSelected,
  onClick,
}: CheckboxCardTypes) {
  const { t } = useTranslation();
  return (
    <>
      <div
        onClick={onClick}
        className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-colors ${
          isSelected
            ? "border-PrimaryPurple600 bg-PrimaryPurple600/5"
            : "border-NeutralGrey500/35 bg-NeutralWhite"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              checked={isSelected}
              readOnly
              className="peer h-5 w-5 appearance-none rounded border border-NeutralGrey500/60 bg-NeutralWhite checked:bg-PrimaryPurple600 checked:border-PrimaryPurple600  transition-all cursor-pointer"
            />

            <svg
              className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-NeutralWhite opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <div>
            <p className="font-semibold text-PrimaryBlue950">{t(label)}</p>
            <p className="text-sm text-NeutralGrey500">{t(description)}</p>
          </div>
        </div>
        <p className="text-PrimaryPurple600">
          +${amount}/{t(period)}
        </p>
      </div>
    </>
  );
}

export default CheckboxCard;
