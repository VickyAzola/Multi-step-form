import { create } from 'zustand'

export const useCustomerPlan = create((set) => ({
    customerData: { name: "",
    email: "",
    phone: "",
    plan: {
      name: "",
      amount: "",
    },
    period: "",
    addOns: [],}
}))  
