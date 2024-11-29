import { SignIn } from "@clerk/nextjs"
import styles from "../../styles/index.module.css"

const SignInComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Inicia sesión en Evaluation <span className={styles.mark}> Tool</span>
      </h1>
      <SignIn routing="hash" />
    </div>
  )
}

export { SignInComponent }
