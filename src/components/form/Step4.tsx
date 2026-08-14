import { capitalize } from "../../helpers/textTransform";
import { Periods, type FormRequest } from "../../types/form";
import CardForm from "../CardForm";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";

interface Step4Types {
  formData: FormRequest;
  handlePrevStep: () => void;
  onConfirm: () => void;
}

function Step4({ formData, handlePrevStep, onConfirm }: Step4Types) {
  const { t } = useTranslation();

  const periodFull =
    formData.period === Periods.MONTHLY ? t("plans.month") : t("plans.year");
  const periodAcronym =
    formData.period === Periods.MONTHLY ? t("plans.mo") : t("plans.yr");

  const addOnsTotal = formData.addOns.reduce(
    (total, item) => total + Number(item.amount),
    0,
  );

  const total = Number(formData.plan.amount) + addOnsTotal;
  return (
    <>
      <CardForm title="steps.step4.title" subTitle="steps.step4.description">
        <div className="bg-NeutralBlue50 p-4 rounded-lg ">
          <div className="flex justify-between items-center border-b border-NeutralGrey500 pb-3">
            <div>
              <p className="text-PrimaryBlue950 font-semibold">
                {capitalize(formData.plan.name)} ({capitalize(formData.period)})
              </p>
              <button className="text-NeutralGrey500 underline text-sm">
                {t("summary.change")}
              </button>
            </div>
            <p className="text-PrimaryBlue950 font-semibold">
              ${formData.plan.amount}/{periodAcronym}
            </p>
          </div>

          {formData.addOns.map((item) => (
            <div
              key={item.label}
              className="flex justify-between items-center py-2"
            >
              <p className="text-NeutralGrey500">{t(item.label)}</p>
              <p className="text-PrimaryBlue950">
                +${item.amount}/{periodAcronym}
              </p>
            </div>
          ))}
        </div>

        <div className="px-2 pt-5 pb-1 flex justify-between items-center">
          <p className="text-NeutralGrey500">
            {t("summary.total")} ({t("summary.billing", { period: periodFull })}
            )
          </p>
          <p className="text-PrimaryPurple600 font-semibold md:text-lg">
            +${total}/{periodAcronym}
          </p>
        </div>
      </CardForm>

      <footer className="fixed  md:absolute flex left-0 bottom-0 w-full bg-NeutralWhite p-4 justify-between">
        <Button
          variant="text"
          type="button"
          text="form.buttons.back"
          onClick={handlePrevStep}
        />

        <Button
          variant="square"
          type="button"
          text="form.buttons.confirm"
          onClick={onConfirm}
        />
      </footer>
    </>
  );
}

export default Step4;
