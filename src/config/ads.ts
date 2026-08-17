/**
 * TRUCK & MUSCLE - High-CPM Monetization Engine
 * Central configuration for Adsterra & Google AdSense.
 */

export interface AdSlotConfig {
  enabled: boolean;
  type: 'adsterra' | 'adsense' | 'custom' | 'demo';
  adsterraZoneId?: string;
  adsenseSlotId?: string;
  smartlinkUrl?: string;
  customHtml?: string;
}

export const ADS_CONFIG = {
  // Toggle live monetization (true = injects live ad scripts, false = demo preview)
  isLive: false,

  // Google AdSense Client ID
  googleAdsenseClientId: 'ca-pub-XXXXXXXXXXXXXXXX',

  // Adsterra Network Configuration
  adsterra: {
    enabled: true,
    // Social Bar key (high-CTR notification widget on all pages)
    socialBarKey: '',
    // Popunder key (triggers on user click / slide change, with frequency capping)
    popunderKey: '',
    // Smartlink / Direct Link for high-intent interactive buttons
    smartlinkUrl: 'https://www.highrevenuegate.com/example-smartlink',
  },

  // Ad Placement Zones
  slots: {
    // Top Leaderboard Header Banner (728x90 desktop / 320x50 mobile)
    headerLeaderboard: {
      enabled: true,
      type: 'demo',
      adsterraZoneId: '',
      adsenseSlotId: '',
    } as AdSlotConfig,

    // In-Article Top Native Slot
    inArticleTop: {
      enabled: true,
      type: 'demo',
      adsterraZoneId: '',
      adsenseSlotId: '',
    } as AdSlotConfig,

    // In-Article Middle Responsive Banner
    inArticleMiddle: {
      enabled: true,
      type: 'demo',
      adsterraZoneId: '',
      adsenseSlotId: '',
    } as AdSlotConfig,

    // High-Impression Multi-Slide Gallery Ad (Reloads on every slide click)
    gallerySlideAd: {
      enabled: true,
      type: 'demo',
      adsterraZoneId: '',
      adsenseSlotId: '',
    } as AdSlotConfig,

    // Right Sidebar Sticky Box (300x250 or 300x600)
    sidebarSticky: {
      enabled: true,
      type: 'demo',
      adsterraZoneId: '',
      adsenseSlotId: '',
    } as AdSlotConfig,

    // Mobile Bottom Sticky Banner
    mobileStickyBottom: {
      enabled: true,
      type: 'demo',
      adsterraZoneId: '',
      adsenseSlotId: '',
    } as AdSlotConfig,

    // In-Feed Native Stream Ad
    nativeStream: {
      enabled: true,
      type: 'demo',
      adsterraZoneId: '',
      adsenseSlotId: '',
    } as AdSlotConfig,
  }
};
