# Website Structure, Components, & Content Specification Blueprint

> **Target Codebase**: Pace Setter International (Study Abroad & Global Education Consultancy)  
> **Replication Guide**: This document details every single page, component, data model, styling token, and content block to enable 100% faithful replication on a new website under different ownership and branding.

---

## 1. Technical Stack & Architecture

### Core Technologies
- **Framework**: Next.js 16 (App Router)
- **Runtime & UI**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`, CSS variable-driven design tokens)
- **Animations**: Framer Motion (`framer-motion`)
- **Iconography**: Lucide React (`lucide-react`)
- **Utility Helpers**: `clsx`, `tailwind-merge`

### Global Design System & Theme Tokens
Extracted from `app/globals.css` and `DESIGN.md`:

| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| `--primary` | `#032B5A` | Deep Royal Navy Blue (Prestige, Authority, Trust) |
| `--primary-light` | `#0A427E` | Royal Navy (Hover states, subtle borders) |
| `--primary-dark` | `#021A37` | Midnight Navy (Deep card backgrounds, contrast) |
| `--secondary` | `#0284C7` | Ocean Blue (Innovation, connectivity) |
| `--secondary-light`| `#38BDF8` | Sky Blue (Highlights, subtle gradients) |
| `--accent` | `#16A34A` | Vibrant Emerald Green (Growth, Action, Approvals) |
| `--accent-light` | `#22C55E` | Fresh Emerald (Hover highlights) |
| `--accent-dark` | `#15803D` | Deep Emerald |
| `--background` | `#FFFFFF` | Base Clean White |
| `--bg-soft` | `#F8FAFC` | Slate Soft Background for alternating sections |
| `--text-dark` | `#0B1B2B` | Deep Navy Charcoal for high-contrast typography |

- **Typography**: Inter (Google Fonts Latin subset), tight tracking on headings, 1.6 line height on body.
- **Layout Max Width**: `max-w-6xl` (`1152px`) centered with `px-6 md:px-8`.
- **Standard Section Padding**: `py-8 md:py-10 lg:py-12` (`.section-padding`).
- **Button Standards**:
  - Rounded pill shape (`rounded-full`).
  - Font weight: Bold/Black, uppercase tracking.
  - Active scale micro-interaction (`active:scale-95`).

---

## 2. Global Site Architecture & Route Map

```
app/
├── layout.tsx                     # Global Root Layout (Fonts, Navbar, Footer, Metadata)
├── globals.css                    # Tailwind v4 token definitions & base utilities
├── page.tsx                       # [Page 1] Home Page
├── about/page.tsx                 # [Page 2] About Us Page
├── services/page.tsx              # [Page 3] Services Page
├── study-destinations/page.tsx    # [Page 4] Study Destinations Catalog
├── destination/detail/page.tsx    # [Page 5] Filtered Program & Destination Matches
├── how-it-works/page.tsx          # [Page 6] Process & Timeline Walkthrough
├── events/page.tsx                # [Page 7] Expos, Webinars & Workshops
├── blog/page.tsx                  # [Page 8] Articles, Guides & Downloadable Resources
├── faqs/page.tsx                  # [Page 9] Comprehensive Knowledge Base & Q&A
└── contact/page.tsx               # [Page 10] Contact & WhatsApp Assessment Form
```

---

## 3. Persistent Layout Components

### 3.1 Root Layout (`app/layout.tsx`)
- **Metadata**:
  - `title`: `"{Brand Name} | Global Education & Study Abroad Consultancy"`
  - `description`: `"{Brand Name} guides students through international education, visa processing, and career planning with expert support."`
  - `applicationName`: `"{Brand Name}"`
  - Icons: Rounded favicon (`/pacesetter_tab_icon_rounded.png`)
  - OpenGraph & Twitter Cards: `summary_large_image`
- **Shell Structure**:
  - Injects `Inter` font on `<body>`.
  - Renders sticky `<Navbar />` at top.
  - Wraps children in `<main className="relative">`.
  - Renders `<Footer />` at bottom.

