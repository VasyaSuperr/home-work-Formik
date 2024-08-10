import { ErrorMessage, Field, Form, Formik } from "formik";
import { LOGIN_SCHEMA } from "../../../utils/validationSchemas";
import styles from "./LoginForm.module.sass";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (value, formikBag) => {
    formikBag.resetForm();
    console.log(value);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LOGIN_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form className={styles.loginForm}>
            <div className={styles.inputWrapper}>
              <Field
                className={styles.loginFields}
                type="email"
                name="email"
                placeholder="your_mail@mail.com"
                autoFocus
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="email"
                component="span"
              />
            </div>
            <div className={styles.inputWrapper}>
              <Field
                className={styles.loginFields}
                type="password"
                name="password"
                placeholder="Enter a secure password"
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="password"
                component="span"
              />
            </div>
            <button className={styles.loginBtnSubmit} type="submit">
              LOGIN
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
