const isValidName = (name: string) => {
  return (
    name.length <= 100 &&
    /\p{L}/u.test(name) &&
    !/[^\p{L}\p{M} .'\u2019-]/u.test(name)
  );
};

const isValidEmail = (email: string) => {
  return (
    email.length <= 254 &&
    !/[\s<>"\\]/.test(email) &&
    /^[^@]+@[^@.]+(?:\.[^@.]+)+$/.test(email)
  );
};

const isValidPhone = (phone: string) => {
  const digits = phone.replace(/[ ()-]/g, "");
  return phone.length <= 30 && !/\s/.test(digits) && /^\+?[0-9]{7,15}$/.test(digits);
};

export { isValidName, isValidEmail, isValidPhone };
