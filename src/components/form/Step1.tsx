import CardForm from "../CardForm";
import InputLabel from "../ui/InputLabel";

function Step1() {
  return (
    <>
      <CardForm title="steps.step1.title" subTitle="steps.step1.description">
        <form>
          <InputLabel
            type="text"
            name="name"
            label="form.name.label"
            placeholder="form.name.placeholder"
          />
          <InputLabel
            type="email"
            name="email"
            label="form.email.label"
            placeholder="form.email.placeholder"
          />
          <InputLabel
            type="phone"
            name="phone"
            label="form.phone.label"
            placeholder="form.phone.placeholder"
          />
        </form>
      </CardForm>
    </>
  );
}

export default Step1;
