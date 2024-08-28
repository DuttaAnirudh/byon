import { Dancing_Script, Oswald } from "next/font/google";
import "@/app/_styles/globals.css";

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
  icons: {
    icon: "/icon.png",
  },
};

export const revalidate = 0;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.className} bg-black text-n-2`}>
        <div className="max-w-[1440px] mx-auto pt-8">{children}</div>
      </body>
    </html>
  );
}
