import './styles/global.css';
import { Header } from './components/layout/Header';
// import { Footer } from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main className="flex-grow bg-background">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
