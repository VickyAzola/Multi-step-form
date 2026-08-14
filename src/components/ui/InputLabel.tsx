import { useTranslation } from "react-i18next";

interface InputLabelTypes {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  errorMessage?: string;
  defaultValue?: string;
}

function InputLabel({
  type,
  name,
  label,
  placeholder,
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
            <p className="text-sm md:text-base text-PrimaryRed500">{t(errorMessage)}</p>
          )}
        </div>
        <input
          id={name}
          type={type}
          name={name}
          defaultValue={defaultValue}
          className={`${errorMessage ? "border-PrimaryRed500" : "border-NeutralGrey500/80"} border mt-1 rounded-lg px-3 py-2`}
          placeholder={t(placeholder)}
        />
      </div>
    </>
  );
}

export default InputLabel;
