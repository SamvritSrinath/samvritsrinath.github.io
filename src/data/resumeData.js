export const resumeData = {
  main: {
    name: 'Samvrit Srinath',
    title: 'Software Engineer | Researcher',
    bio: 'Driven and passionate Computer Science student at UC San Diego with a focus on systems, networking, and machine learning. Experienced in developing scalable software solutions and conducting cutting-edge research. Actively seeking opportunities to tackle challenging problems and contribute to innovative projects.',
    contact: {
      email: 'sasrinath@ucsd.edu',
      phone: '628-232-1824',
      linkedin: 'https://linkedin.com/in/samvrit-srinath',
      github: 'https://github.com/SamvritSrinath',
    },
  },
  about: {
    education: {
      university: 'University of California, San Diego',
      degree: 'B.S./M.S. in Computer Science',
      duration: 'September 2022 – June 2026',
      details: 'Regents Scholar (Top 1% of incoming freshman), GPA: 3.97/4.00',
      courses: [
        'Advanced Data Structures',
        'Algorithms',
        'Graduate Intro to ML',
        'Recommender Systems',
        'Computer Architecture',
        'Parallel Computing',
        'Wireless Networks',
        'Internet Measurement',
        'AI: Search & Optimization',
        'Databases',
        'Software Engineering',
        'Scalable Analytics',
      ],
    },
    skills: {
      // ... skills data remains the same
    },
  },
  workExperience: [
    {
      company: 'Arista Networks',
      logo: '/assets/companies/Arista.png',
      roles: [
        {
          role: 'Platform SWE Intern (Co-op)',
          duration: 'Jan 2025 – Present',
          description: [
            "Continuing my work on platform software, focusing on enhancing the scalability and reliability of Arista's core networking products.",
          ],
        },
        {
          role: 'Software Engineer Intern',
          duration: 'Jun 2024 – Sep 2024',
          description: [
            'Developed diagnostic software for high-speed Ethernet switches, enhancing regression efficiency by 15% through modularized and enhanced diagnostic shells.',
            "Created comprehensive performance tests for Arista's proprietary ASICs and switches, focusing on packet integrity and PRBS testing to ensure hardware quality.",
            'Built Python diagnostics for PCIe Linkup and ASIC resets, streamlining hardware initialization and reducing boot-up time.',
          ],
        },
      ],
      technologies: ['Go', 'Python', 'C++', 'Docker', 'gRPC'],
    },
    {
      company: 'UC San Diego',
      logo: '/assets/companies/UCSD.png',
      roles: [
        {
          role: 'Software Engineering Intern',
          duration: 'Jul 2023 – Apr 2024',
          description: [
            'Developed a full-stack Java application used by over 40,000 students and staff to manage social identity preferences across university platforms.',
            'Engineered a robust backend with Java and JSP, integrating with multiple university databases and ensuring data consistency.',
          ],
        },
        {
          role: 'CSE Instructional Assistant',
          duration: 'Aug 2023 – Present',
          description: [
            'Served as a teaching assistant for core computer science courses, including Introduction to Programming, Advanced Data Structures, and Computer Organization.',
            'Mentored over 100 students per quarter, providing guidance on complex topics and fostering a deeper understanding of computer science fundamentals.',
          ],
        },
      ],
      technologies: [
        'Java',
        'JSP',
        'SQL',
        'Playwright',
        'Postman',
        'C++',
        'GDB',
        'Valgrind',
      ],
    },
  ],
  research: [
    {
      role: 'Cloud Networking Researcher',
      description:
        'Conducting research on cloud networking infrastructure and internet measurement. Focus areas include network path analysis, data sovereignty, and foreign surveillance detection.',
      projects: ['IP-Sage', 'Country-in-the-Middle'],
      technologies: ['Python'],
    },
    {
      role: 'Design Optimization Researcher',
      description:
        'Researching optimization algorithms and their applications in various domains.',
      projects: [],
      technologies: ['Python', 'Optimization Algorithms'],
    },
    {
      role: 'CS Education Researcher',
      description:
        'Investigating effective methods for computer science education and curriculum development.',
      projects: [],
      technologies: ['Educational Research', 'Curriculum Design'],
    },
  ],
  projects: [
    {
      title: 'LomaVerse',
      description:
        'A differentiable N-body gravitational simulator built in the Loma programming language. By leveraging automatic differentiation, it derives equations of motion from a Hamiltonian formulation, enabling a physics-driven approach to simulating celestial mechanics. The project supports multiple numerical integrators and is validated through modeling diverse celestial configurations, from stable solar systems to Lagrange points.',
      technologies: ['Loma', 'Python', 'Three.js', 'Flask'],
      link: 'https://github.com/SamvritSrinath/LomaVerse',
      images: [
        '/assets/projects/lomaverse/SolarSystem3D.jpg',
        '/assets/projects/lomaverse/Binary3D.jpg',
        '/assets/projects/lomaverse/Chaos3D.jpg',
        '/assets/projects/lomaverse/UI.jpg',
        '/assets/projects/lomaverse/SolarSystem2D.jpg',
        '/assets/projects/lomaverse/Binary2D.jpg',
        '/assets/projects/lomaverse/Chaos2D.jpg',
      ],
      featured: true,
      category: 'Personal',
    },
    {
      title: 'Country-in-the-Middle',
      description:
        "An in-depth internet measurement study to identify countries that lie on the network paths between users and their governments (Country-in-the-Middle). This research, part of UCSD's Early Research Scholars Program (ERSP), involved analyzing over 9,000 IP-level paths to government websites from 11 countries to understand issues of data sovereignty and foreign surveillance.",
      technologies: ['Python', 'Pandas', 'Scapy', 'RIPE Atlas'],
      link: 'https://www.samvritsrinath.com/gov_traceroutes_paper.pdf',
      images: [
        '/assets/projects/traceroutes/heatmap_violators.png',
        '/assets/projects/traceroutes/banjo_graph_with_outline.png',
        '/assets/projects/traceroutes/cdf_unlabeled_hops.png',
        '/assets/projects/traceroutes/definitions.png',
        '/assets/projects/traceroutes/methodology.png',
        '/assets/projects/traceroutes/types_of_targets.png',
      ],
      featured: false,
      category: 'Research',
    },
    {
      title: 'IP-Sage',
      description:
        "IP-Sage is an advanced, LLM-powered command-line tool designed to automate the complex process of identifying the operators of IP addresses. By leveraging the analytical power of large language models like GPT and Claude, IP-Sage can parse vast amounts of network data to deliver accurate and timely operator information. This tool is invaluable for network security analysts, researchers, and anyone needing to understand the landscape of the internet's infrastructure.",
      technologies: [
        'Python',
        'OpenAI API',
        'Claude API',
        'Go',
        'Google Cloud (GCP)',
        'BigQuery',
        'SQL',
      ],
      link: 'https://github.com/SamvritSrinath/IP-Sage',
      images: ['/assets/projects/ip-sage/ip-sage-1.png'],
      featured: false,
      category: 'Research',
    },
    {
      title: 'PAP Inventory Processing',
      description:
        'This full-stack application was developed for Patriots and Paws, a 501(c)(3) non-profit dedicated to providing home furnishings to veterans. The system streamlines the management of furniture requests and inventory, replacing a cumbersome manual process. It features a secure Firebase backend with role-based authentication for administrators and volunteers, and a responsive, intuitive frontend built with React and Next.js, all connected to a MongoDB database for robust data management.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Firebase', 'MongoDB'],
      link: 'https://github.com/TritonSE/PAP-Inventory-Processing',
      images: [
        '/assets/projects/pap-inventory/pap-inventory-1.jpg',
        '/assets/projects/pap-inventory/pap-inventory-2.jpg',
        '/assets/projects/pap-inventory/pap-inventory-3.jpg',
        '/assets/projects/pap-inventory/pap-inventory-4.jpg',
      ],
      featured: true,
      category: 'Club',
    },
    {
      title: 'Psyches of Color App',
      description:
        'A mobile application designed to be a comprehensive mental health resource directory for people of color. Recognizing the unique challenges faced by this community, the app provides a curated list of culturally competent therapists, support groups, and mental health resources. Built with React Native and TypeScript for a cross-platform experience, and powered by Firebase for its backend, the app is a vital tool for connecting users with the support they need. It is publicly available on the Google Play Store.',
      technologies: ['React Native', 'TypeScript', 'Firebase'],
      link: 'https://github.com/TritonSE/Psyches-Of-Color-App',
      images: [
        '/assets/projects/psyches-of-color/psyches-of-color-1.jpg',
        '/assets/projects/psyches-of-color/psyches-of-color-2.jpg',
        '/assets/projects/psyches-of-color/psyches-of-color-3.jpg',
        '/assets/projects/psyches-of-color/psyches-of-color-4.jpg',
      ],
      featured: true,
      category: 'Club',
    },
    {
      title: "Parkinson's Disease Predictor",
      description:
        "A machine learning project that analyzes social and medical factors to predict the likelihood of Parkinson's disease. This project involved a deep dive into data cleaning, feature engineering, and model selection, ultimately achieving 77% accuracy with Logistic Regression and Decision Trees. The project underscores the potential of machine learning in healthcare to identify at-risk populations and enable early intervention.",
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      link: 'https://github.com/COGS108/Group057-FA24',
      images: [
        "https://placehold.co/600x400/1E1E1E/FFFFFF?text=Parkinson's+Predictor",
      ],
      category: 'Personal',
    },
    {
      title: 'Developer Journal Web App',
      description:
        'Led a team of 10 to develop an all-in-one task hub, journal, and file storage system for developers. Created a local-first Progressive Web App using Electron and SQLite. Implemented a comprehensive CI/CD pipeline with GitHub Actions, Playwright, and Prettier.',
      technologies: [
        'JavaScript',
        'Electron',
        'Playwright',
        'SQLite3',
        'HTML/CSS',
      ],
      link: 'https://github.com/cse110-sp24-group7/cse110-sp24-group7',
      images: ['https://placehold.co/600x400/1E1E1E/FFFFFF?text=Dev+Journal'],
      category: 'Personal',
    },
    {
      title: 'Political Sentiment Text Classifier',
      description:
        'Deployed BERT Transformers to predict and analyze political sentiment from documents with over 85% accuracy. Implemented data processing, visualizations, and k-fold cross-validation to mitigate overfitting using PyTorch and Numpy.',
      technologies: ['PyTorch', 'Numpy', 'Tensorflow', 'Matplotlib'],
      link: 'https://github.com/acmucsd-projects/fa22-ai-team-2',
      images: [
        'https://placehold.co/600x400/1E1E1E/FFFFFF?text=Sentiment+Classifier',
      ],
      category: 'Club',
    },
  ],
  clubs: [
    {
      name: 'Triton Software Engineering',
      role: 'SWE/Product Manager',
      logo: '/assets/clubs/tse.png',
    },
    {
      name: 'ACM AI @ UCSD',
      role: 'Technical Events Lead',
      logo: '/assets/clubs/acm-ai.png',
    },
    {
      name: 'UCSD Computer Science & Engineering Society',
      role: 'President, Software Developer & PR Chair',
      logo: '/assets/clubs/cses.png',
    },
    {
      name: 'Triton Unmanned Aerial Systems',
      role: 'Computer Vision Developer',
      logo: '/assets/clubs/tuas.png',
    },
  ],
};