---

### 3.2 Navigation Bar (`components/Navbar.tsx`)
A responsive, adaptive sticky header.

#### Logic & Behaviors
- **Scroll Detection**: Listens to `window.scrollY > 20`.
- **Dynamic Appearance**:
  - On the **Homepage Desktop View**: Starts completely transparent (`bg-transparent text-white border-transparent`) when at top of hero; smoothly transitions to solid white frosted glass (`bg-white/95 border-b border-slate-200 shadow-lg text-primary`) upon scrolling.
  - On **All Other Pages & Mobile**: Always renders solid white background with crisp contrast.
- **Mobile Drawer**: Animated slide/fade overlay powered by Framer Motion, locks `document.body.style.overflow = 'hidden'` when opened.

#### Navigation Links
1. Home (`/`)
2. Services (`/services`)
3. How It Works (`/how-it-works`)
4. Destinations (`/study-destinations`)
5. FAQs (`/faqs`)
6. About Us (`/about`)
7. Contact (`/contact`)

#### Action Elements
- **Logo Block**: Brand icon (square rounded badge, hover rotation) + Brand title (Bold Primary) + Subtitle (Emerald Accent tracking).
- **Desktop Pill Menu**: Centered rounded capsule with active pill state.
- **CTA Button**: Pill button `"Apply Now"` (links to `/contact`).
- **Mobile Menu Overlay**:
  - Header: Global icon + Brand name + Close button (`X`).
  - Nav items: Large bold uppercase links with sliding hover indicator (`ChevronRight`).
  - Bottom bar: `"Get Free Consultation"` CTA button + City/Country badge + Copyright statement.

---

### 3.3 Global Footer (`components/Footer.tsx`)
A rich 4-column navy blue (`bg-primary`) footer with ambient green backdrop blur orb.

#### Column Breakdown
- **Column 1: Brand & Mission**
  - Brand Logo + Brand Name + Slogan: `"Guiding Your Journey, Building Your Future"`.
  - Mission Statement: *"Empowering students to achieve their global academic and career aspirations through expert guidance and personalized solutions."*
  - Social Media Links: Facebook, Twitter/X, LinkedIn, Instagram with hover elevational micro-animations.
- **Column 2: Quick Navigation**
  - Links: Home (`/`), Services (`/services`), About Us (`/about`), Contact (`/contact`).
  - Interactive bullet dots that illuminate on hover.
- **Column 3: Our Focus**
  - Core Practice Areas: Student Visa Support, Global Admissions, Career Strategy, Scholarship Access.
- **Column 4: Direct Support (Brand Parameterized)**
  - Physical Address: Map pin icon + physical office location.
  - Direct Phone / WhatsApp: Phone icon + formatted number + green `"WhatsApp"` pill badge (links to `https://wa.me/{phone}`).
  - Direct Email: Mail icon + support email address.
- **Bottom Bar**:
  - Copyright: `© {Year} {Brand Name}. Designed for Global Success.`
  - Legal Links: Privacy Policy (`#`), Terms of Service (`#`).

---

## 4. Reusable Components & Data Structures

### 4.1 Data Layer (`lib/study-data.ts`)

#### Study Levels (`studyLevels`)
- `undergraduate`: `"Undergraduate / Bachelor's"`
- `postgraduate`: `"Postgraduate / Master's"`
- `phd`: `"PhD / Doctorate"`

#### Degree Categories (`degreePrograms`)
- `arts-humanities`: `"Art & Humanities"`
- `business`: `"Business & Management"`
- `computing`: `"Computing & Technology"`
- `engineering`: `"Engineering"`
- `healthcare`: `"Healthcare & Life Sciences"`
- `social-sciences`: `"Social Sciences"`

