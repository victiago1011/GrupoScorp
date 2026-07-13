import type {Metadata} from 'next';
import {Inter, Manrope} from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Grupo Scorp | Tecnologia e Inteligência de Negócios',
  description: 'Desenvolvemos sites, automações e painéis de dados sob medida para impulsionar seus resultados.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-background text-on-surface font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

