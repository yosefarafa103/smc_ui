import "./globals.css";
import { Poppins } from "next/font/google"
const poppins = Poppins({
  weight: ['400', '700', "900"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
