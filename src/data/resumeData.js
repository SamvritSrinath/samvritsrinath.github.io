export const resumeData = {
  main: {
    name: 'Samvrit Srinath',
    title: 'Software Engineer | Researcher',
    bio: 'Driven and passionate Computer Science student at UC San Diego with a focus on systems, networking, and machine learning. Experienced in developing scalable software solutions for Networked Systems and conducting cutting-edge research in Security. Actively seeking opportunities to tackle challenging problems and contribute to innovative projects.',
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
        'Algorithmic Design',
        'Graduate Intro to Machine Learning',
        'Recommender Systems',
        'Computer Architecture',
        'Parallel Computing',
        'Wireless Networks',
        'Internet Measurement',
        'AI: Search & Optimization',
        'Database Systems',
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
          duration: 'March 2025 – September 2025',
          description: [
            "Architected and developed core software components for next-generation Ethernet switches featuring advanced PHYs and loopback capabilities, contributing to Arista's cutting-edge switching portfolio.",
            'Built comprehensive switch modeling framework translating hardware register specifications into traffic forwarding behaviors, enabling accurate simulation and validation of network operations.',
            'Built the first gRPC-based device communication framework in my organization from scratch, creating the complete pipeline from diagnostic clients to infrastructure server endpoints and enabling validation support across multiple hardware platforms. with 12 APIs across 3 databases and 8 platforms, streamlining validation workflows for distributed switch environments.',
            'Optimized board autodetection algorithms, achieving 96% reduction in hardware lookup time and significantly improving system initialization performance.',
            'Developed custom Linux SMBus middleware for I2C hardware transactions, ensuring reliable register-level communication and hardware access across switch platforms.',
            'Created multi-platform testing framework with multiprocessing support for switch wiring simulation, covering all Arista switch models and accelerating CI pipeline execution.',
          ],
          technologies: ['Python', 'Go', 'gRPC', 'C', 'Linux'],
        },
        {
          role: 'Software Engineer Intern',
          duration: 'Jun 2024 – Sep 2024',
          description: [
            'Developed diagnostic software for high-speed Ethernet switches, enhancing regression efficiency by 15% through modularized and enhanced diagnostic shells.',
            "Created comprehensive performance tests for Arista's proprietary ASICs and switches, focusing on packet integrity and PRBS testing to ensure hardware quality.",
            'Built Python diagnostics for PCIe Linkup and ASIC resets, streamlining hardware initialization and reducing boot-up time.',
          ],
          technologies: ['Python', 'C++', 'C'],
        },
      ],
    },
    {
      company: 'UC San Diego',
      logo: '/assets/companies/UCSD.png',
      roles: [
        {
          role: 'Software Engineering Intern',
          duration: 'Jul 2023 – Apr 2024',
          description: [
            'Created a live Full-Stack Application using Java and JSP used by 40K users to alter and display names on websites and official documents',
            'Validated Performance and Integration of APIs across 5+ databases using SQL and Postman',
            'Emulated user behavior using Playwright to automate QA, reducing manual testing time by 30%',
            'Implemented a scalable REST API solution used in 6 applications for CRUD Operations and SSO on Student Databases',
          ],
          technologies: ['Java', 'JSP', 'SQL', 'Postman', 'Playwright'],
        },
      ],
    },
  ],
  research: [
    {
      role: 'Cloud Networking',
      description:
        'Conducting research on cloud networking infrastructure and internet measurement. Focus areas include network path analysis, data sovereignty, and foreign surveillance detection.',
      projects: ['IP-Sage', 'Country-in-the-Middle'],
    },
    {
      role: 'Computer Science Education',
      description:
        'Investigating effective methods for computer science education and curriculum development. Current focus areas are on analyzing Problem Decomposition pedagogies for Introductory Computer Science Courses',
      projects: ['CS1-LLM Experience Report'],
    },
  ],
  projects: [
    {
      title: 'CS1-LLM Experience Report',
      description:
        'An experience report on the integration of Large Language Models (LLMs) into introductory Computer Science (CS1) curricula, analyzing their impact on student learning and problem-solving methodologies. This work was presented at the ITiCSE 2024 conference.',
      technologies: ['Curriculum Design', 'Python', 'Pandas'],
      link: 'https://arxiv.org/abs/2406.15379',
      images: [
        '/assets/research/ITiCSE/LLM_workflow_image.png',
        '/assets/research/ITiCSE/copilot_comfort.png',
        '/assets/research/ITiCSE/copilot_helped_hindered.png',
        '/assets/research/ITiCSE/divergent_column_percent_small.png',
      ],
      featured: false,
      category: 'Research',
    },
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
      technologies: ['Python', 'Pandas', 'RIPE Atlas API'],
      link: '/assets/papers/gov_traceroutes_paper.pdf',
      images: [
        '/assets/projects/traceroutes/heatmap_violators.png',
        '/assets/projects/traceroutes/banjo_graph_with_outline.png',
        '/assets/projects/traceroutes/cdf_unlabeled_hops.png',
        '/assets/projects/traceroutes/definitions.png',
        '/assets/projects/traceroutes/methodology.png',
        '/assets/projects/traceroutes/types_of_targets.png',
      ],
      featured: false,
      category: 'Systems',
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
      link: '/assets/papers/OperatorLLMs_IMC25.pdf',
      images: ['/assets/projects/ip-sage/ip-sage-1.png'],
      featured: false,
      category: 'Research',
    },
    {
      title: 'HoneyLLM - LLM Deterrence and Detection Platform',
      description:
        'A canary-based framework for detecting and deterring LLM usage during virtual technical interviews. The platform implements multiple detection modalities including ASCII smuggling, canary URL visitation, solution watermarks, and OCR resistance. Built as part of CSE 291Y research, this system transforms assessment content into an active defense layer, achieving high attack success rates across multiple LLM providers.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Supabase',
        'Vercel',
        'Python',
        'PostgreSQL',
      ],
      link: 'https://interview-platform-ecru-gamma.vercel.app',
      paper: '/assets/projects/interview-site/HoneyLLM.pdf',
      images: [
        '/assets/projects/interview-site/Gemini.png',
        '/assets/projects/interview-site/Qwen.jpg',
        '/assets/projects/interview-site/Claude.jpg',
        '/assets/projects/interview-site/Cluely.jpg',
        '/assets/projects/interview-site/Results.jpg',
        '/assets/projects/interview-site/HoneyBucket.png',
        '/assets/projects/interview-site/SystemDesign.png',
      ],
      video: null, // Add video URL when available
      featured: true,
      category: 'Personal',
    },
    {
      title: 'GPU Megakernels: Optimizing LLM Performance',
      description:
        'Research on improving ThunderKittens framework for GPU megakernel optimization. Developed a runtime-managed shared-memory architecture to address memory bottlenecks and enable more efficient inter-op memory sharing. Analyzed complex kernels including Llama-8B with batching, identifying opportunities for memory movement optimization within ThunderKittens kernels.',
      technologies: [
        'CUDA',
        'C++',
        'ThunderKittens',
        'GPU Programming',
        'LLM Optimization',
      ],
      paper: '/assets/projects/gpu-kernels/Paper.pdf',
      images: [
        '/assets/projects/gpu-kernels/Delay.jpg',
        '/assets/projects/gpu-kernels/Llama.jpg',
        '/assets/projects/gpu-kernels/MatrixMult.jpg',
        '/assets/projects/gpu-kernels/ProcessorPipeline.jpg',
      ],
      video: null, // Add video URL when available
      featured: true,
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
        'Developed for Psyches of Color, a 501(c)(3) non-profit dedicated to providing culturally relevant mental health support to Black and Latinx youth. This mobile app serves as a comprehensive resource directory, connecting users with culturally competent therapists and support groups to decrease stigma and promote healing. Built with React Native and TypeScript for a cross-platform experience and powered by Firebase, the app is a vital tool for its community.',
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
  teaching: [
    {
      company: 'UC San Diego - CSE Department',
      logo: '/assets/companies/CSE_UCSD.png',
      roles: [
        {
          role: 'Education Researcher & Head Tutor (CSE 8A)',
          duration: 'July 2023 – Present',
          description: [
            'Developed novel Problem Decomposition Question Suites, analyzing student performance to enhance teaching methodologies.',
            'Led a team of 33+ instructional staff, serving as an interim TA and running lab sections for over 100 students.',
            'Designed and documented a new curriculum for a Pilot Intro to Python course, exposing students to Pandas and Pygame.',
            'Published a paper in the Computers & Education Journal on the efficacy of the new curriculum.',
          ],
          technologies: ['Python', 'Pandas', 'Pygame'],
        },
        {
          role: 'Advanced DSA Tutor (CSE 100)',
          duration: 'Dec 2023 – Mar 2025',
          description: [
            'Fostered an inclusive learning environment for complex data structures like Treaps, Disjoint Sets, and Aho-Corasick Automatons.',
            'Guided students in debugging advanced algorithms, including Huffman Trees and Graph Search, using GDB and Valgrind.',
            'Authored and validated summative assessment questions to ensure proficiency in C++ and advanced data structures.',
          ],
          technologies: ['C++', 'GDB', 'Valgrind'],
        },
        {
          role: 'Systems Programming Tutor (CSE 30)',
          duration: 'Aug 2024 – Dec 2024',
          description: [
            'Hosted office hours and review sessions for over 150 students on topics in C, Assembly, Machine Code, and Caches.',
            'Developed assignments using PrairieLearn, focusing on ARM architecture, control flow, and stack frames.',
            'Created a comprehensive debugging guide for a custom ARM emulator to improve student troubleshooting skills.',
          ],
          technologies: ['C', 'ARM', 'Assembly'],
        },
        {
          role: 'Project Mentor (CSE SPIS)',
          duration: 'July 2023 – Oct 2023',
          description: [
            'Validated 8 comprehensive labs on Python basics, recursion, image processing (PIL), and an introduction to Machine Learning.',
            'Mentored 11 student projects in Computer Vision, Recommendation Systems, and Predictive Algorithms.',
          ],
          technologies: ['Python', 'PIL', 'Scikit-learn'],
        },
      ],
    },
    {
      company: 'CSE - Peer Led Academic Cohorts (PACE)',
      logo: '/assets/companies/CSE_PACE.png',
      roles: [
        {
          role: 'Lead Peer Mentor (CSE 89)',
          duration: 'August 2023 – Present',
          description: [
            'Organized seminars and served as a key resource for incoming first-year and transfer students.',
            'Mentored over 200 students on course selection, internship strategies, and career paths in various CS domains.',
            'Developed and delivered lesson plans on the foundations of AI and Image Generation.',
          ],
          technologies: [],
        },
      ],
    },
  ],
  clubs: [
    {
      name: 'Triton Software Engineering',
      role: 'SWE/Product Manager',
      logo: '/assets/clubs/tse.png',
      website: 'https://tritonse.github.io/',
    },
    {
      name: 'ACM AI @ UCSD',
      role: 'Technical Events Lead',
      logo: '/assets/clubs/acm-ai.png',
      website: 'https://ai.acmucsd.com/',
    },
    {
      name: 'UCSD Computer Science & Engineering Society',
      role: 'President, Software Developer & PR Chair',
      logo: '/assets/clubs/cses.png',
      website: 'https://csesucsd.com/',
    },
    {
      name: 'Triton Unmanned Aerial Systems',
      role: 'Computer Vision Developer - Saliency',
      logo: '/assets/clubs/tuas.png',
      website: 'https://tritonuas.com/',
    },
  ],
};