#### Study Destinations (`destinations`)
Each record has `value`, `name`, `flag`, `description`, and `institutes`:
1. **United Kingdom** (`🇬🇧`): Oxford, Cambridge, Imperial College London, UCL, Manchester.
2. **Australia** (`🇦🇺`): Melbourne, Sydney, Monash, Queensland, UNSW Sydney.
3. **Canada** (`🇨🇦`): Toronto, UBC, McGill, Waterloo, Alberta.
4. **New Zealand** (`🇳🇿`): Auckland, Otago, Victoria Wellington, Canterbury, Massey.
5. **Europe** (`🇪🇺`): TU Delft, Amsterdam, KU Leuven, TU Munich, Sorbonne.
6. **Turkey** (`🇹🇷`): Koç, Bilkent, Sabancı, Istanbul, Middle East Technical University.

#### Program Details Catalog (`programDetails`)
11 foundational programs spanning categories (e.g. *Art, Design & Creative Practice*, *Data Science & AI*, *Renewable Energy*, *Biomedical Sciences*, etc.) with durations ranging from 1 to 4 years.

---

### 4.2 Hero Component (`components/Hero.tsx`)
A high-converting hero section with an embedded interactive program finder.
- **Background**: Deep Navy with radial gradient and semi-transparent student imagery.
- **Left Column**:
  - Credibility Badge: `"Rated #1 Consultancy in {Country}"`.
  - Main Heading: *"Guiding Your Journey, Building Your Future."* (Emerald accent underlines).
  - Subtitle: Narrative on empowering students and professionals on the global stage.
  - Action Buttons: `"Explore Services"` (Accent green pill) & `"Our Story"` (Transparent outline pill).
  - Quick Counters: `500+ Universities`, `99% Visa Success`, `10+ Years Exp`.
- **Right Column (Course Finder Card)**:
  - Form action sends inputs via `URLSearchParams` to `/destination/detail`.
  - Field 1: Degree Program dropdown (required).
  - Field 2: Education Level dropdown (required).
  - Field 3: Study Destination dropdown with country flags (required).
  - Submit Button: `"Explore programs →"` (Emerald accent).

---

### 4.3 Service Card (`components/ServiceCard.tsx`)
- **Card Features**:
  - Top image preview with dark navy gradient overlay.
  - Floating top-left icon box (frosted glass).
  - Corner brand watermark: `"{BRAND} SERVICE"`.
  - Bottom panel: Title, summary text, and right arrow circle hover trigger.
  - Whole card links to `/contact`.

---

### 4.4 Why Choose Us (`components/WhyChooseUs.tsx`)
- **Interactive Counters**: Uses a custom `Counter` component built on `requestAnimationFrame` counting from 0 to target number over 2 seconds.
- **Metrics Grid**:
  1. `22+` Years of Experience
  2. `100K+` Students Guided
  3. `65+` Study Destinations
  4. `500+` University Partners
  5. `15+` Global Offices
  6. `95%` Success Rate
- **Highlight Cards Grid**:
  - `🎯 Personalized Approach`: Customized roadmap for every student.
  - `📊 Data-Driven Decisions`: Strategic guidance based on market trends.
  - `🤝 Direct University Relations`: Direct partner agreements.
  - `🚀 End-to-End Support`: From application to post-arrival settlement.

---

### 4.5 Testimonials Carousel (`components/Testimonials.tsx`)
- **Interactive Carousel**:
  - Controls: Previous and Next round arrow buttons + bottom dot indicators.
  - Responsive cards per view: 1 card (<640px), 2 cards (640px-1024px), 3 cards (>1024px).
- **Card Structure**:
  - University badge (e.g., `University of Auckland`) with `GraduationCap` icon.
  - Top quote icon.
  - 5 Golden Stars rating.
  - Student quote text.
  - Student author info: Name, Degree pursued, City/Country.
