import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface CardFormProps {
  title: string;
  subTitle: string;
  children: ReactNode;
}

function CardForm({ title, subTitle, children }: CardFormProps) {
  const { t } = useTranslation();
  return (
    <>
      <div className="p-6 rounded-lg bg-NeutralWhite shadow-lg">
        <h1 className="text-2xl mb-3 font-semibold text-PrimaryBlue950">
          {t(title)}
        </h1>
        <p className="text-NeutralGrey500">{t(subTitle)}</p>
        <div className="mt-6">{children}</div>
      </div>
    </>
  );
}

export default CardForm;
