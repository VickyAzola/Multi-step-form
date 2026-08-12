import { useTranslation } from "react-i18next";

interface InputLabelTypes {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  errorMessage?: string;
}

function InputLabel({
  type,
  name,
  label,
  placeholder,
  errorMessage,
}: InputLabelTypes) {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col mt-1 mb-3">
        <div className="flex justify-between">
          <label
            htmlFor={name}
            className="text-PrimaryBlue950 text-sm font-semibold"
          >
            {t(label)}
          </label>
          {errorMessage && (
            <p className="text-sm text-PrimaryRed500">{t(errorMessage)}</p>
          )}
        </div>
        <input
          id={name}
          type={type}
          name={name}
          className={`${errorMessage ? "border-PrimaryRed500" : "border-NeutralGrey500/80"} border mt-1 rounded-lg px-3 py-2`}
          placeholder={t(placeholder)}
        />
      </div>
    </>
  );
}

export default InputLabel;
