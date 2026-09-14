import localFont from 'next/font/local';

export const bNazanin = localFont({
  src: [
    {
      path: './BNazanin.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './BNaznnBd.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-persian',
  display: 'swap',
});