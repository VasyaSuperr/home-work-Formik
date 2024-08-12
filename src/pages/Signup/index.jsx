import SignupForm from "../../components/forms/SignupForm";
import styles from "./Signup.module.sass";

function Signup() {
  return (
    <div className={styles.singupContainer}>
      <h2 className={styles.signupTitle}>CREATE AN ACCOUNT</h2>
      <p className={styles.signupSubText}>
        We always keep your name and email address private
      </p>
      <SignupForm />
    </div>
  );
}

export default Signup;
