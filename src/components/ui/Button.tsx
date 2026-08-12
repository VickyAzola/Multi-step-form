import { useTranslation } from "react-i18next";

interface ButtonTypes {
  variant: "square" | "text";
  type: "submit" | "button";
  text: string;
  onClick?: () => void;
}

function Button({ variant, type, text, onClick }: ButtonTypes) {
  const { t } = useTranslation();

  const squareStyle = `${text == "form.buttons.confirm" ? " bg-PrimaryPurple600" : " bg-PrimaryBlue950"} text-NeutralWhite py-2 px-4 rounded hover:opacity-80`;
  const textStyle = "text-NeutralGrey500 py-2 px-4";

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${variant === "text" ? textStyle : squareStyle} cursor-pointer`}
      >
        {t(text)}
      </button>
    </>
  );
}

export default Button;