- **Content Profiles**:
  1. *Bilal Ahmed* – Master of Data Science, University of Auckland.
  2. *Ayesha Khan* – Bachelor of Commerce, University of Auckland.
  3. *Zubair Qureshi* – Master of Finance & Economics, University of Otago.
  4. *Zainab Malik* – Bachelor of Biomedical Sciences, University of Otago.
  5. *Hassan Raza* – Bachelor of Computer Science, University of Waikato.
  6. *Mariam Jameel* – Master of Management Studies, University of Waikato.

---

### 4.6 FAQ Component (`components/FAQComponent.tsx`)
- **Category Filter Tabs**:
  - Getting Started
  - Applications
  - Visa & Immigration
  - Funding & Scholarships
  - Post-Arrival & Support
- **Accordion Functionality**:
  - Multiple item expansion state tracking.
  - Smooth height expansion and chevron flip using Framer Motion.
- **Complete Q&A Knowledge Base**:
  - *Getting Started*: Best preparation timeline (12-18 months), zero-cost student counseling explanation, 65+ country portfolio.
  - *Applications*: Required documentation checklist, support for average academic credentials, 2-4 month admission processing timelines.
  - *Visa & Immigration*: Dedicated processing teams, regional turnaround timelines, avoiding refusal pitfalls through mock interviews.
  - *Funding & Scholarships*: Merit and need-based scholarships, distinction between grants and loans, international student part-time work rights (20 hrs/week).
  - *Post-Arrival Support*: University hostelling and homestays, 24/7 on-ground emergency help, career internship placement assistance.

---

## 5. Detailed Page-by-Page Specifications

---

### Page 1: Homepage (`app/page.tsx`)
- **Route**: `/`
- **Component Breakdown**:
  1. `<Hero />`: Brand banner + study search filter.
  2. **Services Carousel Section**:
     - Heading: *"All Our Services | Premier Study Abroad Solutions"*.
     - Service 1: **Student Visa Assistance** (99% success rate).
     - Service 2: **Global University Selection** (500+ partner universities).
     - Service 3: **Career & Profile Coaching** (Resume & international interview prep).
     - Service 4: **IELTS & Language Preparation** (Band score coaching).
     - Service 5: **Scholarship & Funding Access** (Need & merit-based grant search).
     - Service 6: **Settlement & Orientation Support** (Airport pickup, banking, housing).
  3. **Trust Section**:
     - Left: Featured banner image (`/trust_section.png`).
     - Right: *"Your Dreams Are Our Mission"* text + 3 value pillars:
       - Strategic Study Roadmap
       - Direct University Access
       - Elite Alumni Network
  4. `<Testimonials />`: Student success stories carousel.
  5. `<WhyChooseUs />`: Animated metrics counters and methodology highlights.
  6. **Simple Stats Section**:
     - 4 Pill cards on dark navy:
       - `5k+` Visas Approved
       - `500+` Partner Universities
       - `10+` Years Excellence
       - `99%` Success Rate
  7. **Bottom High-Impact CTA**:
     - Headline: *"Ready to Claim Your Global Future?"*
     - Subtext: *"Stop wishing. Start acting. Join the elite league of international students..."*
     - Button: `"Start Your Journey Now →"` linking to `/contact`.

---

### Page 2: About Us (`app/about/page.tsx`)
- **Route**: `/about`
- **Sections**:
  1. **Page Header**:
     - Background: Overlay navy banner.
     - Headline: *"Our Legacy."*
     - Subtext: *"Building bridges between local talent and global opportunities since 2014."*
  2. **Story Section ("Built on Trust, Driven by Results")**:
     - Left text: The firm's origin story, ethos, and statistics (`10y+ Market Leadership`, `99% Visa Success Rate`).
     - Right Image: Team visual with CEO quote overlay card: *"Integrity is the core of our consultancy. We don't just process files; we build futures."*
  3. **Core Values Section**:
     - 3 Cards in deep navy container:
       - **Transparency**: No hidden fees, no false promises.
       - **Personalization**: Customized strategies for distinct student goals.
       - **Excellence**: Highest benchmark in global admissions and visas.
  4. **Leadership Team Section ("Meet Our Leadership")**:
     - Card 1: **CEO & Founder** (Strategic vision, global university alliances, operational leadership).
     - Card 2: **Head of Global Strategy** (University alliances, academic trend evaluations, pathways).
     - Card 3: **Operations Director & Visa Specialist** (Immigration compliance, documentation, 99% success rate).

