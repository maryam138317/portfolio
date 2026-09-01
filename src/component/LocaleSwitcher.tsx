// src/components/LocaleSwitcher.tsx
'use client';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <select
      value={locale}
      onChange={(e) => router.replace(pathname, { locale: e.target.value })}
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </select>
  );
}