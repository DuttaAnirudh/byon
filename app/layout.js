import { Dancing_Script, Inter, Oswald } from "next/font/google";
import "./globals.css";

export const oswald = Oswald({ subsets: ["latin"], display: "swap" });
export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "B.Y.O.N",
  description: "One Stop for your Next YOLO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.className} bg-black text-n-2`}>
        <div className="max-w-[1440px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
