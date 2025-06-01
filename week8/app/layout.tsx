// app/layout.tsx
import { Noto_Sans_KR } from 'next/font/google';
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-kr',
});

export const metadata = {
  title: 'My App',
  description: 'My Next.js App with Noto Sans KR',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={notoSansKR.className}>{children}</body>
    </html>
  );
}