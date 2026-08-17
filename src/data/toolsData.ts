export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scoreType: 'peterbilt' | 'kenworth' | 'freightliner' | 'mack';
  }[];
}

export interface QuizResult {
  type: 'peterbilt' | 'kenworth' | 'freightliner' | 'mack';
  title: string;
  truckName: string;
  tagline: string;
  description: string;
  image: string;
  facebookShareText: string;
}

export const TRUCK_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Before hitting the Interstate, what is the single most important factor on your rig?',
    options: [
      { text: 'A long-nose aluminum hood, twin chrome straight pipes, and roaring Cummins power!', scoreType: 'peterbilt' },
      { text: 'Unmatched chassis glide, classic diamond-tuck leather interior, and heavy haul prestige.', scoreType: 'kenworth' },
      { text: 'Maximum aerodynamics, Detroit DD15 fuel economy, and pure fleet profitability.', scoreType: 'freightliner' },
      { text: 'Raw bulldog durability, heavy-duty vocational toughness, and American iron heritage.', scoreType: 'mack' },
    ],
  },
  {
    id: 2,
    question: 'What custom accessory is an absolute MUST on your truck?',
    options: [
      { text: 'Polished drop visor, twin 8-inch chrome stacks, and custom watermelon LED lights.', scoreType: 'peterbilt' },
      { text: 'Oversize load light bar, polished aluminum headache rack, and 8-bag air ride.', scoreType: 'kenworth' },
      { text: 'Side fairings, aero wheel covers, and intelligent predictive cruise control.', scoreType: 'freightliner' },
      { text: 'Polished gold Bulldog hood ornament, heavy brush guard, and tough rubber flaps.', scoreType: 'mack' },
    ],
  },
  {
    id: 3,
    question: 'What is your favorite highway route to haul across?',
    options: [
      { text: 'Historic Route 66 and I-40 through the Texas panhandle with the throttle wide open.', scoreType: 'peterbilt' },
      { text: 'I-80 across the snowy Rocky Mountains and Donner Pass with 80,000 lbs of heavy freight.', scoreType: 'kenworth' },
      { text: 'I-95 and I-10 coast-to-coast; racking up thousands of paid miles on high efficiency.', scoreType: 'freightliner' },
      { text: 'Tough logging backroads, oil field trails, and construction corridors in the heartland.', scoreType: 'mack' },
    ],
  },
  {
    id: 4,
    question: 'How do fellow truckers and friends describe your personality?',
    options: [
      { text: 'The old-school highway legend who takes tremendous pride in their chrome and speed.', scoreType: 'peterbilt' },
      { text: 'The master heavy-hauler who can back an oversized trailer into any tight spot blindfolded.', scoreType: 'kenworth' },
      { text: 'The smart business owner-operator who calculates every gallon of diesel and net profit.', scoreType: 'freightliner' },
      { text: 'The tough, dependable workhorse who never leaves a stranded brother on the shoulder.', scoreType: 'mack' },
    ],
  },
];

