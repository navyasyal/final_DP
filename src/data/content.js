// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Sourced from Navya's resume + existing project data — no invented details.
// Edit this file to update the site; components just render this data.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Navya Syal",
  initials: "NS",
  role: "Cybersecurity Analyst (SOC) — in training",
  tagline:
    "Final-year BTech Cybersecurity undergraduate building hands-on skill in SIEM engineering, threat detection, and incident response.",
  summary:
    "Final year BTech Cybersecurity undergraduate with hands-on experience in SIEM engineering, threat detection, brute-force attack simulation, and SOC lab operations across Splunk, Wazuh, and Kali Linux environments. Demonstrated ability to map attack patterns to MITRE ATT&CK, triage security alerts, and investigate log anomalies. Actively preparing for CompTIA Security+. Targeting SOC Analyst, Blue Team, Cybersecurity Intern, Security Analyst, and GRC roles.",
  objective:
    "Seeking a 6-month cybersecurity / SOC internship (target start: January 2027) where I can apply SIEM monitoring, log analysis, and threat-detection skills built through independent labs and academic research to a real security operations environment.",
  interests: [
    "Threat detection & blue-team operations",
    "Digital forensics & incident response",
    "Security monitoring & log analysis",
    "Zero Trust architecture",
  ],
  location: "Delhi, India",
  email: "navyaasyall@gmail.com",
  phone: "+91 9999511678",
  photo: "/images/navya.jpg",
  links: {
    github: "https://github.com/navyasyal",
    linkedin: "https://www.linkedin.com/in/navya-syal/",
    resume: "/resume.pdf",
  },
};

export const stats = [
  { label: "Log events analyzed", value: "1,000+" },
  { label: "Simulated attack techniques", value: "6+" },
  { label: "SPL queries authored", value: "10+" },
  { label: "SOC lab alerts triaged", value: "500+" },
];

export const skillGroups = [
  {
    group: "Programming Languages",
    items: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    group: "Cybersecurity",
    items: [
      "Threat Detection",
      "MITRE ATT&CK Mapping",
      "Brute-Force Detection",
      "Vulnerability Scanning",
      "OSINT",
      "OWASP Fundamentals",
      "Zero Trust Architecture",
      "Digital Forensics",
    ],
  },
  {
    group: "SIEM & SOC",
    items: [
      "Splunk (SPL)",
      "Wazuh",
      "Log Analysis",
      "Alert Triage",
      "Incident Response",
    ],
  },
  {
    group: "Cloud & IAM",
    items: [
      "Azure Cloud Security",
      "RBAC",
      "Token-Based Auth (JWT)",
      "Identity & Access Management",
    ],
  },
  {
    group: "Networking",
    items: ["Network Fundamentals", "Wireshark", "Nmap", "TCP/IP Basics"],
  },
  {
    group: "Databases",
    items: ["MySQL", "MongoDB", "SQL"],
  },
  {
    group: "Web Development",
    items: ["React", "Node.js", "Express", "MERN Stack"],
  },
  {
    group: "Operating Systems",
    items: ["Kali Linux", "Windows", "Linux CLI / Shell"],
  },
  {
    group: "Tools",
    items: [
      "Git / GitHub",
      "Jenkins (CI/CD)",
      "Docker",
      "Postman",
      "VS Code",
      "Autopsy",
      "FTK Imager",
      "Ngrok",
    ],
  },
];

