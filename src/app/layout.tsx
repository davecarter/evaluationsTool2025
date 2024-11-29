import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import "./globals.css"
import { SignInComponent } from "./components/sign-in/SignInComponent"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header></header>
          <main>
            <SignedOut>
              <SignInComponent />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