export const TRUCK_QUIZ_RESULTS: Record<string, QuizResult> = {
  peterbilt: {
    type: 'peterbilt',
    title: 'King of the Highway: Peterbilt 389',
    truckName: 'Peterbilt 389 (Cummins X15 Long-Nose)',
    tagline: 'Classic American Muscle, Chrome Stacks & Pure Highway Respect!',
    description: 'You are the pride of the highway. With twin 8-inch chrome straight pipes, a polished drop visor, and a 605 HP Cummins X15, your rig turns heads at every Petro, Flying J, and Love’s travel plaza from California to the Carolinas!',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80',
    facebookShareText: 'My trucking personality matched the legendary PETERBILT 389! Take the quiz and discover your American Big Rig match:',
  },
  kenworth: {
    type: 'kenworth',
    title: 'Heavy Haul Royalty: Kenworth W900L',
    truckName: 'Kenworth W900L Studio Sleeper',
    tagline: 'Unmatched Luxury, Heavy Haul Muscle & Diamond-Stitched Heritage!',
    description: 'You represent the gold standard of owner-operators. With the legendary 86-inch Studio Sleeper and AirGlide suspension, you conquer the steepest mountain passes with supreme comfort and heavy-haul capability.',
    image: 'https://images.unsplash.com/photo-1586191582056-a6021289139f?w=800&auto=format&fit=crop&q=80',
    facebookShareText: 'My trucking personality is the mighty KENWORTH W900L! Find out which Big Rig fits your soul:',
  },
  freightliner: {
    type: 'freightliner',
    title: 'The Million-Mile Profit Machine: Freightliner Cascadia',
    truckName: 'Freightliner Cascadia (Detroit DD15)',
    tagline: 'High Efficiency, Aerodynamic Perfection & Maximum Revenue!',
    description: 'You are a smart business strategist. With class-leading MPG, Detroit DT12 automated shifting, and predictive powertrain technology, you squeeze the maximum profit out of every single mile on the Interstate.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&auto=format&fit=crop&q=80',
    facebookShareText: 'My big rig match is the high-efficiency FREIGHTLINER CASCADIA! Check your trucking style here:',
  },
  mack: {
    type: 'mack',
    title: 'Unbreakable American Iron: Mack Anthem',
    truckName: 'Mack Anthem (MP8 Powertrain)',
    tagline: 'Tough as Nails, Vocational Strength & True Bulldog Spirit!',
    description: 'You are built tough and made to work. With the gold Bulldog proudly mounted on the hood and Mack MP8 power under the pedal, there is no job, quarry, or severe haul too rugged for you to handle.',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=800&auto=format&fit=crop&q=80',
    facebookShareText: 'I got the rugged MACK ANTHEM Bulldog! Take the Big Rig quiz and test your trucking spirit:',
  },
};

export interface ObdCode {
  code: string;
  system: string;
  name: string;
  symptoms: string;
  urgency: 'high' | 'medium' | 'low';
  solution: string;
}

export const OBD_CODES: ObdCode[] = [
  {
    code: 'P0300',
    system: 'Engine / Ignition',
    name: 'Random / Multiple Cylinder Misfire Detected',
    symptoms: 'Engine hesitation, rough idle, loss of power, raw gas smell from exhaust.',
    urgency: 'high',
    solution: 'Inspect spark plugs, ignition coil packs, wiring harness, and fuel injectors.',
  },
  {
    code: 'P0420',
    system: 'Exhaust & Emissions',
    name: 'Catalyst System Efficiency Below Threshold (Bank 1)',
    symptoms: 'Illuminated amber check engine light, slight fuel economy decrease.',
    urgency: 'medium',
    solution: 'Inspect downstream O2 sensor, catalytic converter substrate, or exhaust leaks.',
  },
  {
    code: 'P0171',
    system: 'Fuel / Air Metering',
    name: 'System Too Lean (Bank 1 - Excess Air / Insufficient Fuel)',
    symptoms: 'Stumbling on acceleration, surging idle, reduced throttle response.',
    urgency: 'medium',
    solution: 'Check for vacuum hose leaks, clean MAF sensor, or replace clogged fuel filter.',
  },
  {
    code: 'P2002',
    system: 'Diesel Emissions (DPF)',
    name: 'Diesel Particulate Filter (DPF) Efficiency Below Threshold',
    symptoms: 'Reduced engine power (limp mode), increased soot output, DPF dash icon.',
    urgency: 'high',
    solution: 'Perform highway speed active regeneration or remove filter for professional baking.',
  },
  {
    code: 'P0400',
    system: 'EGR System',
    name: 'Exhaust Gas Recirculation (EGR) Flow Malfunction',
    symptoms: 'Engine knocking at low RPM, black smoke on acceleration, rough running.',
    urgency: 'medium',
    solution: 'Clean carbon deposits from EGR valve passage or replace failed EGR actuator.',
  },
  {
    code: 'P0455',
    system: 'EVAP Emissions',
    name: 'Evaporative Emission System Leak Detected (Large Leak)',
    symptoms: 'Check engine light on with no noticeable driveability change.',
    urgency: 'low',
    solution: 'Tighten or replace the gas cap, or inspect EVAP purge/vent solenoid valves.',
  },
];
