export interface PodcastEpisode {
  id: string;
  episodeNumber: string;
  title: string;
  description: string;
  duration: string;
  publishedAt: string;
  host: string;
  coverImage: string;
  audioUrl?: string;
}

export interface VideoDispatch {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  views: number;
  publishedAt: string;
  thumbnail: string;
  youtubeId?: string;
}

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: '1',
    episodeNumber: 'EP. 042',
    title: 'Surviving the 2026 FMCSA Roadcheck Blitz: Pre-Trip Brake Secrets',
    description: 'Veteran DOT compliance officers and 30-year owner-operators break down the top reasons trucks are placed out-of-service and how to pass Level 1 inspections clean.',
    duration: '38:15',
    publishedAt: 'August 16, 2026',
    host: 'Jack Miller & Sarah Jenkins',
    coverImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    episodeNumber: 'EP. 041',
    title: 'Detroit DD15 vs. Cummins X15: Master Mechanics Settle the Debate',
    description: 'We tear down real fleet maintenance logs to compare injector lifespans, turbo compounding reliability, and 1,000,000-mile overhaul costs.',
    duration: '45:20',
    publishedAt: 'August 09, 2026',
    host: 'Tyler Vance',
    coverImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    episodeNumber: 'EP. 040',
    title: 'Coast-to-Coast Flatbed Realities: Mountain Grades & Winter Tire Chains',
    description: 'Heavy machinery drivers discuss tackling 7% downgrades in Colorado and chaining up in blizzard conditions over Donner Pass.',
    duration: '32:40',
    publishedAt: 'August 02, 2026',
    host: 'Jack Miller',
    coverImage: 'https://images.unsplash.com/photo-1586191582056-a6021289139f?w=600&auto=format&fit=crop&q=80',
  },
];

export const FEATURED_VIDEO: VideoDispatch = {
  id: 'vid-1',
  title: 'Watch: 240,000 LB Heavy Equipment Transformer Haul Over the Rocky Mountains',
  subtitle: 'A specialized 13-axle dual-pull Peterbilt and Western Star convoy tackles steep 8% mountain grades, hairpin turns, and tight highway bridge clearances.',
  duration: '14:28',
  views: 284500,
  publishedAt: 'August 17, 2026',
  thumbnail: '/images/peterbilt_589_freedom.jpg',
};
