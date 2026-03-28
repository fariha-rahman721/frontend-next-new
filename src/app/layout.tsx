// app/layout.tsx

import { AIChatbot } from "./Components/AIChatbot";
import { Footer } from "./Components/Footer";
import NavbarWrapper from "./Components/Navwrapper";
import "./globals.css";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* Navbar inside <body> */}
        <NavbarWrapper></NavbarWrapper>
        {children}
        <AIChatbot></AIChatbot>
        <Footer></Footer>
      </body>
    </html>
  );
}