interface ButtonTypes {
  variant: "square" | "text";
  type: "submit" | "button";
  text: string;
  onClick: () => void;
}

function Button({ variant, type, text, onClick }: ButtonTypes) {
  const squareStyle =
    "bg-PrimaryBlue950 text-NeutralWhite py-2 px-4 rounded hover:opacity-80";
  const textStyle = "text-NeutralGrey500 py-2 px-4";

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${variant === "text" ? textStyle : squareStyle} cursor-pointer`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
