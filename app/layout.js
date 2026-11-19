import './globals.css';

export const metadata = {
  title: 'EHS Consultant | Practical Safety Solutions',
  description: 'Practical EHS consulting, safety documentation and training for safer workplaces.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
