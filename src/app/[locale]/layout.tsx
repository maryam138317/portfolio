// src/app/[locale]/layout.tsx
import "../globals.css"; // adjust path relative to this file
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import LocaleSwitcher from '@/component/LocaleSwitcher';
import { Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const dirByLocale: Record<string, 'ltr' | 'rtl'> = {
  en: 'ltr',
  fa: 'rtl'
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = dirByLocale[locale];

  return (
    <html lang={locale} dir={dir}>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <header>
            <LocaleSwitcher />
          </header>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}