import { ClerkProvider } from '@clerk/nextjs'
// import {dark} from "@clerk/themes";

import { Inter } from 'next/font/google';

import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uber India',
  description: 'Earn Money by Driving or Get a Ride Now',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme:light)',
        url: '/uber-favicon.png',
        href: '/uber-favicon.png',
      },
      {
        media: '(prefers-color-scheme:dark)',
        url: '/uber-favicon.png',
        href: '/uber-favicon.png',
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    //  appearance={{
    //     baseTheme: dark
    //   }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="uber-theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>

  )
}
