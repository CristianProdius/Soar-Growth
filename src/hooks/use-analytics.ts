import { track } from '@vercel/analytics';

export const useAnalytics = () => {
  const trackCTAClick = (location: string) => {
    track('cta_click', {
      location,
      action: 'book_consultation'
    });
  };

  const trackSectionView = (section: string) => {
    track('section_view', {
      section
    });
  };

  const trackConversion = (source: string) => {
    track('conversion', {
      action: 'booking_initiated',
      source
    });
  };

  return {
    trackCTAClick,
    trackSectionView,
    trackConversion
  };
};