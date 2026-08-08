export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'AI-Driven Precision Agriculture Irrigation System',
    category: 'AI & IoT',
    tech: ['Python', 'TensorFlow Lite', 'Arduino IoT', 'React.js'],
    desc: 'Smart agriculture platform measuring real-time soil NPK and moisture levels, running edge-AI models to predict exact water demands, synced to a custom dashboard.',
    synopsis: {
      problem: 'Traditional farming methods suffer from critical water wastage and inaccurate crop fertilization timelines due to lack of real-time telemetry data.',
      solution: 'An AI-powered IoT system utilizing edge-computing sensors and deep learning regression models to dynamically manage solenoid valves for optimized micro-irrigation.',
      modules: ['Hardware IoT Telemetry Module', 'Edge Inference AI Model', 'Web Dashboard Control Panel', 'Automated Solenoid Relays'],
      timeline: '4 Weeks Deliverable (Hardware Schematics + Source Code + Synopsis)',
    },
  },
  {
    id: 2,
    title: 'LoveSync: Real-Time Relationship Compatibility Analyzer',
    category: 'Web Apps',
    tech: ['React.js', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
    desc: 'Commercial micro-SaaS connecting partners through interactive psychological quizzes, dynamic emotional telemetry charts, and live compatibility metrics.',
    synopsis: {
      problem: 'Online relationship assessments are static and lack real-time multiplayer coordination and analytical charts.',
      solution: 'A modern full-stack application establishing active Socket.io communication rooms to parse live user input into high-performance telemetry diagrams.',
      modules: ['Live WebSocket Coordination', 'Chart.js Telemetry Dashboard', 'Psychological Scoring Engines', 'Secure User Auth'],
      timeline: '3 Weeks Deliverable (Production-Ready Source Code + DB Schematics)',
    },
  },
  {
    id: 3,
    title: 'IEEE Scopus Plagiarism-Free Academic Synopsis Builder',
    category: 'Student Support',
    tech: ['Next.js', 'Flask', 'OpenAI API', 'LaTeX Exporter'],
    desc: 'Automated academic abstract assistant parsing standard IEEE journal structures, rewriting research topics, and exporting formatted LaTeX synopses.',
    synopsis: {
      problem: 'Engineering students struggle with formatting project summaries and literature surveys to comply with rigid IEEE and Scopus guidelines.',
      solution: 'An AI-assisted template generator that rewrites student abstracts, checks citation flow, and exports publication-ready LaTeX PDFs.',
      modules: ['IEEE Document Parser', 'AI Plagiarism Rewriter', 'LaTeX Export Engine', 'UGC Formatting Checker'],
      timeline: '2 Weeks Deliverable (AI Prompt Systems + PDF Generator)',
    },
  },
  {
    id: 4,
    title: 'Decentralized Secure Health Record Management Ledger',
    category: 'Web Apps',
    tech: ['Solidity', 'Ethereum', 'React.js', 'IPFS', 'Web3.js'],
    desc: 'Secure medical ecosystem utilizing IPFS for distributed medical records storage and smart contracts for selective patient-doctor access key exchanges.',
    synopsis: {
      problem: 'Centralized hospital record systems are highly vulnerable to ransomware cyberattacks and unauthorized patient data access.',
      solution: 'A Web3 dApp encrypting medical records into IPFS and managing security authorization keys via immutable Ethereum smart contracts.',
      modules: ['Solidity Records Smart Contract', 'IPFS Encrypted Storage Node', 'Doctor-Patient Web3 Interface', 'Metamask Handshake'],
      timeline: '4 Weeks Deliverable (Smart Contract Source + Web3 Web Interface)',
    },
  },
  {
    id: 5,
    title: 'Dynamic Scopus/UGC Indexing Literature Survey Aggregator',
    category: 'Research Papers',
    tech: ['Python (Scrapy)', 'Selenium', 'FastAPI', 'PostgreSQL'],
    desc: 'Academic research engine scraping active IEEE Explorer and Google Scholar citation indices, structuring literature tables with citation counts in a single click.',
    synopsis: {
      problem: 'Research scholars spend dozens of hours manually searching, sorting, and compiling references for their literature reviews.',
      solution: 'An automated web crawler that parses citations, indexes high-impact journals, and generates structured bibliography tables in MS Word format.',
      modules: ['Multi-Source Scraper Engine', 'Reference Verification API', 'Table Generator Module', 'Citation Count Sorter'],
      timeline: '2 Weeks Deliverable (Scraping Script + REST API + Table Exporter)',
    },
  },
  {
    id: 6,
    title: 'Cross-Platform Student Attendance & Academic Portal',
    category: 'Mobile Apps',
    tech: ['Flutter', 'Firebase Auth', 'Node.js', 'MongoDB'],
    desc: 'High-performance mobile application allowing biometric fingerprint authentication, real-time push announcements, exam result reports, and assignment downloads.',
    synopsis: {
      problem: 'Colleges struggle to maintain real-time, tamper-proof student attendance logs and instant notifications for parents.',
      solution: 'A responsive Flutter app linking secure device biometric sensors to centralized Cloud databases, updating parent and student panels instantly.',
      modules: ['Flutter Biometric Authentication', 'Push Notifications Gateway', 'Academic Mark Sheet System', 'Real-Time MongoDB Logs'],
      timeline: '3 Weeks Deliverable (Mobile APK + Admin Web Dashboard)',
    },
  },
]

export const PROJECT_CATEGORIES = ['All', 'Web Apps', 'Mobile Apps', 'AI & IoT', 'Research Papers', 'Student Support']
