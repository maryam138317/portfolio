'use client'
import ProSections from "@/component/sections";
import { Personal_data } from "@/utils/data";
import { useLocale, useTranslations } from "next-intl";
import { pickLocalized } from "@/lib/localized";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";

export default function About() {
    const locale = useLocale();
    const t = useTranslations('sections');
    const tButtons = useTranslations('buttons');

    const { social } = Personal_data;
    const description = pickLocalized(Personal_data.description, locale);

    return (
        <ProSections id="about" title={t('about')}>
            <div className="w-full flex flex-col gap-10 md:gap-12">
                <p className="font-body text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
                    {description}
                </p>

                <ul className="flex flex-wrap gap-4">
                    <li>
                        <Link
                            href={social.github}
                            target="_blank"
                            className="flex items-center gap-2 font-mono text-sm md:text-base border border-muted/30 rounded-full px-5 py-2.5 hover:border-mint hover:text-mint transition-colors"
                        >
                            <span>{tButtons('github')}</span>
                            <IoIosLink />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={social.linkedin}
                            target="_blank"
                            className="flex items-center gap-2 font-mono text-sm md:text-base border border-muted/30 rounded-full px-5 py-2.5 hover:border-mint hover:text-mint transition-colors"
                        >
                            <span>{tButtons('linkedin')}</span>
                            <IoIosLink />
                        </Link>
                    </li>
                </ul>
            </div>
        </ProSections>
    );
}