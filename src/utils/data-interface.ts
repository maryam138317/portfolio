// src/data/data-interface.ts

import type { IconType } from "react-icons";

// A string value that has both an English and a Persian version
export type LocalizedText = {
  en: string;
  fa: string;
};

export interface NavItem {
  label: LocalizedText;
  href: string;
}

export interface Personal {
  name: LocalizedText;
  jobTitle: LocalizedText;
  description: LocalizedText;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface Skill {
  title: string; // tech/tool names stay in English regardless of locale
  icon: IconType;
}

export interface Experiance {
  title: LocalizedText;
  company: string;
  responsibility: LocalizedText;
  startDate: string;
  endDate: string; // use the literal "present" and resolve via translations, or a real date string
}

export interface Projects {
  title: LocalizedText;
  description: LocalizedText;
  techs: string[]; // tech names stay in English regardless of locale
  links: {
    github: string;
    demo: string;
  };
  image: string;
}

export interface Nav_items {
  title: string; // sourced from messages/*.json via useTranslations, not from data.ts
  href: string;
}

export interface FormInfo {
  name: LocalizedText;
  email: string;
  message: LocalizedText;
}