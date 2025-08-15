import { useEffect, useState } from 'react';

const STORAGE_KEY = 'site_lang';
const DEFAULT_LANG = 'en';
export const SUPPORTED_LANGS = ['en', 'es'];

export const getLang = () => {
  try {
    const stored = typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
    if (typeof navigator !== 'undefined') {
      const n = (navigator.language || 'en').slice(0, 2).toLowerCase();
      if (SUPPORTED_LANGS.includes(n)) return n;
    }
  } catch {}
  return DEFAULT_LANG;
};

export const setLang = (lang) => {
  const next = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next);
      window.dispatchEvent(new CustomEvent('site:lang', { detail: next }));
    }
  } catch {}
  return next;
};

export const onLangChange = (handler) => {
  const fn = (e) => handler(e.detail);
  if (typeof window !== 'undefined') {
    window.addEventListener('site:lang', fn);
  }
  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('site:lang', fn);
    }
  };
};

// Simple React hook to bind to global language
export const useLang = () => {
  const [lang, set] = useState(getLang());
  useEffect(() => onLangChange(set), []);
  return [lang, (l) => set(setLang(l))];
};
