export interface SlideItem {
  number: number;
  title: string;
  subtitle: string;
  image: string;
  specs: { label: string; value: string }[];
  description: string;
}

export interface ListicleGallery {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  totalSlides: number;
  views: number;
  slides: SlideItem[];
}

export const LISTICLES: ListicleGallery[] = [
  {
    id: '1',
    slug: 'top-10-most-powerful-american-semi-trucks-ever-built',
    title: 'Top 10 Most Powerful American Big Rigs Ever Built (Ranked by Raw Torque)',
    subtitle: 'From the 605 HP Cummins X15 to the legendary 600 HP Caterpillar 3406E King of the Hill and classic Mack V8s.',
    coverImage: '/images/peterbilt_589_freedom.jpg',
    author: {
      name: 'Jack Miller',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
      role: 'Senior Heavy-Haul Analyst',
    },
    publishedAt: 'August 17, 2026',
    totalSlides: 10,
    views: 124500,
    slides: [
      {
        number: 1,
        title: 'Peterbilt 389 / 589 (Cummins X15 Performance)',
        subtitle: '605 HP / 2,050 lb-ft Torque',
        image: '/images/peterbilt_589_freedom.jpg',
        specs: [
          { label: 'Displacement', value: '14.9L Inline-6 Turbo Diesel' },
          { label: 'Max Torque', value: '2,050 lb-ft @ 1,150 RPM' },
          { label: 'Max GVWR', value: '80,000+ lbs Class 8' },
        ],
        description: 'The reigning king of modern owner-operators. With the 15-liter Cummins X15 cranking out 605 horsepower and 2,050 lb-ft of torque, the long-nose Peterbilt effortlessly pulls heavy oversize equipment up 7% mountain grades.',
      },
      {
        number: 2,
        title: 'Kenworth W900L (Caterpillar C16 / C15 King of the Hill)',
        subtitle: '600 HP / 2,050 lb-ft Torque',
        image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=1000&auto=format&fit=crop&q=80',
        specs: [
          { label: 'Displacement', value: '15.8L CAT C16 Turbo Diesel' },
          { label: 'Max Torque', value: '2,050 lb-ft @ 1,200 RPM' },
          { label: 'Signature Trait', value: 'Dual 8-inch Dynaflex Chrome Stacks' },
        ],
        description: 'Before emissions mandates, the Caterpillar C16 and 3406E reigned supreme under the long hood of the Kenworth W900L. Known as the "Yellow Motor", it delivers relentless low-end grunt.',
      },
      {
        number: 3,
        title: 'Mack Super-Liner (3408 V8 Diesel Legend)',
        subtitle: '500+ HP V8 / 1,850 lb-ft Torque',
        image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=1000&auto=format&fit=crop&q=80',
        specs: [
          { label: 'Displacement', value: '16.4L Turbocharged V8' },
          { label: 'Transmission', value: 'Mack Maxitorque 12-Speed' },
          { label: 'Status', value: 'Rare Heavy Haul Collector Legend' },
        ],
        description: 'Mack’s legendary V8 Super-Liner was built for extreme logging and Australian road trains. Its thunderous twin-turbo V8 exhaust note remains an absolute benchmark in trucking lore.',
      },
      {
        number: 4,
        title: 'Western Star 49X (Detroit DD16 Powerhouse)',
        subtitle: '600 HP / 2,050 lb-ft Torque',
        image: 'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=1000&auto=format&fit=crop&q=80',
        specs: [
          { label: 'Displacement', value: '15.6L Detroit DD16' },
          { label: 'Braking Power', value: '675 HP Jacobs Engine Brake' },
          { label: 'Application', value: 'Severe-Duty Oil Field & Heavy Timber' },
        ],
        description: 'Engineered specifically for heavy vocational and oversized transport, the 49X pairs the DD16 with a reinforced steel cab and dual external air cleaners to survive the harshest job sites on earth.',
      },
      {
        number: 5,
        title: 'Freightliner Cascadia (Detroit DD15 Gen 5)',
        subtitle: '505 HP / 1,850 lb-ft Torque (Maximum Highway Efficiency)',
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1000&auto=format&fit=crop&q=80',
        specs: [
          { label: 'Displacement', value: '14.8L Detroit DD15' },
          { label: 'Fuel Economy', value: 'Up to 9.5+ MPG Fleet Avg' },
          { label: 'Transmission', value: 'Detroit DT12 Direct Drive' },
        ],
        description: 'While it lacks traditional long-hood chrome, the Cascadia is an engineering marvel. It dominates US interstate freight lanes with integrated Detroit powertrain efficiency and predictive cruise control.',
      },
      {
        number: 6,
        title: 'International LoneStar (Cummins X15 Efficiency Series)',
        subtitle: '565 HP / 1,850 lb-ft Torque',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1000&auto=format&fit=crop&q=80',
        specs: [
          { label: 'Design Theme', value: '1930s Art-Deco Retro Grille' },
          { label: 'Front Axle Rating', value: 'Up to 14,600 lbs' },
          { label: 'Sleeper Size', value: '73-inch Sky-Rise Sleeper' },
        ],
        description: 'With its bold Harley-Davidson inspired art-deco front grille and curved fenders, the LoneStar turns heads at every truck stop between Los Angeles and Chicago.',
      },
      {
        number: 7,
        title: 'Peterbilt 379 Extended Hood (EXHD CAT 3406E)',
        subtitle: '550 HP / 1,850 lb-ft Torque',
        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=1000&auto=format&fit=crop&q=80',
        specs: [
          { label: 'Bumper-to-Back-Cab', value: '127-inch BBC Extended Hood' },
          { label: 'Engine Family', value: 'Caterpillar 3406E 5EK Block' },
          { label: 'Legacy', value: 'Most Celebrated Show Truck in US History' },
        ],
        description: 'Produced from 1987 to 2007, the 379 EXHD is the undisputed holy grail of American custom trucking. Its square-shouldered aluminum cab and raw mechanical reliability remain unmatched.',
      },
      {
        number: 8,
        title: 'Kenworth T680 Next Gen (PACCAR MX-13)',
        subtitle: '510 HP / 1,850 lb-ft Torque',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1000&auto=format&fit=crop&q=80',
        specs: [
          { label: 'Aero Advantage', value: '6% Better Fuel Economy vs Prior Gen' },
          { label: 'Display', value: '15-inch High-Definition Digital Dash' },
          { label: 'Sleeper', value: '76-inch High-Roof Aerodyne' },
        ],
        description: 'Kenworth’s high-tech answer for the modern linehaul carrier. Featuring narrow A-pillars, sculpted aerodynamic mirrors, and a fully customizable digital instrument cluster.',
      },
      {
        number: 9,
        title: 'Mack Anthem (MP8 505C Turbo Compound)',
        subtitle: '505 HP / 1,860 lb-ft Torque',
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1000&auto=format&fit=crop&q=80',
        specs: [
          { label: 'Engine Tech', value: 'Waste Heat Turbo Compounding' },
          { label: 'Transmission', value: 'mDRIVE HD 13/14-Speed' },
          { label: 'Hood Design', value: 'Chiseled 3-Piece Breakaway Hood' },
        ],
        description: 'Mack’s muscular highway flagship captures waste exhaust gas heat to put 50 extra horsepower directly back into the crankshaft, slashing diesel consumption on steep rolling hills.',
      },
      {
        number: 10,
        title: 'Volvo VNL 860 (D13TC Turbo Compound)',
        subtitle: '455 HP / 1,850 lb-ft Torque @ 900 RPM',
        image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=1000&auto=format&fit=crop&q=80',
        specs: [
          { label: 'Torque Band', value: 'Peak Torque from 900 to 1,300 RPM' },
          { label: 'Safety Suite', value: 'Volvo Active Driver Assist 2.0' },
          { label: 'Sleeper Living', value: '77-inch High-Roof Globetrotter Suite' },
        ],
        description: 'Downspeeding at its absolute finest. The VNL 860 cruises at 65 MPH at barely 1,050 RPM, delivering over 10 MPG while providing drivers with the safest cab cell in commercial transportation.',
      },
    ],
  },
];
