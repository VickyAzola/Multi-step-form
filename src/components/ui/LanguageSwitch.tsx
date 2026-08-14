import { useTranslation } from "react-i18next";

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language.startsWith("es") ? "es" : "en";

  const switchLanguage = (language: "en" | "es") => {
    void i18n.changeLanguage(language);
  };

  const buttonBase =
    "min-w-10 rounded-full px-2 py-1 text-xs font-semibold tracking-[0.2em] transition-all cursor-pointer";

  return (
    <div className="inline-flex items-center rounded-full border border-white/25 bg-PrimaryPurple600 p-1 shadow-lg backdrop-blur-sm ">
      <button
        type="button"
        onClick={() => switchLanguage("en")}
        aria-pressed={currentLanguage === "en"}
        className={`${buttonBase} ${
          currentLanguage === "en"
            ? "bg-NeutralWhite text-PrimaryBlue950"
            : "text-NeutralWhite/80 hover:text-NeutralWhite"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchLanguage("es")}
        aria-pressed={currentLanguage === "es"}
        className={`${buttonBase} ${
          currentLanguage === "es"
            ? "bg-NeutralWhite text-PrimaryBlue950"
            : "text-NeutralWhite/80 hover:text-NeutralWhite"
        }`}
      >
        ES
      </button>
    </div>
  );
}

export default LanguageSwitch;
