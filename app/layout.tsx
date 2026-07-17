import '../styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'Monate Kona',
  description: "If it ain't MONATE, It ain't nice. South African comfort food."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-800 font-body">
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  )
}
