import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Kanit } from "next/font/google";
import "react-vertical-timeline-component/style.min.css";

const kanit = Kanit({
  subsets: ["latin", "latin-ext", "thai", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Edwin ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
