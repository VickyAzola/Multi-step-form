const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPhone = (phone: string) => {
  return /^[0-9+\s()-]{7,20}$/.test(phone);
};

export { isValidEmail, isValidPhone };
