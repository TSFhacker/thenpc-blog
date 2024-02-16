import "./globals.css";
import MainNavigation from "@/components/layout/main-navigation";

export const revalidate = 1800;

export const metadata = {
  title: "The blog of Dung Bui",
  description:
    "This is the blog where I write about my journey on coding and self development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MainNavigation />
      {children}
    </html>
  );
}
