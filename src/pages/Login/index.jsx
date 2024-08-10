import LoginForm from "../../components/forms/LoginForm";
import styles from "./Login.module.sass";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>LOGIN TO YOUR ACCOUNT</h2>
      <LoginForm />
    </div>
  );
}

export default Login;
