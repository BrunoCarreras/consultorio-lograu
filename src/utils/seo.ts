type SeoInput = { title: string; description: string; path?: string; keywords?: string[] };

const baseUrl = 'https://consultorioslograu.com';

export function setSeo({ title, description, path = '/', keywords = [] }: SeoInput) {
  document.title = title;
  const upsert = (selector: string, attr: string, value: string) => {
    let el = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      const match = selector.match(/\[(name|property)="(.+)"\]/);
      if (match) el.setAttribute(match[1], match[2]);
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };
  upsert('meta[name="description"]', 'content', description);
  upsert('meta[name="keywords"]', 'content', keywords.join(', '));
  upsert('meta[property="og:title"]', 'content', title);
  upsert('meta[property="og:description"]', 'content', description);
  upsert('meta[property="og:type"]', 'content', 'website');
  upsert('meta[property="og:url"]', 'content', `${baseUrl}${path}`);
}