// Flagship / featured projects — shown with full detail cards.
export const featuredProjects = [
  {
    name: "Password Policy Compliance Checker",
    period: "Independent project",
    tag: "Security Automation",
    description:
      "Python-based cybersecurity tool that audits passwords against configurable organizational security policies, scoring strength and flagging non-compliant credentials.",
    features: [
      "Validates password complexity against a configurable JSON policy file",
      "Scores password strength 0–100 and classifies as Weak / Medium / Strong",
      "Detects common and reused passwords via dictionary and duplicate checks",
      "Generates CSV compliance reports and a plain-text summary report",
    ],
    tech: ["Python 3", "Regex", "JSON", "CSV"],
    links: {
      code: "https://github.com/navyasyal/Password-Policy-Compliance-Checker",
    },
  },
  {
    name: "Failed Login Geo-Mapper",
    period: "Independent project",
    tag: "Blue Team",
    description:
      "Blue Team log-analysis tool that parses SSH authentication logs, geolocates attacker IPs, detects brute-force attacks, and produces an interactive dashboard and PDF security report.",
    features: [
      "Parses SSH auth logs and extracts failed login attempts",
      "Performs GeoIP lookups and plots an interactive world attack map with Folium",
      "Detects brute-force patterns and maps them to MITRE ATT&CK (e.g. T1110.001 — Password Guessing)",
      "Generates an HTML dashboard, charts, CSV reports, and a PDF security report",
    ],
    tech: ["Python 3", "Folium", "Matplotlib", "ReportLab", "MITRE ATT&CK"],
    links: {
      code: "https://github.com/navyasyal/failed-login-geo-mapper",
    },
  },
  {
    name: "Python Port Scanner",
    period: "Independent project",
    tag: "Network Recon",
    description:
      "Multi-threaded TCP port scanner performing fast network reconnaissance with banner grabbing, service detection, and CSV/JSON reporting.",
    features: [
      "Multi-threaded TCP port scanning via ThreadPoolExecutor for speed",
      "Grabs service banners and fingerprints common services on open ports",
      "CLI built with argparse — custom port ranges, target validation, help output",
      "Exports CSV and JSON scan reports alongside a persistent scan log",
    ],
    tech: ["Python 3", "Socket Programming", "Multithreading", "argparse"],
    links: {
      code: "https://github.com/navyasyal/python-port-scanner",
    },
  },
  {
    name: "Zero Trust Architecture with Hybrid Cloud",
    period: "Ongoing — Capstone",
    tag: "Capstone",
    description:
      "Full-stack MERN application implementing a Zero Trust security model that enforces identity, device, and network-based access controls, built as the final-year capstone project.",
    features: [
      "Engineered a Zero Trust model enforcing identity, device, and network-based access checks using Node.js, Express, and MongoDB",
      "Implemented RBAC authentication and JWT token-based security with protected route enforcement",
      "Built a React dashboard to visualize security metrics and audit logs",
      "Structured the project with a Jenkinsfile for CI/CD-style deployment readiness",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "RBAC", "Jenkins"],
    links: {
      code: "https://github.com/navyasyal/zerotrust/tree/feature/zero_trust_final",
    },
  },
  {
    name: "ForensicAI — Deepfake Video Detection for Digital Evidence",
    period: "In progress — R&D",
    tag: "R&D",
    description:
      "Research project building a deep learning model to authenticate video evidence and flag deepfake manipulation for digital-forensics use cases.",
    features: [
      "Building a Vision Transformer (ViT) based model to classify authentic vs. manipulated video evidence",
      "Evaluating cross-dataset generalization so the model holds up on unseen, adversarial samples rather than a single benchmark dataset",
      "Documenting methodology and interim results as the research progresses",
    ],
    tech: ["Python", "Vision Transformer (ViT)", "Deep Learning", "Digital Forensics"],
    links: {},
  },
];