---

### Page 3: Services (`app/services/page.tsx`)
- **Route**: `/services`
- **Sections**:
  1. **Page Header**:
     - Title: *"Global Excellence, Local Expertise."*
     - Subtext: Dedicated services designed to empower students and professionals abroad.
  2. **Core Services Grid**:
     - 6 Cards in 3-column layout rendering `<ServiceCard />` components (Visa, Admissions, Careers, IELTS, Scholarships, Settlement).
  3. **Study Destinations Feature**:
     - 5 Featured Country Cards with custom photography:
       - **United Kingdom** (`Top Choice` badge)
       - **United States** (`Most Popular` badge)
       - **Canada** (`Best Quality of Life` badge)
       - **Europe** (`Cultural Diversity` badge)
       - **New Zealand** (`Nature & Adventure` badge)
     - Interactive hover description and direct `"Learn More →"` link to `/contact`.
  4. **Interactive 4-Step Process ("The Path to Your Future")**:
     - Step 01: Free Consultation (1-on-1 discovery).
     - Step 02: Profile Building (Strengthening academic & extracurricular resume).
     - Step 03: Documentation (Application and visa file preparation).
     - Step 04: Destination (Departure with confidence).
  5. **High-Impact CTA**:
     - Headline: *"Ready to Transform Your Life?"*
     - Button: `"Start Free Assessment →"` linking to `/contact`.

---

### Page 4: Study Destinations (`app/study-destinations/page.tsx`)
- **Route**: `/study-destinations`
- **Sections**:
  1. **Page Header**:
     - Headline: *"Study Destinations"*.
     - Subtext: *"Explore opportunities across 65+ countries worldwide. Find your perfect study destination."*
  2. **Quick Metrics Banner**:
     - `65+` Study Destinations | `3000+` Partner Universities | `100K+` Students Placed.
     - Tip Box: Advising students to book a consultation if undecided on country.
  3. **Top Study Destinations Grid (Detailed Breakdown)**:
     - 5 In-depth Destination Cards:
       - **New Zealand** (`🇳🇿`): 20+ Universities, 600+ Students, 1000+ Programs, Costs: $15-25K/yr, Work rights & quality of life.
       - **Europe** (`🇪🇺`): 1000+ Universities, 8K+ Students, 20000+ Programs, Costs: $5-25K/yr, Low tuition & English degrees.
       - **Australia** (`🇦🇺`): 43 Universities, 2.5K+ Students, 5000+ Programs, Costs: $15-28K/yr, Top ranked institutions.
       - **United Kingdom** (`🇬🇧`): 150+ Universities, 4.5K+ Students, 3000+ Programs, Costs: $15-30K/yr, 1-Year Masters.
       - **Turkey** (`🇹🇷`): 200+ Universities, 1.2K+ Students, 5000+ Programs, Costs: $3-12K/yr, Affordable Eurasian bridge.
     - Each card contains stats grid, key benefits checklist, and `"Learn More"` button.
  4. **Destination Decision Guide ("How to Choose Your Destination")**:
     - 4 Pillar Evaluation Cards: Career Goals, Budget, Program Rankings, Lifestyle.
  5. **Dual CTA Banner**:
     - Primary Action: `"Start Your Journey"` (links to `/contact`).
     - WhatsApp Action: `"Chat on WhatsApp"` (direct link to WhatsApp API).

---

### Page 5: Destination Detail & Match (`app/destination/detail/page.tsx`)
- **Route**: `/destination/detail?program={prog}&level={lvl}&destination={dest}`
- **Server Component Architecture**:
  - Dynamically parses query parameters using Next.js `searchParams`.
  - Fallbacks safely to `'united-kingdom'` if parameters are omitted.
