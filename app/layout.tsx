import './globals.css';
import MainContainer from '../containers/Main/main';
import HeaderBar from '@/components/HeaderBar/HeaderBar';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderBar />
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
