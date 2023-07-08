import './globals.css'
import { Inter } from 'next/font/google'
import MainContainer from "../containers/Main/main";
import HeaderBar from "@/components/HeaderBar/HeaderBar";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <>
            {children}
        </>
    </html>
  )
}
