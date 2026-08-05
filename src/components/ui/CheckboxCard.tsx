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
      <div onClick={onClick} className={`flex justify-between items-center border p-4 rounded-lg 
        ${isSelected ? 'border-PrimaryPurple600 bg-PrimaryPurple600/5' : 'border-NeutralGrey500'} `}>
        <div className="flex gap-4">
          <input type="checkbox" />
          <div>
            <p className="text-PrimaryBlue950 font-semibold">{t(label)}</p>
            <p className="text-NeutralGrey500">{t(description)}</p>
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
