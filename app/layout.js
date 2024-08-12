import { Dancing_Script, Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

export const oswald = Oswald({ subsets: ["latin"], display: "swap" });
export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s: B.Y.O.N ",
    default: "B.Y.O.N",
  },
  description: "One Stop for your Next YOLO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.className} bg-black text-n-2`}>
        <div className="max-w-[1440px] mx-auto pt-8">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
