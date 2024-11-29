"use client"

import styles from "./topBar.module.css"
import { SignedIn, UserButton } from "@clerk/nextjs"

export const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <h2 className={styles.logoLiteral}>Evaluation Tool</h2>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.language}>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  )
}
