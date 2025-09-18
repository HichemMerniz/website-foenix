import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

// Can be imported from a shared config
const locales = ['en', 'fr', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  console.log('i18n request config - received locale:', locale);
  
  // If locale is undefined, extract it from the URL
  if (!locale) {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || headersList.get('x-url') || '';
    console.log('Extracting locale from pathname:', pathname);
    
    // Extract locale from pathname
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && locales.includes(segments[0])) {
      locale = segments[0];
      console.log('Extracted locale from URL:', locale);
    } else {
      locale = 'en'; // Default to English
      console.log('No locale found in URL, defaulting to en');
    }
  }
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    console.log('Invalid locale, defaulting to en');
    locale = 'en'; // Default to English if invalid locale
  }

  console.log('Loading messages for locale:', locale);

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});
