import CardForm from "../CardForm";
import InputLabel from "../ui/InputLabel";
import Button from "../ui/Button";
import { type SubmitEvent, useState } from "react";
import { isValidEmail, isValidPhone } from "../../helpers/validations";
import type { Step1Data } from "../../types/form";


interface Step1Props {
  onSubmitStep: (data: Step1Data) => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

function Step1({ onSubmitStep }: Step1Props) {
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

     const data = new FormData(event.currentTarget);

    const stepData: Step1Data = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
    };

    const newErrors: FormErrors = {};

    if (!stepData.name) {
      newErrors.name = "validation.required";
    }

    if (!stepData.email) {
      newErrors.email = "validation.required";
    } else if (!isValidEmail(stepData.email)) {
      newErrors.email = "validation.email";
    }

    if (!stepData.phone) {
      newErrors.phone = "validation.required";
    } else if (!isValidPhone(stepData.phone)) {
      newErrors.phone = "validation.phone";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    onSubmitStep(stepData);
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardForm title="steps.step1.title" subTitle="steps.step1.description">
          <InputLabel
            type="text"
            name="name"
            label="form.name.label"
            placeholder="form.name.placeholder"
            errorMessage={errors.name}
          />
          <InputLabel
            type="email"
            name="email"
            label="form.email.label"
            placeholder="form.email.placeholder"
            errorMessage={errors.email}
          />
          <InputLabel
            type="phone"
            name="phone"
            label="form.phone.label"
            placeholder="form.phone.placeholder"
            errorMessage={errors.phone}
          />
        </CardForm>

        <footer className="fixed flex left-0  bottom-0 w-full bg-NeutralWhite p-4 justify-end">
          <Button variant="square" type="submit" text="form.buttons.next" />
        </footer>
      </form>
    </>
  );
}

export default Step1;