// SOC / security home-lab projects (self-directed, all with public repos).
export const socLabProjects = [
  {
    title: "Threat Detection & MITRE ATT&CK Mapping — Kali Linux",
    link: "https://github.com/navyasyal/kali-threat-detection",
    summary:
      "Simulated 6+ real-world attack techniques on Kali Linux and mapped each one to MITRE ATT&CK tactics and techniques.",
    points: [
      "Simulated SSH brute force, privilege escalation, and credential-theft techniques and mapped each to MITRE ATT&CK",
      "Detected SSH brute-force patterns via journalctl log analysis, isolating authentication anomalies across 1,000+ log events",
      "Configured auditd to capture command execution activity; identified unauthorized /etc/shadow access indicating potential credential theft",
      "Implemented cron job monitoring to detect persistence mechanisms deployed by simulated adversaries",
    ],
    tech: ["Kali Linux", "MITRE ATT&CK", "journalctl", "auditd"],
  },
  {
    title: "SIEM Dashboard & Security Monitoring — Splunk",
    link: "https://github.com/navyasyal/Splunk_Log_Analysis",
    summary:
      "Splunk SIEM environment ingesting Windows Event Logs, with custom SPL queries and dashboards for brute-force and privileged-account monitoring.",
    points: [
      "Engineered a Splunk SIEM environment ingesting Windows Event Logs",
      "Authored 10+ SPL queries to surface failed logins, privilege escalation events, and lateral-movement indicators",
      "Designed 5 real-time dashboards visualizing brute-force patterns, privileged-account anomalies, and suspicious access trends",
      "Correlated multi-source log data into unified alert views to reduce simulated mean-time-to-detect (MTTD)",
    ],
    tech: ["Splunk", "SPL", "Windows Event Logs", "SIEM"],
  },
  {
    title: "SIEM-Based SOC Home Lab — Wazuh",
    link: "https://github.com/navyasyal/wazuh-siem-soc-project",
    summary:
      "Multi-VM SOC lab built with Wazuh SIEM for centralized log ingestion and real-time event correlation.",
    points: [
      "Architected a multi-VM SOC lab using Wazuh SIEM with agents deployed across 3 virtual machines",
      "Simulated brute-force and privilege-escalation attacks; analyzed 500+ alerts to classify true vs. false positives",
      "Executed the full alert lifecycle: log generation → ingestion → correlation → triage → documentation",
      "Configured syslog and auth.log collection and monitored real-time log correlation",
    ],
    tech: ["Wazuh", "SIEM", "Linux", "SOC Monitoring"],
  },
  {
    title: "Linux Log Analysis & Brute-Force Attack Detection",
    link: "https://github.com/navyasyal/linux-log-analysis",
    summary:
      "Controlled SSH brute-force simulation on a Kali Linux VM with full log-based detection and IOC extraction.",
    points: [
      "Executed a controlled SSH brute-force simulation on a Kali Linux VM",
      "Detected and documented all failed authentication attempts using journalctl",
      "Applied Linux CLI forensic techniques to extract IOCs and analyze login-behavior patterns from system logs",
    ],
    tech: ["Linux", "SSH", "journalctl", "Log Analysis"],
  },
];

// Academic / research projects (lighter cards, filterable).
export const academicProjects = [
  {
    name: "ATDAM — Adaptive Threat Detection & Automated Mitigation",
    category: "Research",
    description:
      "Authored a cybersecurity research framework combining signature-based and anomaly-based detection to minimize attacker dwell time.",
    tech: ["Threat Detection", "Security Architecture"],
    link: "https://drive.google.com/file/d/1-Z1-Fykfle-07-NZvyJmThlMiSDMjY6X/view?usp=sharing",
    linkLabel: "Research paper",
  },
  {
    name: "Quantum Analysis of AES using Shannon's Theory",
    category: "Research",
    description:
      "Studied AES security using Shannon's information-theory concepts alongside a basic quantum-search (Grover's algorithm) analysis.",
    tech: ["Cryptography", "Security Theory"],
    link: "https://drive.google.com/file/d/18oLKiYGJKduFdpdd4FBYIxML4H4M42Ux/view?usp=sharing",
    linkLabel: "Research report",
  },
  {
    name: "Career Counseling Management System",
    category: "Academic",
    description:
      "Database-driven system that stores assessment results and generates career recommendations.",
    tech: ["SQL", "MySQL", "Backend"],
    link: "https://drive.google.com/file/d/1zEwQ-ksQRvBBJBRcDQruOuGbh0cZKzRv/view?usp=sharing",
    linkLabel: "Project report",
  },
  {
    name: "Path-Finding Algorithms for Pac-Man",
    category: "Academic",
    description:
      "Implemented and compared BFS, DFS, and A* search algorithms (with heuristics) on maze-solving problems.",
    tech: ["Algorithms", "A* Search"],
    link: "https://drive.google.com/file/d/1lg4c7FH_ZwTveKvM_RB78k9PIR7Wzqqn/view?usp=sharing",
    linkLabel: "Presentation",
  },
];

