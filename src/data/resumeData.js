export const resumeData = {
  main: {
    name: "Samvrit Srinath",
    title: "Software Engineer | Researcher",
    bio: "Driven and passionate Computer Science student at UC San Diego with a focus on systems, networking, and machine learning. Experienced in developing scalable software solutions and conducting cutting-edge research. Actively seeking opportunities to tackle challenging problems and contribute to innovative projects.",
    contact: {
      email: "sasrinath@ucsd.edu",
      phone: "628-232-1824",
      linkedin: "https://linkedin.com/in/samvrit-srinath",
      github: "https://github.com/SamvritSrinath",
    },
  },
  about: {
    education: {
      university: "University of California, San Diego",
      degree: "B.S./M.S. in Computer Science",
      duration: "September 2022 – June 2026",
      details: "Regents Scholar (Top 1% of incoming freshman), GPA: 3.97/4.00",
      courses: [
        "Advanced Data Structures", "Algorithms", "Graduate Intro to ML", "Recommender Systems",
        "Computer Architecture", "Parallel Computing", "Wireless Networks", "Internet Measurement",
        "AI: Search & Optimization", "Databases", "Software Engineering", "Scalable Analytics"
      ],
    },
    skills: {
      // ... skills data remains the same
    },
    experience: [
      {
        role: "Returning Software Engineering Intern",
        company: "Arista Networks",
        duration: "March 2025 – June 2025",
        description: [],
        technologies: ["Go", "Python", "C++", "Docker"],
      },
      {
        role: "Network Security Researcher",
        company: "Center for Networked Systems",
        duration: "June 2023 – Present",
        description: [
          "Developing a scalable research application in Python and Go to determine ownership of 238M IPv4 Addresses.",
          "Leveraging Google BigQuery and GCP to amass and process 1.9TB of multi-protocol data with SQL queries.",
          "Integrating a custom GPT-o1 Model into an end-to-end pipeline to reduce data retrieval latency.",
          "Designed a Python-based analytical framework to identify vulnerabilities in government networks.",
        ],
        technologies: ["Python", "Go", "Google Cloud (GCP)", "BigQuery", "SQL"],
      },
      {
        role: "Advanced Data Structures & Algorithms Tutor",
        company: "UC San Diego - CSE",
        duration: "December 2023 – March 2025",
        description: [
          "Guided students in implementing and debugging complex data structures and algorithms using GDB and Valgrind.",
          "Developed assessment questions to evaluate proficiency in C++ and advanced data structures.",
        ],
        technologies: ["C++", "GDB", "Valgrind"],
      },
      {
        role: "Software Engineering Intern",
        company: "Arista Networks",
        duration: "June 2024 – September 2024",
        description: [
          "Developed diagnostic software to validate high-speed Ethernet switch performance using Go for cloud regression testing.",
          "Modularized and enhanced diagnostic shell for device bring-up, boosting regression efficiency by 20%.",
          "Implemented cross-device telemetry audits to verify hardware consistency, reducing boot-up time by 50%.",
        ],
        technologies: ["Go", "Python", "Bash", "gRPC"],
      },
      {
        role: "Full Stack Software Developer",
        company: "UC San Diego - Information Technology Services",
        duration: "July 2023 – April 2024",
        description: [
          "Created a live Full-Stack Application in Java and JSP used by 40K users for name alterations.",
          "Validated API performance and integration across 5+ databases using SQL and Postman.",
          "Automated QA with Playwright, reducing manual testing time by 30%.",
        ],
        technologies: ["Java", "JSP", "SQL", "Playwright", "Postman"],
      },
    ],
  },
  projects: [
    {
      title: "Developer Journal Web App",
      description: "Led a team of 10 to develop an all-in-one task hub, journal, and file storage system for developers. Created a local-first Progressive Web App using Electron and SQLite. Implemented a comprehensive CI/CD pipeline with GitHub Actions, Playwright, and Prettier.",
      technologies: ["JavaScript", "Electron", "Playwright", "SQLite3", "HTML/CSS"],
      link: "https://github.com/cse110-sp24-group7/cse110-sp24-group7",
      image: "https://placehold.co/600x400/1E1E1E/FFFFFF?text=Project+1",
    },
    {
      title: "Inventory Processing System",
      description: "Developed a full-stack application for a 501(c)(3) non-profit to manage furniture requests and inventory for veterans. Implemented a Firebase backend for authentication and tiered roles, and a responsive frontend with React and Next.js connected to MongoDB.",
      technologies: ["React", "Next.js", "TypeScript", "Firebase", "MongoDB"],
      link: "https://github.com/TritonSE/PAP-Inventory-Processing",
      image: "https://placehold.co/600x400/1E1E1E/FFFFFF?text=Project+2",
    },
    {
      title: "Political Sentiment Text Classifier",
      description: "Deployed BERT Transformers to predict and analyze political sentiment from documents with over 85% accuracy. Implemented data processing, visualizations, and k-fold cross-validation to mitigate overfitting using PyTorch and Numpy.",
      technologies: ["PyTorch", "Numpy", "Tensorflow", "Matplotlib"],
      link: "https://github.com/acmucsd-projects/fa22-ai-team-2",
      image: "https://placehold.co/600x400/1E1E1E/FFFFFF?text=Project+3",
    },
  ],
};