- **Sections**:
  1. **Header Banner**:
     - Navigation: `"← Back to study finder"` (links back to `/`).
     - Country Flag, Study Match Title, Country Overview Description.
     - Active Filters Badges: Displays the active degree category and education level.
  2. **Main Layout (Split Screen: 1fr / 320px sidebar)**:
     - **Left Column (Programs Catalog)**:
       - Renders list of specific degree options matching the filter.
       - Each program card displays: Graduation cap icon, Degree title, Education level, Typical duration, and validation checkmark.
     - **Right Sticky Aside (Partner Institutions)**:
       - Title: *"Where you can study"*.
       - List of premier institutes for that specific destination with map pins.
       - Direct CTA: `"Talk to an advisor →"` linking to `/contact`.

---

### Page 6: How It Works (`app/how-it-works/page.tsx`)
- **Route**: `/how-it-works`
- **Sections**:
  1. **Header Banner**:
     - Headline: *"Your Journey to Global Success"*.
     - Subtext: Complete roadmap overview from program selection to visa grant.
  2. **Six Simple Steps**:
     - Visual numbered roadmap with connector lines:
       - Step 1: **Select Program** (Align academic strengths and career aims).
       - Step 2: **Select University** (Shortlist institutions matching profile and budget).
       - Step 3: **Select Destination** (Evaluate global destinations).
       - Step 4: **Submit Application** (Structured submission with counselor checks).
       - Step 5: **Document Collection** (Financial proofs, SOPs, credentials).
       - Step 6: **Receive Offer Letter** (Offer acceptance and visa preparation).
  3. **Journey Timeline**:
     - Vertical timeline displaying realistic phases:
       - **Weeks 1-2**: Program, University & Destination Shortlisting.
       - **Weeks 2-6**: Application Preparation & Document Verification.
       - **Weeks 6-12**: Offer Letter Issuance & Visa Lodgment.
  4. **Why Our Process Works**:
     - 6 Cards: Expert Guidance, 1000+ University Partners, Proven Track Record (2.2M+ guided), 24/7 Support, Global Network (40+ offices), Personalized Plans.
  5. **Dual CTA Section**:
     - Consultation form button + WhatsApp direct link.

---

### Page 7: Events & Expos (`app/events/page.tsx`)
- **Route**: `/events`
- **Sections**:
  1. **Header**:
     - Headline: *"Events & Expos"*.
     - Subtext: Meeting universities, seminars, and counseling fairs.
  2. **Upcoming Events Catalog**:
     - 6 Complete Event Listings with category badges, dates, schedules, venues, and attendee estimates:
       1. **Grand Study Abroad Expo 2026** (Type: `EXPO`, Venue: Convention Center, 500+ attendees).
       2. **UK & USA Visa Masterclass** (Type: `WEBINAR`, Venue: Head Office, 200+ attendees).
       3. **Career After Study Abroad** (Type: `WORKSHOP`, Venue: Zoom Online, 300+ attendees).
       4. **IELTS/TOEFL Preparation Bootcamp** (Type: `BOOTCAMP`, Venue: Regional Branch Offices, 150+ attendees).
       5. **Scholarship Success Stories** (Type: `SEMINAR`, Venue: Zoom Online, 400+ attendees).
       6. **Canada Study Visa Process** (Type: `SESSION`, Venue: Head Office, 250+ attendees).
     - Each card features: Icon, Event details, 4 bulleted key topics, and `"Register Now"` button.
  3. **Past Events Track Record**:
     - 3 Historical event records demonstrating verified success (e.g. Summer Expo, UK Webinar, Visa Workshop).
  4. **Why Attend Our Events Grid**:
     - 6 Value points: Meet Universities, Expert Guidance, Network, Special Offers, Learn, Start Your Journey.
  5. **Newsletter Lead Generation CTA**:
     - Email subscription input with privacy guarantee.
  6. **Final CTA**: Dual booking and WhatsApp consultation buttons.

