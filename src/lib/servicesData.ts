export interface ServiceDetail {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  startingPrice: string;
  priceNote: string;
  shortDesc: string;
  fullDesc: string;
  eligibility: string[];
  features: string[];
  capabilities: string[];
  deliverables: string[];
}

export const servicesList: ServiceDetail[] = [
  {
    slug: 'custom-software-development',
    category: 'Software Engineering',
    title: 'Custom Software & Enterprise ERP Development',
    subtitle: 'Tailored enterprise platforms, ERP, CRM, and custom workflows built around your organization.',
    badge: 'Enterprise Software & ERP',
    startingPrice: '₹49,999',
    priceNote: 'All-inclusive, custom scope',
    shortDesc: 'Tailored software solutions engineered to automate complex business workflows, multi-tenant operations, and department systems.',
    fullDesc: 'We architect and build tailored enterprise software systems specifically around your company’s unique workflows. From multi-branch ERP and custom CRM platforms to automated HRMS and Document Management Systems (DMS), our software is engineered for maximum throughput, fault-tolerant reliability, and seamless API integration.',
    eligibility: [
      'Enterprises & SMEs requiring custom operational workflows beyond off-the-shelf tools.',
      'Multi-branch organizations seeking centralized ERP, inventory, and branch synchronization.',
      'Businesses modernizing legacy desktop or manual spreadsheet processes into cloud platforms.',
    ],
    features: [
      '3-7 working days initial blueprint',
      '100% online cloud architecture',
      'Dedicated Solution Architect',
      'Free follow-up maintenance & SLA support',
    ],
    capabilities: [
      'ERP & CRM: Enterprise Resource Planning and Customer Relationship Management',
      'HRMS & Payroll: Automated attendance, employee self-service, and payroll processing',
      'Document Management (DMS): Centralized document vault with role-based access',
      'Business Intelligence (BI): Interactive executive reporting dashboards and analytics',
    ],
    deliverables: [
      'Production-ready scalable web application',
      'REST & GraphQL API Architecture',
      'Source Code & Deployment Documentation',
      'Post-deployment Monitoring & Training',
    ],
  },
  {
    slug: 'web-mobile-apps',
    category: 'App Engineering',
    title: 'Web & Mobile Application Engineering',
    subtitle: 'Native and cross-platform apps for iOS, Android, and modern Web platforms.',
    badge: 'Web & Mobile Engineering',
    startingPrice: '₹29,999',
    priceNote: 'All-inclusive cross-platform delivery',
    shortDesc: 'Fast, intuitive, and responsive web and mobile applications designed to deliver exceptional experiences across all devices.',
    fullDesc: 'We develop high-performance mobile and web applications connected to your APIs, cloud infrastructure, and business databases. Whether building customer-facing marketplaces, field service mobile apps, or enterprise web portals, our engineering ensures sub-second speeds and offline data synchronization.',
    eligibility: [
      'Startups and businesses looking for iOS and Android mobile apps.',
      'Retailers seeking multi-vendor e-commerce marketplaces and POS integrations.',
      'Companies needing responsive internal employee web portals and dashboards.',
    ],
    features: [
      'iOS & Android native & React Native apps',
      'High-speed Next.js frontend framework',
      'Real-time data synchronization',
      'Store submission assistance (App Store & Play Store)',
    ],
    capabilities: [
      'Marketplaces: Multi-vendor platforms, fashion portals, and quick-commerce apps',
      'POS Systems: Integrated Point of Sale for retail stores, restaurants, and outlets',
      'Hospitality Apps: Hotel management, resort booking, and reservation systems',
      'Cross-Platform: Unified codebases using React Native and Flutter',
    ],
    deliverables: [
      'iOS App Store & Google Play Store release builds',
      'Progressive Web App (PWA) deployment',
      'Backend API integration & database schema',
      'UX/UI Design System & Assets',
    ],
  },
  {
    slug: 'ai-automation',
    category: 'Artificial Intelligence',
    title: 'AI Solutions, Chatbots & Intelligent Automation',
    subtitle: 'Intelligent AI agents, RPA, voice assistants, and predictive analytics to streamline operations.',
    badge: 'AI & Automation',
    startingPrice: '₹39,999',
    priceNote: 'Turnkey AI deployment',
    shortDesc: 'Practical AI solutions and autonomous agents that automate work, process documents, assist customer support, and forecast business metrics.',
    fullDesc: 'Empower your enterprise with practical Artificial Intelligence. We deploy autonomous AI agents, 24/7 intelligent voice and chat assistants, robotic process automation (RPA), and predictive analytics algorithms trained on your business data to turn manual overhead into automated efficiency.',
    eligibility: [
      'Organizations wanting 24/7 automated customer support and voice assistants.',
      'Companies processing high volumes of invoices, PDFs, and unstructured documents.',
      'Businesses seeking predictive demand forecasting and automated lead classification.',
    ],
    features: [
      '24/7 AI Chatbot & Voice Assistant',
      'RPA Workflow Automation',
      'Predictive Analytics Engine',
      'Seamless CRM & ERP AI Integration',
    ],
    capabilities: [
      'AI Chatbots & Voice Assistants: 24/7 intelligent customer support and lead capture',
      'Predictive Analytics: Sales forecasting, harvest prediction (Agriculture), and risk models',
      'IoT Ecosystems: Smart factory, vehicle tracking, and automated IoT dashboards',
      'Intelligent Document Processing: Automated extraction from receipts, bills, and contracts',
    ],
    deliverables: [
      'Custom LLM & AI Model Integration',
      'RPA Automation Bot Scripts',
      'Interactive AI Dashboard',
      'Data Privacy & Security Safeguards',
    ],
  },
  {
    slug: 'cloud-devops',
    category: 'Cloud Infrastructure',
    title: 'Cloud Infrastructure, Migration & DevOps',
    subtitle: 'Secure cloud deployment on AWS, Azure, GCP with Kubernetes, CI/CD pipelines, and 24/7 SLA.',
    badge: 'Cloud & DevOps',
    startingPrice: '₹19,999',
    priceNote: 'Monthly managed cloud plan',
    shortDesc: 'Resilient cloud infrastructure management, containerization, automated deployment pipelines, and zero-downtime operations.',
    fullDesc: 'Transition your workloads to AWS, Microsoft Azure, or Google Cloud with zero data loss. We automate deployment through CI/CD pipelines, manage Kubernetes clusters, enforce Zero Trust security, and provide 24/7 uptime monitoring and disaster recovery.',
    eligibility: [
      'Businesses migrating on-premise servers to AWS, Azure, or GCP.',
      'Software teams needing automated CI/CD pipelines and Kubernetes containerization.',
      'High-traffic applications requiring auto-scaling and sub-second load times.',
    ],
    features: [
      'AWS / Azure / GCP Cloud Management',
      'Automated CI/CD Pipeline Setup',
      'Disaster Recovery & Backup Automation',
      '99.99% Uptime Guarantee',
    ],
    capabilities: [
      'Security Operations (SOC): SIEM dashboards, identity management, and compliance',
      'Infrastructure as Code (IaC): Terraform and CloudFormation automated environments',
      'Containerization: Kubernetes orchestration and Docker deployment',
      'Performance Optimization: Database query tuning and CDN caching',
    ],
    deliverables: [
      'Cloud Architecture Blueprint',
      'CI/CD Pipeline Configurations',
      'Automated Backup & Failover System',
      '24/7 Cloud Monitoring Dashboard',
    ],
  },
  {
    slug: 'cybersecurity-soc',
    category: 'Security & Compliance',
    title: 'Cybersecurity, Threat Monitoring & SOC',
    subtitle: 'Advanced threat monitoring, vulnerability scanning, SIEM dashboards, and compliance readiness.',
    badge: 'Cybersecurity',
    startingPrice: '₹24,999',
    priceNote: 'Per audit / retainer',
    shortDesc: 'Protect your software applications and cloud infrastructure with continuous threat monitoring, penetration testing, and identity governance.',
    fullDesc: 'Protecting your digital assets is embedded into every line of code we write. We perform deep vulnerability assessments, deploy Zero Trust architecture, configure identity governance, and provide Security Operations Center (SOC) reporting for regulatory compliance.',
    eligibility: [
      'Fintech, Healthcare, and E-commerce companies handling sensitive customer data.',
      'Enterprises needing SOC2, ISO 27001, and HIPAA compliance readiness.',
      'Organizations requiring proactive penetration testing and vulnerability audits.',
    ],
    features: [
      'Zero Trust Security Architecture',
      'Vulnerability & Penetration Audits',
      'Identity & Access Management (IAM)',
      'Real-Time Threat Prevention',
    ],
    capabilities: [
      'Security Operations (SOC): SIEM dashboards and active threat mitigation',
      'Application Security: API security, encryption, and secure coding practices',
      'Data Protection: Data-at-rest and in-transit encryption safeguards',
      'Compliance Auditing: ISO 27001, SOC2, and GDPR security reporting',
    ],
    deliverables: [
      'Comprehensive Vulnerability Audit Report',
      'Penetration Testing Summary',
      'Zero Trust Implementation Guide',
      '24/7 SIEM Security Dashboard',
    ],
  },
  {
    slug: 'support-amc-maintenance',
    category: 'Managed Support',
    title: 'Software Support, AMC & Managed Maintenance',
    subtitle: 'Annual Maintenance Contracts (AMC), 24/7 technical support, performance tuning, and updates.',
    badge: 'Support & AMC',
    startingPrice: '₹9,999',
    priceNote: 'Monthly maintenance retainer',
    shortDesc: 'Keep your software applications stable, secure, and up-to-date with round-the-clock technical support, bug fixes, and feature upgrades.',
    fullDesc: 'We don’t just build software and leave. Our dedicated maintenance and support packages ensure your applications remain operational, secure, and compatible with emerging tech standards as your business scales.',
    eligibility: [
      'Companies needing reliable ongoing technical support and maintenance.',
      'Businesses requiring immediate bug fixes, server patches, and security updates.',
      'Organizations wanting fixed-cost Annual Maintenance Contracts (AMC).',
    ],
    features: [
      '24/7 SLA Technical Support',
      'Annual Maintenance Contracts (AMC)',
      'Continuous Security Patching',
      'Monthly Health & Performance Reports',
    ],
    capabilities: [
      'Annual Maintenance Contracts (AMC): Long-term system reliability and bug fixes',
      'Performance Optimization: Continuous monitoring and database tuning',
      '24/7 Technical Support: Round-the-clock assistance for mission-critical apps',
      'Managed Cloud Services: Server, database, and API maintenance',
    ],
    deliverables: [
      'Dedicated Technical Support Desk',
      'SLA Response Time Guarantee',
      'Monthly Security & Backup Audit',
      'Ongoing Feature Enhancement Sprint',
    ],
  },
];
