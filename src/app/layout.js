import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { UserProvider } from "./contexts/UserContext";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme radius="medium">
          <UserProvider>
            {children}
          </UserProvider>
        </Theme>
      </body>
    </html>
  )
}
