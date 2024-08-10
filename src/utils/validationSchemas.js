import * as yup from "yup";

export const LOGIN_SCHEMA = yup.object({
  email: yup.string().trim().email().required(),
  password: yup
    .string()
    .trim()
    .min(8)
    .max(32)
    .matches(/(?=.*[A-Z])/, "Password must contain at least 1 A-Z")
    .matches(/(?=.*[a-z])/, "Password must contain at least 1 a-z")
    .required(),
});
