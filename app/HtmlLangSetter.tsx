"use client";
import { useEffect } from "react";
export function HtmlLangSetter() {
  useEffect(() => {
    const browserLang = window.navigator.language?.split('-')[0] || 'es';
    document.documentElement.lang = browserLang;
  }, []);
  return null;
}
