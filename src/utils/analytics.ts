/**
 * Analytics Event Tracking Utility
 *
 * Bu dosya Google Analytics 4 ve Google Ads dönüşüm takibi için event fonksiyonlarını içerir.
 * GA4 ve GTM kurulduktan sonra otomatik olarak çalışacaktır.
 *
 * Kullanım:
 * - trackPhoneClick(): Telefon tıklamalarını izler
 * - trackWhatsAppClick(): WhatsApp tıklamalarını izler
 * - trackFormSubmit(): Form gönderimlerini izler
 */

// Global gtag type declaration
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

// Event tracking fonksiyonları
export const trackPhoneClick = (location: string = 'unknown') => {
  // Console log for debugging (development)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Phone click tracked:', { location });
  }

  // Google Analytics 4 Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'contact',
      event_label: location,
      value: 1,
    });
  }

  // Google Ads Conversion (AW-XXXXXXXXX değeri Google Ads'den alınacak)
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', 'conversion', {
  //     send_to: 'AW-XXXXXXXXX/YYYYYYYYYYYY',
  //     value: 200,
  //     currency: 'TRY',
  //   });
  // }
};

export const trackWhatsAppClick = (location: string = 'unknown') => {
  // Console log for debugging (development)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] WhatsApp click tracked:', { location });
  }

  // Google Analytics 4 Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'contact',
      event_label: location,
      value: 1,
    });
  }

  // Google Ads Conversion (AW-XXXXXXXXX değeri Google Ads'den alınacak)
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', 'conversion', {
  //     send_to: 'AW-XXXXXXXXX/ZZZZZZZZZZZZ',
  //     value: 150,
  //     currency: 'TRY',
  //   });
  // }
};

export const trackFormSubmit = (formName: string = 'unknown') => {
  // Console log for debugging (development)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Form submit tracked:', { formName });
  }

  // Google Analytics 4 Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: formName,
      value: 1,
    });
  }

  // Google Ads Conversion (AW-XXXXXXXXX değeri Google Ads'den alınacak)
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', 'conversion', {
  //     send_to: 'AW-XXXXXXXXX/WWWWWWWWWWWW',
  //     value: 300,
  //     currency: 'TRY',
  //   });
  // }
};

export const trackPageView = (pageName: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Page view tracked:', { pageName });
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
    });
  }
};
