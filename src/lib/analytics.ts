import { track } from '@vercel/analytics';

export const trackEvent = (
  action: string,
  {
    event_category = 'engagement',
    event_label,
    value,
    location,
  }: {
    event_category?: string;
    event_label?: string;
    value?: number;
    location?: string;
  } = {}
) => {
  // Vercel Analytics
  if (typeof window !== 'undefined') {
    const properties: Record<string, string | number> = {
      category: event_category,
    };
    
    if (event_label) properties.label = event_label;
    if (value) properties.value = value;
    if (location) properties.location = location;
    
    track(action, properties);
  }

  // Additional tracking for enhanced analytics
  if (process.env.NODE_ENV === 'development') {
    console.log('Event tracked:', {
      action,
      category: event_category,
      label: event_label,
      value,
      location,
    });
  }
};

export const trackCTAClick = (location: string, text: string) => {
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: text,
    location,
  });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
  });
};

export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submission', {
    event_category: 'conversion',
    event_label: formType,
  });
};

export const trackPageView = (pagePath: string) => {
  trackEvent('page_view', {
    event_category: 'navigation',
    event_label: pagePath,
  });
};

export const trackScroll = (percentage: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    value: percentage,
  });
};