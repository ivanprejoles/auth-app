const validateRegistration = (name, email, password) => {
  if (!name || !email || !password) {
    return { isValid: false, message: "All fields are required" };
  }

  if (password.length < 6) {
    return {
      isValid: false,
      message: "Password must be at least 6 characters long",
    };
  }

  return { isValid: true };
};

const validateLogin = (email, password) => {
  if (!email || !password) {
    return { isValid: false, message: "Email and password are required" };
  }

  return { isValid: true };
};

export { validateRegistration, validateLogin };
