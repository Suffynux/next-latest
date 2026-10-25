// Central site constants and content data for NextGrid IT.
// Values marked TODO are placeholders from CLAUDE.md section 17: do not invent them.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextgridit.co.uk";

export const COMPANY = {
  brand: "NextGrid IT",
  legalName: "NEXTGRID IT LTD",
  companyNumber: "16591385",
  registeredIn: "England and Wales",
  // TODO {{REGISTERED_OFFICE_ADDRESS}}: set street, city, postcode when confirmed.
  registeredOffice: null,
  tagline: "Where IT meets reliability",
  email: "info@nextgridit.co.uk",
  whatsapp: "+923097972767",
  // TODO {{BOOKING_URL}}: calendar booking link when confirmed.
  bookingUrl: null,
  social: {
    linkedin: "https://www.linkedin.com/company/nextgrid-it",
    // TODO {{INSTAGRAM_URL}} {{FACEBOOK_URL}} {{TIKTOK_URL}}: add when confirmed.
    instagram: null,
    facebook: null,
    tiktok: null,
  },
};

export const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}`;

export const AREAS = [
  {
    slug: "brand-marketing",
    order: "01",
    name: "Brand & Marketing",
    navLabel: "Brand & Marketing",
    serviceType: "Brand strategy and digital marketing",
    metaTitle: "Brand Strategy & Digital Marketing Services",
    metaDescription:
      "Brand strategy, identity, content, social media, paid advertising, SEO and CRM, planned and run by one team as a single growth programme.",
    tagline: "Build a brand customers recognise, trust and choose.",
    intro:
      "Brand strategy, content and marketing planned as one programme, so every channel works toward the same commercial objective.",
    tileSay: "Strengthen our brand and generate qualified demand",
    tileLabel: "Brand & Marketing",
    engagement:
      "A monthly retainer, or a defined project such as brand guidelines, an SEO audit or a tracking implementation.",
    when: [
      "Launching a new brand or repositioning an established one",
      "Social channels are active but are not producing qualified enquiries",
      "Advertising spend is not delivering clear, measurable returns",
      "Your business is difficult to find on Google, Maps or AI assistants",
    ],
    groups: [
      {
        label: "Scope of services",
        items: [
          {
            t: "Brand strategy",
            d: "Positioning, audience definition and a clear reason for customers to choose you.",
          },
          {
            t: "Branding, marketing and sales planning",
            d: "A single plan connecting your brand, your marketing and your sales process.",
          },
          {
            t: "Brand identity and guidelines",
            d: "Logo usage, colour, typography and tone of voice, documented for consistent application.",
          },
          {
            t: "Content strategy and creative",
            d: "Design, short-form video and copy, produced against an agreed plan.",
          },
          {
            t: "Social media management",
            d: "Instagram, Facebook, TikTok and LinkedIn, planned, published, moderated and reported.",
          },
          {
            t: "Paid advertising",
            d: "Meta and TikTok campaigns, from account structure and tracking to testing and reporting.",
          },
          {
            t: "SEO and AI search visibility",
            d: "Technical, on-page and local SEO, with content structured to be found and cited by AI assistants.",
          },
          {
            t: "Email and WhatsApp marketing",
            d: "Campaigns and automated journeys that bring existing customers back.",
          },
          {
            t: "CRM and marketing systems",
            d: "Lead capture, pipelines and follow-up connected in one system your team actually uses.",
          },
          {
            t: "AI-supported marketing and automation",
            d: "Automated reporting, content workflows and campaign operations that reduce manual effort.",
          },
          {
            t: "Reviews and Google Business Profile",
            d: "Profile management, review generation and response handling that strengthen local trust.",
          },
          {
            t: "Analytics and conversion optimisation",
            d: "Pixel, conversion and GA4 configuration, with clear monthly reporting.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you handle both organic and paid marketing?",
        a: "Yes. Content, social media, SEO and paid advertising are planned together as one programme, so organic and paid work support the same objective.",
      },
      {
        q: "Can you work with our existing brand?",
        a: "Yes. We can work within your current identity and guidelines, or review and refresh them first if positioning has moved on.",
      },
      {
        q: "How do you report on marketing work?",
        a: "Tracking is configured before campaigns begin, and you receive clear monthly reporting against the goals agreed in the plan.",
      },
    ],
    related: ["technology", "ecommerce"],
  },
  {
    slug: "technology",
    order: "02",
    name: "Websites, Apps & Software",
    navLabel: "Technology",
    serviceType: "Web, mobile and custom software development",
    metaTitle: "Web, App & Custom Software Development",
    metaDescription:
      "Websites, mobile apps, SaaS platforms, custom software, APIs and automation, built around how your business operates and grows.",
    tagline: "Software engineered around the way your business operates.",
    intro:
      "From corporate websites to bespoke business systems, designed, developed, launched and supported by one team.",
    tileSay: "Develop a website, application or business system",
    tileLabel: "Websites, Apps & Software",
    engagement:
      "Fixed-scope projects delivered in agreed milestones, with post-launch support through IT Managed Services.",
    when: [
      "Your website is outdated, slow or difficult to manage",
      "You plan to launch a web application, mobile app or software product",
      "Operations depend on spreadsheets and messaging groups instead of a proper system",
      "Disconnected tools are causing duplicated work and data errors",
    ],
    groups: [
      {
        label: "Scope of services",
        items: [
          {
            t: "Business websites",
            d: "Fast, mobile-first websites your team can update without a developer.",
          },
          {
            t: "Web applications and SaaS",
            d: "Platforms with user accounts, roles, subscriptions and online payments.",
          },
          {
            t: "Mobile applications",
            d: "iOS and Android apps developed alongside your website or platform.",
          },
          {
            t: "Custom software",
            d: "Bespoke systems built around processes that off-the-shelf tools do not fit.",
          },
          {
            t: "CRM and business systems",
            d: "A central system for leads, customers and team communication, with role-based access.",
          },
          {
            t: "Backend, APIs and integrations",
            d: "Websites, payment gateways, CRMs and third-party tools connected so data flows automatically.",
          },
          {
            t: "Automation and AI solutions",
            d: "Chatbots, WhatsApp assistants and automated workflows that reduce manual work.",
          },
          {
            t: "Cloud and DevOps",
            d: "Hosting architecture, deployment pipelines and monitoring for reliable releases.",
          },
          {
            t: "Desktop software",
            d: "Installable applications for Windows, macOS and Linux to support internal operations.",
          },
          {
            t: "3D and interactive web",
            d: "Product visualisers and interactive experiences delivered in the browser.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you support what you build after launch?",
        a: "Yes. Support and maintenance continues through our IT Managed Services, covering updates, fixes, hosting and monitoring.",
      },
      {
        q: "Can you take over an existing website or codebase?",
        a: "Yes. We begin with a technical review, then agree a scope for stabilising, improving or extending what is already in place.",
      },
      {
        q: "How are software projects priced?",
        a: "Every project is quoted against a written scope with deliverables, exclusions and milestones. Submit a quote request or an RFP to receive a proposal.",
      },
    ],
    related: ["ecommerce", "it-managed-services"],
  },
  {
    slug: "ecommerce",
    order: "03",
    name: "E-commerce",
    navLabel: "E-commerce",
    serviceType: "E-commerce development",
    metaTitle: "Shopify & E-commerce Development",
    metaDescription:
      "Shopify stores, headless storefronts, integrations, inventory and order systems, plus ongoing e-commerce management and optimisation.",
    tagline: "Online stores built to convert, and managed to keep growing.",
    intro:
      "Shopify development, ongoing store management and the automation that drives repeat revenue.",
    tileSay: "Launch or scale our online store",
    tileLabel: "E-commerce",
    engagement:
      "A store development project, followed by optional monthly store management.",
    when: [
      "Launching an online store or migrating from another platform",
      "Your store attracts traffic but conversion remains low",
      "Product, inventory and order processes are still managed manually",
      "Repeat purchases depend on manual follow-up",
    ],
    groups: [
      {
        label: "Scope of services",
        items: [
          {
            t: "Shopify store development",
            d: "Custom themes and sections designed around your products and customers.",
          },
          {
            t: "E-commerce development",
            d: "Stores on other platforms, or fully custom builds where the requirement demands it.",
          },
          {
            t: "Storefront and headless commerce",
            d: "Custom frontends connected to commerce backends for speed and flexibility.",
          },
          {
            t: "Store management and automation",
            d: "Product uploads, content updates, seasonal campaigns and automated messaging, managed monthly.",
          },
          {
            t: "Inventory and order systems",
            d: "Stock and orders synchronised across locations and sales channels.",
          },
          {
            t: "Growth and conversion optimisation",
            d: "Faster pages and a smoother checkout, informed by a full store audit.",
          },
          {
            t: "International commerce",
            d: "Multi-currency and multi-domain storefronts for cross-border selling.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you only build on Shopify?",
        a: "No. Shopify is our most common platform, but we also deliver headless storefronts and custom e-commerce builds where the requirement demands it.",
      },
      {
        q: "Can you migrate our existing store?",
        a: "Yes. We plan migrations to protect products, customers, orders and search rankings, then rebuild the storefront on the new platform.",
      },
      {
        q: "Do you manage stores after launch?",
        a: "Yes. Monthly store management covers products, content, campaigns, automation and ongoing optimisation.",
      },
    ],
    related: ["brand-marketing", "technology"],
  },
  {
    slug: "it-managed-services",
    order: "04",
    name: "IT Managed Services",
    navLabel: "IT Managed Services",
    serviceType: "IT managed services and technical recruitment",
    metaTitle: "IT Managed Services & Technical Recruitment",
    metaDescription:
      "Managed IT support, technical recruitment and IT resourcing to keep your systems running and your delivery teams staffed.",
    tagline: "Reliable systems, and the technical people to run them.",
    intro:
      "Ongoing management of the websites, stores and business tools your company depends on, together with technical recruitment and IT resourcing.",
    tileSay: "Secure IT support or technical talent",
    tileLabel: "IT Managed Services",
    engagement:
      "Monthly support agreements, per-placement recruitment, or dedicated resources billed monthly.",
    note: "All services are delivered remotely. On-site attendance is arranged and quoted separately.",
    when: [
      "No one is responsible for your website or store after launch",
      "Domains, business email or workspace accounts are not properly administered",
      "You need a dependable point of contact when systems fail",
      "You need developers, designers or technical specialists, permanent or contract",
    ],
    groups: [
      {
        label: "IT support and maintenance",
        items: [
          {
            t: "Website and store maintenance",
            d: "Updates, security patches, fixes and minor changes, handled monthly.",
          },
          {
            t: "Hosting, uptime and backups",
            d: "Managed hosting, SSL, monitoring and scheduled backups.",
          },
          {
            t: "Domains and business email",
            d: "DNS records, mailbox setup and deliverability configuration.",
          },
          {
            t: "Google Workspace and Microsoft 365",
            d: "User, access and policy administration.",
          },
          {
            t: "Security fundamentals",
            d: "Account security, access control and secure configuration across your tools.",
          },
        ],
      },
      {
        label: "Technical recruitment and IT resourcing",
        items: [
          {
            t: "Technical recruitment",
            d: "Permanent and contract hiring for technical roles.",
          },
          {
            t: "Screening and assessment",
            d: "Candidates technically assessed before they reach your interview stage.",
          },
          {
            t: "IT resourcing",
            d: "Dedicated remote developers, designers and specialists embedded in your team.",
          },
          {
            t: "Delivery support",
            d: "Project coordination and delivery oversight for teams that need extra structure.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is support delivered remotely?",
        a: "Yes. All services are delivered online. On-site attendance can be arranged when needed and is quoted separately.",
      },
      {
        q: "What does a support agreement cover?",
        a: "A written monthly agreement defines the systems covered, the work included, and how requests are raised and handled.",
      },
      {
        q: "How does technical recruitment work?",
        a: "You share the role and requirements, we source and technically assess candidates, and you interview only those who pass assessment. Recruitment is charged per placement.",
      },
    ],
    related: ["technology", "ecommerce"],
  },
];

export const PROCESS = [
  {
    n: "01",
    t: "Consultation",
    d: "Share your requirement through a quote request or an RFP. We review your current position before the first conversation.",
  },
  {
    n: "02",
    t: "Scope and proposal",
    d: "You receive a written scope covering deliverables, exclusions, timeline and commercial terms.",
  },
  {
    n: "03",
    t: "Delivery",
    d: "Work is delivered against agreed milestones, with a named lead and scheduled progress reviews.",
  },
  {
    n: "04",
    t: "Reporting and improvement",
    d: "Clear reporting on outcomes, followed by continuous improvement of what is live.",
  },
];

export const METHOD = [
  {
    t: "Plan",
    d: "Understand the business, define strategy, brand and scope before anything is built.",
  },
  {
    t: "Build",
    d: "Design and develop the brand, website, systems and store against the agreed scope.",
  },
  {
    t: "Grow",
    d: "Run marketing, content and optimisation, then report on results and refine.",
  },
];

export const HOME_FAQS = [
  {
    q: "What does NextGrid IT do?",
    a: "NextGrid IT is one team that plans, builds and grows digital businesses. We cover brand and marketing, technology and software, e-commerce, and IT managed services.",
  },
  {
    q: "Where is NextGrid IT based?",
    a: "NextGrid IT Ltd is registered in England and Wales (company number 16591385). Our team works remotely and delivers all services online.",
  },
  {
    q: "Which countries do you work with?",
    a: "We work with clients in the United Kingdom, Europe, the Gulf region, the United States and Pakistan.",
  },
  {
    q: "How much do your services cost?",
    a: "Every engagement is scoped to the client's goals, so we quote per project. Submit a request for a quote and we will send a written proposal.",
  },
  {
    q: "Do you work with product and service businesses?",
    a: "Yes. We work with product-based and service-based brands, provided the business is ethical and legal.",
  },
  {
    q: "Do you visit client premises?",
    a: "Our services are delivered online. Site visits can be arranged when needed and are charged separately.",
  },
];

export const INDUSTRIES = [
  {
    t: "Retail and grocery",
    d: "Stores and chains moving sales, loyalty and operations online.",
  },
  {
    t: "Fashion and e-commerce",
    d: "Brands selling direct to consumers across markets and channels.",
  },
  {
    t: "Education",
    d: "Schools, academies and course providers reaching students online.",
  },
  {
    t: "Travel and hospitality",
    d: "Operators and venues taking bookings and enquiries digitally.",
  },
  {
    t: "Health, beauty and clinics",
    d: "Practices and brands managing appointments, reputation and growth.",
  },
  {
    t: "Real estate",
    d: "Agencies and developers presenting properties and capturing leads.",
  },
  {
    t: "Professional services",
    d: "Firms that win work through credibility, referrals and visibility.",
  },
];

export const INSIGHT_CATEGORIES = [
  "Brand & Marketing",
  "Technology",
  "E-commerce",
  "Guides",
];

export function getArea(slug) {
  return AREAS.find((a) => a.slug === slug);
}
