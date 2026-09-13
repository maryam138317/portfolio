'use client';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { FaChevronDown } from "react-icons/fa6";

export default function LocaleSwitcher({ scrolled }: { scrolled?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="relative inline-flex items-center">
      <select
        value={locale}
        onChange={(e) => router.replace(pathname, { locale: e.target.value })}
        className={`h-9 pl-3 pr-7 rounded-full text-sm font-mono font-medium
          appearance-none cursor-pointer border shadow-sm
          transition-all duration-200 ease-out
          focus:outline-none focus:ring-2 focus:ring-offset-1
          ${scrolled
            ? 'bg-white text-black border-black/10 hover:border-black/20 hover:shadow-md focus:ring-black/20 focus:ring-offset-white'
            : 'bg-white/10 text-white border-white/25 backdrop-blur-md hover:bg-white/20 hover:border-white/40 focus:ring-white/40 focus:ring-offset-transparent'
          }`}
      >
        <option className="text-black" value="en">EN</option>
        <option className="text-black" value="fa">فا</option>
      </select>

      <FaChevronDown
        size={14}
        strokeWidth={2.5}
        className={`pointer-events-none absolute right-2.5 transition-colors duration-200
          ${scrolled ? 'text-black/50' : 'text-white/70'}`}
      />
    </div>
  );
}