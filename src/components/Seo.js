import { useEffect } from 'react';

/**
 * Lightweight SEO helper (no external deps).
 * - Sets document.title
 * - Ensures meta description + og tags
 * - Adds/updates a canonical link
 * - Injects JSON-LD (application/ld+json)
 */
export default function Seo({ title, description, canonical, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title;

    const head = document.head;

    const ensureMeta = (key, content, attr = 'name') => {
      if (!content) return;
      let el = head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta('description', description);
    ensureMeta('og:title', title, 'property');
    ensureMeta('og:description', description, 'property');
    ensureMeta('og:type', 'website', 'property');

    if (canonical) {
      let link = head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        head.appendChild(link);
      }
      link.setAttribute('href', canonical);
      ensureMeta('og:url', canonical, 'property');
    }

    const scriptId = 'jsonld-seo';
    let script = document.getElementById(scriptId);
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.id = scriptId;
        head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      head.removeChild(script);
    }
  }, [title, description, canonical, jsonLd]);

  return null;
}

