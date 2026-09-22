import { useTranslation } from "react-i18next";

interface InputLabelTypes {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  autoComplete: string;
  required: boolean;
  errorMessage?: string;
  defaultValue?: string;
}

function InputLabel({
  type,
  name,
  label,
  placeholder,
  autoComplete,
  required,
  errorMessage,
  defaultValue,
}: InputLabelTypes) {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col mt-1 md:mt-2 mb-3 md:mb-6">
        <div className="flex justify-between">
          <label
            htmlFor={name}
            className="text-PrimaryBlue950 text-sm md:text-base font-semibold"
          >
            {t(label)}
          </label>
          {errorMessage && (
            <p id={`${name}-error`} role="alert" className="text-sm md:text-base text-PrimaryRed500">{t(errorMessage)}</p>
          )}
        </div>
        <input
          id={name}
          type={type}
          name={name}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          aria-invalid={Boolean(errorMessage)}
          aria-describedby={errorMessage ? `${name}-error` : undefined}
          className={`${errorMessage ? "border-PrimaryRed500" : "border-NeutralGrey500"} 
          border mt-1 rounded-lg px-3 py-2 transition-all hover:border-PrimaryPurple600 focus:border-PrimaryPurple600 focus:outline-none cursor-pointer`}
          placeholder={t(placeholder)}
          required={required}
        />
      </div>
    </>
  );
}

export default InputLabel;