export const certifications = [
  {
    name: "SOC Simulation",
    org: "TryHackMe",
    year: "2026",
    link: "https://tryhackme.com/soc-sim/public-summary/6995f10149d49142cbfab7960fd6f9b9e9dda7728ac61b167c535cfdea957962f79755da6a084293323db7cfbfe2cdc0",
    details: [
      "Completed a SOC simulation involving real-world alert triage and investigation",
      "Analyzed security alerts and classified true vs. false positives",
      "Worked with SIEM tooling to investigate logs and suspicious activity",
      "Documented findings through structured case reports",
    ],
  },
  {
    name: "Cybersecurity Analyst Job Simulation",
    org: "Tata Consultancy Services (Forage)",
    year: "2024",
    link: "/certificates/tata-cybersecurity.pdf",
    details: [
      "Worked on Identity and Access Management (IAM) strategy",
      "Assessed IAM strategy and security best practices",
      "Produced documentation and security recommendations",
    ],
  },
  {
    name: "Cybersecurity Job Simulation",
    org: "Mastercard (Forage)",
    year: "2024",
    link: "/certificates/mastercard-cybersecurity.pdf",
    details: [
      "Worked as an analyst on Mastercard's Security Awareness team",
      "Identified and analyzed phishing threats",
      "Contributed to security-training procedure improvements",
    ],
  },
  {
    name: "CyberSecurity Threat Management",
    org: "Cisco Networking Academy",
    year: "2026",
    link: "/certificates/cisco-threat-management.pdf",
    details: [
      "Covered threat detection, attack vectors, and incident-response basics",
      "Built foundation in SOC operations and cybersecurity risk management",
    ],
  },
  {
    name: "Endpoint Security",
    org: "Cisco Networking Academy",
    year: "2026",
    link: "/certificates/cisco-endpoint.pdf",
    details: [
      "Learned endpoint protection and security fundamentals",
      "Covered malware, attack vectors, and system-protection techniques",
    ],
  },
  {
    name: "Introduction to Cybersecurity",
    org: "IBM SkillsBuild",
    year: "2026",
    link: "/certificates/ibm-cybersecurity.pdf",
    details: [
      "Learned cybersecurity fundamentals",
      "Covered common cyber threats and standard defenses",
    ],
  },
];

export const experience = [
  {
    role: "President",
    org: "Agraga — The Management Society, NIIT University",
    period: "Current",
    points: [
      "Lead a 50+ member student organization",
      "Manage college-wide events and cross-team coordination",
    ],
  },
  {
    role: "Social Media Head",
    org: "Her Campus at NU",
    period: "Current",
    points: ["Own content strategy and community growth for the chapter"],
  },
  {
    role: "Member, Student Affairs Committee (SAC)",
    org: "NIIT University",
    period: "Current",
    points: ["Event coordination and student-welfare initiatives"],
  },
];

export const education = [
  {
    degree: "B.Tech in Cybersecurity",
    school: "NIIT University, Neemrana, Rajasthan",
    period: "2023 — Present",
    notes: "Final-year undergraduate.",
  },

  {
    degree: "Higher Secondary (Class XII) — Science Stream",
    school: "Sommerville School, Vasundhara Enclave",
    period: "2022 — 2023",
    notes: "High school with focus on science subjects (Physics, Chemistry, Mathematics, Computer Science).",
  },

  {
    degree: "Secondary (Class X)",
    school: "Sommerville School, Vasundhara Enclave",
    period: "2020-2021",
    notes: "Secondary school with focus on foundational subjects (English, Science, Mathematics, Social Studies).",
  },
];

export const achievements = [
  {
    title: "SOC Simulation Completion",
    detail: "Completed a full SOC alert-triage and investigation simulation on TryHackMe.",
  },
  {
    title: "Society Leadership",
    detail: "Elected President of Agraga, NIIT University's Management Society (50+ members).",
  },
  {
    title: "Multi-Platform SIEM Practitioner",
    detail: "Built independent home labs across Splunk, Wazuh, and Kali Linux — not just coursework.",
  },
  {
    title: "Industry Job Simulations",
    detail: "Completed job simulations with Tata Consultancy Services and Mastercard via Forage.",
  },
];

export const navLinks = [
  { label: "About", href: "/folder/about" },
  { label: "Skills", href: "/folder/skills" },
  { label: "Projects", href: "/folder/projects" },
  { label: "Certifications", href: "/folder/certifications" },
  { label: "Experience", href: "/folder/experience" },
  { label: "Contact", href: "/folder/contact" },
];
