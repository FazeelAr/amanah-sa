export interface StudyDestination {
  value: string;
  name: string;
  flag: string;
  description: string;
  institutes: string[];
}

export interface ProgramDetail {
  id: string;
  category: string;
  level: string;
  title: string;
  duration: string;
  description: string;
}

export const studyLevels: Record<string, string> = {
  undergraduate: "Undergraduate / Bachelor's",
  postgraduate: "Postgraduate / Master's",
  phd: "PhD / Doctorate",
};

export const degreePrograms: Record<string, string> = {
  "arts-humanities": "Art & Humanities",
  business: "Business & Management",
  computing: "Computing & Technology",
  engineering: "Engineering",
  healthcare: "Healthcare & Life Sciences",
  "social-sciences": "Social Sciences",
};

export const destinations: StudyDestination[] = [
  {
    value: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Home to centuries of academic prestige, accelerated 1-year Master's degrees, and a vibrant multicultural student landscape with post-study work rights.",
    institutes: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London (UCL)",
      "University of Manchester",
      "King's College London",
    ],
  },
  {
    value: "australia",
    name: "Australia",
    flag: "🇦🇺",
    description: "World-class education standards, post-graduation work opportunities, and high standard of living across global student cities.",
    institutes: [
      "University of Melbourne",
      "University of Sydney",
      "Monash University",
      "University of Queensland",
      "UNSW Sydney",
      "Australian National University",
    ],
  },
  {
    value: "canada",
    name: "Canada",
    flag: "🇨🇦",
    description: "World-renowned research institutions, progressive post-graduation work permit (PGWP) policies, and welcoming immigration pathways.",
    institutes: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "University of Waterloo",
      "University of Alberta",
      "McMaster University",
    ],
  },
  {
    value: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    description: "Globally recognized 8 state-funded universities, outstanding natural safety, research excellence, and generous post-study work visas.",
    institutes: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
      "Massey University",
      "University of Waikato",
    ],
  },
  {
    value: "europe",
    name: "Europe",
    flag: "🇪🇺",
    description: "Extensive selection of 100% English-taught degree programs, low or subsidized tuition fees across Germany, Italy, Netherlands, and France.",
    institutes: [
      "TU Delft (Netherlands)",
      "University of Amsterdam (Netherlands)",
      "KU Leuven (Belgium)",
      "Technical University of Munich (Germany)",
      "Sorbonne University (France)",
      "Politecnico di Milano (Italy)",
    ],
  },
  {
    value: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    description: "Strategic Eurasian education bridge offering affordable international tuition, high-value government scholarships, and accredited universities.",
    institutes: [
      "Koç University",
      "Bilkent University",
      "Sabancı University",
      "Istanbul University",
      "Middle East Technical University (METU)",
      "Boğaziçi University",
    ],
  },
];

export const programDetails: ProgramDetail[] = [
  {
    id: "prog-1",
    category: "computing",
    level: "postgraduate",
    title: "MSc Data Science & Artificial Intelligence",
    duration: "1 - 2 Years",
    description: "Advanced machine learning, statistical modeling, distributed systems, and real-world industrial AI application deployment.",
  },
  {
    id: "prog-2",
    category: "computing",
    level: "undergraduate",
    title: "BSc Software Engineering & Cloud Computing",
    duration: "3 - 4 Years",
    description: "Foundational software architecture, full-stack web engineering, DevOps automation, and modern scalable system design.",
  },
  {
    id: "prog-3",
    category: "business",
    level: "postgraduate",
    title: "Master of Business Administration (Global MBA)",
    duration: "1 - 2 Years",
    description: "Cross-border financial strategy, strategic leadership, disruptive innovation, and multinational enterprise management.",
  },
  {
    id: "prog-4",
    category: "business",
    level: "undergraduate",
    title: "BBA in International Finance & Banking",
    duration: "3 - 4 Years",
    description: "Quantitative analytics, corporate valuations, capital markets, risk hedging, and financial technologies.",
  },
  {
    id: "prog-5",
    category: "engineering",
    level: "postgraduate",
    title: "MSc Renewable Energy & Sustainable Infrastructure",
    duration: "1 - 2 Years",
    description: "Solar and wind energy systems, decarbonization policies, power grid transformation, and environmental impact assessments.",
  },
  {
    id: "prog-6",
    category: "engineering",
    level: "undergraduate",
    title: "BEng Mechanical & Robotics Engineering",
    duration: "4 Years",
    description: "Thermodynamics, mechatronics, autonomous robotics, CAD fabrication, and precision manufacturing systems.",
  },
  {
    id: "prog-7",
    category: "healthcare",
    level: "postgraduate",
    title: "Master of Public Health & Global Epidemiology",
    duration: "1 - 2 Years",
    description: "Biostatistics, health economics, preventative medicine, pandemic preparedness, and multinational policy implementation.",
  },
  {
    id: "prog-8",
    category: "healthcare",
    level: "undergraduate",
    title: "BSc Biomedical Sciences & Biotechnology",
    duration: "3 - 4 Years",
    description: "Genomics, cellular microbiology, clinical pharmacology, molecular pathology, and laboratory diagnostic tools.",
  },
  {
    id: "prog-9",
    category: "arts-humanities",
    level: "undergraduate",
    title: "BA Digital Media, Graphic Design & UI/UX",
    duration: "3 Years",
    description: "Interactive visual storytelling, generative digital aesthetics, typography, human-computer interaction, and creative direction.",
  },
  {
    id: "prog-10",
    category: "social-sciences",
    level: "postgraduate",
    title: "MSc International Relations & Global Diplomacy",
    duration: "1 - 2 Years",
    description: "Geopolitical conflict resolution, international trade law, human rights advocacy, and foreign affairs diplomacy.",
  },
  {
    id: "prog-11",
    category: "social-sciences",
    level: "postgraduate",
    title: "PhD in Applied Clinical Psychology & Behavioral Sciences",
    duration: "3 - 4 Years",
    description: "Doctoral research into cognitive neuroscience, mental health intervention frameworks, and advanced psychometric analysis.",
  },
];
