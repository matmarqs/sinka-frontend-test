import '@/app/ui/global.css';
import { roboto } from '@/app/ui/fonts';
import Header from '@/app/ui/header';

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {/* CONTAINER */}
        <div className="">
          {/* HEADER */}
          <Header/>
          {/* CONTENT */}
          {children}
        </div>
      </body>
    </html>
  );
}
