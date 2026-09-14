// src/lib/localized.ts
export type LocalizedText = {
  en: string;
  fa: string;
};

export function pickLocalized(value: LocalizedText, locale: string): string {
  return locale === 'fa' ? value.fa : value.en;
}