import { Provider } from 'react-redux';
import { LocationProvider } from './context/LocationContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <LocationProvider>
{children}
</LocationProvider>
      </body>
      
    </html>
  );
}
