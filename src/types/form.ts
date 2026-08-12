enum Periods {
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

enum Plans {
  ARCADE = "arcade",
  ADVANCED = "advanced",
  PRO = "pro",
}

interface Plan {
  name: string;
  amount: string;
}

interface AddOns {
  id: string;
  label: string;
  amount: string;
}

interface Step1Data {
  name: string;
  email: string;
  phone: string;
}

interface Step2Data {
  plan: Plan;
  period: string;
}

interface Step3Data {
  addOns: AddOns[];
}

interface FormRequest extends Step1Data, Step2Data, Step3Data {}

export {Periods, Plans}
export type { FormRequest, Step1Data, Step2Data, Step3Data, Plan, AddOns };