---

### Page 8: Blog & Resources (`app/blog/page.tsx`)
- **Route**: `/blog`
- **Interactive State**:
  - Live client-side keyword search input across titles and descriptions.
  - Category pill filter: `All`, `Visa Guide`, `Scholarships`, `Application Tips`, `Career Guidance`, `Test Prep`, `Student Life`.
  - Dynamic result count display.
- **Articles Catalog (9 Complete Guides)**:
  1. *Complete Guide to UK Student Visa 2026* (Visa Guide · 8 min read)
  2. *Top 10 Scholarship Opportunities for Pakistani Students* (Scholarships · 12 min read)
  3. *How to Write a Winning Statement of Purpose (SOP)* (Application Tips · 10 min read)
  4. *Canada Student Visa Process: Complete Checklist* (Visa Guide · 9 min read)
  5. *Masters vs MBA: Which Should You Choose?* (Career Guidance · 11 min read)
  6. *5 Common Visa Interview Mistakes to Avoid* (Visa Guide · 7 min read)
  7. *IELTS Preparation: Tips for Achieving 7.0+ Band Score* (Test Prep · 13 min read)
  8. *Student Accommodation Guide: Finding Your Perfect Home* (Student Life · 9 min read)
  9. *How to Build a Strong University Application Profile* (Application Tips · 11 min read)
- **Popular Resource Hub**:
  - Category summary cards with content tallies (15+ Visa Guides, 100+ Scholarships, 20+ Test Prep, 25+ Career Tips).
- **Free Downloadable Assets Section**:
  - Downloadable file boxes with simulated download action:
    - **Visa Checklist** (PDF · 2.5 MB)
    - **Application Timeline** (PDF · 1.8 MB)
    - **SOP Template** (DOCX · 500 KB)
- **Newsletter Subscription Bar**: Email capture with primary action.

---

### Page 9: FAQs (`app/faqs/page.tsx`)
- **Route**: `/faqs`
- **Sections**:
  1. **Header**:
     - Headline: *"Frequently Asked Questions"*.
  2. **Trust Stats Bar**:
     - `50+` FAQs Answered | `24/7` Support Available | `95%+` Success Rate | `2.2M+` Students Guided.
  3. **Main Knowledge Base**:
     - Mounts `<FAQComponent />` containing all 15 expandable categorized questions.
  4. **"Still Have Questions?" Consultation Box**:
     - Left: Checklist of benefits (1-on-1 counseling, personalized guidance, free profile evaluation, expert visa tips).
     - Right: Direct Consultation schedule link + Direct WhatsApp link.
  5. **Browse by Category Overview Cards**:
     - 6 Cards with topic summaries: Getting Started, Applications, Visa & Immigration, Funding & Scholarships, Post-Arrival Support, General Queries.
  6. **Bottom CTA**: Personalized consultation booking prompt.

---

### Page 10: Contact Us & Assessment (`app/contact/page.tsx`)
- **Route**: `/contact`
- **Sections**:
  1. **Header**:
     - Headline: *"Let's Talk."*
     - Subtext: *"Start your international journey with a free, expert consultation today."*
  2. **Left Column: Direct Contact & Office**:
     - Direct Contact Info Cards:
       - **Visit Us**: Physical street and building address.
       - **WhatsApp Us**: Direct phone number with instant click-to-chat.
       - **Email Us**: Official inquiry email.
       - **Open Hours**: Working days and hours (e.g. `Mon - Sat: 10AM - 5PM`).
     - **Interactive Google Maps Embed**: Fully responsive `<iframe>` with grayscale filter styling.
  3. **Right Column: Secure Assessment Form**:
     - Form Fields:
       - `Full Name`: Required text input.
       - `Qualification`: Academic background (e.g., A-Levels / Bachelors).
       - `CGPA / Percentage`: Grade score (e.g., 3.8 or 85%).
       - `Phone Number`: WhatsApp contact number.
       - `Desired Destination`: Target country (e.g., UK, USA, Australia, Europe).
       - `Service Interest`: Dropdown selector (Visa Counseling, University Selection, Career Guidance, Test Preparation, Scholarships).
       - `Your Inquiry`: Multiline text message.
     - **WhatsApp Automation Engine**:
       - When submitted, the form compiles a formatted WhatsApp message with bold markdown tags:
         ```text
         *BRAND ASSESSMENT REQUEST*
         *Student Name:* {name}
         *Qualification:* {qualification}
         *CGPA:* {cgpa}
         *Phone Number:* {phone}
         *Desired Destination:* {destination}
         *Service Interest:* {service}
         *Student Inquiry:* {message}
         ```
       - Directly launches `window.open('https://wa.me/{whatsappNumber}?text=...', '_blank')`.
       - Displays immediate feedback alert and clears the form state.

