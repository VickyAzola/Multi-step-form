import { create } from "zustand";
import type { FormRequest, Step1Data, Step2Data, Step3Data } from "../types/form";

interface CustomerPlanState {
  customerData: FormRequest;
  updateStep1: (data: Step1Data) => void;
  updateStep2: (data: Step2Data) => void;
  updateStep3: (data: Step3Data) => void;
  resetCustomerData: () => void;
}

const createInitialCustomerData = (): FormRequest => ({
  name: "",
  email: "",
  phone: "",
  plan: {
    name: "",
    amount: "",
  },
  period: "",
  addOns: [],
});

export const useCustomerPlan = create<CustomerPlanState>((set) => ({
  customerData: createInitialCustomerData(),
  updateStep1: (data) =>
    set((state) => ({
      customerData: {
        ...state.customerData,
        ...data,
      },
    })),
  updateStep2: (data) =>
    set((state) => ({
      customerData: {
        ...state.customerData,
        ...data,
      },
    })),
  updateStep3: (data) =>
    set((state) => ({
      customerData: {
        ...state.customerData,
        ...data,
      },
    })),
  resetCustomerData: () => set({ customerData: createInitialCustomerData() }),
}));
