import * as yup from "yup";

export const LOGIN_SCHEMA = yup.object({
  email: yup.string().trim().email().required(),
  password: yup
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be at most 32 characters")
    .matches(/(?=.*[A-Z])/, "Password must contain at least 1 uppercase letter")
    .matches(/(?=.*[a-z])/, "Password must contain at least 1 lowercase letter")
    .matches(/(?=.*[\d])/, "Password must contain at least 1 number")
    .matches(
      /(?=.*[!@#$%^&*])/,
      "Password must contain at least 1 special character"
    )
    .required(),
});