---

## 6. Public Assets & Media Inventory

To replicate this site on a new project, prepare corresponding assets in the `/public` folder:

| File Path | Description | Recommended Dimensions |
| :--- | :--- | :--- |
| `/pacesetter_logo.png` | Primary Brand Logo with transparent background | 512 x 512 px (PNG) |
| `/pacesetter_tab_icon_rounded.png` | Browser Tab Favicon / Apple Touch Icon | 192 x 192 px (PNG) |
| `/pacesetter_hero.png` | Global Hero Background texture / students | 1920 x 1080 px |
| `/pacesetter_hero_front.png` | Hero Course Finder foreground backdrop | 1200 x 800 px |
| `/trust_section.png` | Trust Section Featured student photo | 800 x 600 px |
| `/team.png` | About Page Executive leadership photo | 800 x 600 px |
| `/service_1.jpg` to `/service_6.jpg` | 6 Thumbnails for the individual services | 600 x 400 px |
| `/dest_uk.png`, `/dest_usa.png`, `/dest_canada.png`, `/dest_europe.jpg`, `/dest_nz.jpg` | 5 Country scenic landmarks | 800 x 1000 px |

---

## 7. New Website Re-Theming & Parameterization Checklist

When cloning this project structure to another brand, update the following parameters across the codebase:

### 1. Brand Identity & Copy
- [ ] Replace `"Pace Setter International"` and `"Pace Setter"` with the new company name.
- [ ] Replace the logo file in `/public/pacesetter_logo.png` and favicon in `/public/pacesetter_tab_icon_rounded.png`.
- [ ] Update the brand tagline: Current is `"Guiding Your Journey, Building Your Future"`.

### 2. Contact & Official Details
- [ ] **WhatsApp Number**: Update `"923128188146"` in:
  - `components/Footer.tsx`
  - `app/contact/page.tsx` (Form submission handler + contact card)
  - `app/study-destinations/page.tsx`
  - `app/how-it-works/page.tsx`
  - `app/events/page.tsx`
  - `app/faqs/page.tsx`
- [ ] **Physical Address**: Update in `components/Footer.tsx` and `app/contact/page.tsx`.
- [ ] **Google Maps Embed Link**: Replace the `iframe` URL in `app/contact/page.tsx` with the new office coordinates.
- [ ] **Official Email**: Update `"contact.pacesetterinternational@gmail.com"` in `components/Footer.tsx` and `app/contact/page.tsx`.
- [ ] **Social Media Links**: Update Facebook, Twitter, LinkedIn, Instagram links in `components/Footer.tsx`.

### 3. SEO & Metadata
- [ ] Update `app/layout.tsx`: `title`, `description`, `applicationName`, and `siteName`.
- [ ] Update company location text (e.g. from `"Lahore, Pakistan"` to your new target city/country in `components/Navbar.tsx` and `components/Hero.tsx`).

### 4. Leadership & Executive Quotes
- [ ] Update the leadership quote and roles in `app/about/page.tsx` to match the new owners, founders, or team members.
