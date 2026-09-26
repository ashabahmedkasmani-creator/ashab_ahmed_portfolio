import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Ashab Ahmed Kasmani — Full Stack Developer",
  description: "Premium developer portfolio of Ashab Ahmed Kasmani."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider><Navigation />{children}</ThemeProvider></body></html>;
}