export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: "Full-time" | "Part-time" | "Contract" | "Internship";
    experience: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
}

export const jobs: Job[] = [
    {
        id: "electrical-automation-engineer",
        title: "Electrical & Automation Engineer",
        department: "Engineering",
        location: "India",
        type: "Full-time",
        experience: "3-5 years",
        description: "We are seeking a skilled Electrical & Automation Engineer to design, develop, and implement automation solutions for industrial systems. You will work on cutting-edge projects involving PLCs, SCADA systems, and electrical control systems.",
        responsibilities: [
            "Design and develop electrical control systems and automation solutions",
            "Program PLCs, HMIs, and SCADA systems for industrial applications",
            "Perform system integration, testing, and commissioning",
            "Create technical documentation including schematics and wiring diagrams",
            "Troubleshoot and resolve electrical and automation issues",
            "Collaborate with cross-functional teams to deliver projects on time"
        ],
        requirements: [
            "Bachelor's degree in Electrical/Electronics Engineering or related field",
            "3-5 years of experience in industrial automation",
            "Proficiency in PLC programming (Siemens, Allen Bradley, etc.)",
            "Experience with SCADA and HMI development",
            "Strong knowledge of electrical standards and safety protocols",
            "Excellent problem-solving and communication skills"
        ],
        benefits: [
            "Competitive salary and performance bonuses",
            "Health insurance and wellness programs",
            "Professional development opportunities",
            "Flexible work arrangements"
        ]
    },
    {
        id: "hr-executive",
        title: "HR Executive",
        department: "Human Resources",
        location: "India",
        type: "Full-time",
        experience: "2-4 years",
        description: "Join our HR team to manage recruitment, employee relations, and HR operations. You will play a key role in building our company culture and supporting our growing team.",
        responsibilities: [
            "Manage end-to-end recruitment process",
            "Handle employee onboarding and offboarding",
            "Maintain HR records and documentation",
            "Support payroll and benefits administration",
            "Address employee queries and grievances",
            "Organize employee engagement activities"
        ],
        requirements: [
            "Bachelor's degree in HR Management or related field",
            "2-4 years of experience in HR operations",
            "Knowledge of labor laws and HR best practices",
            "Excellent interpersonal and communication skills",
            "Proficiency in HRIS and MS Office",
            "Strong organizational and multitasking abilities"
        ],
        benefits: [
            "Competitive salary package",
            "Health and life insurance",
            "Learning and development programs",
            "Work-life balance initiatives"
        ]
    },
    {
        id: "bdm-staffing",
        title: "BDM - Staffing",
        department: "Business Development",
        location: "India",
        type: "Full-time",
        experience: "4-6 years",
        description: "We are looking for an experienced Business Development Manager to lead our staffing vertical. You will be responsible for acquiring new clients and expanding our staffing solutions business.",
        responsibilities: [
            "Identify and pursue new business opportunities in staffing",
            "Build and maintain relationships with key clients",
            "Develop and execute sales strategies to achieve targets",
            "Prepare proposals and negotiate contracts",
            "Collaborate with recruitment team to fulfill client requirements",
            "Monitor market trends and competitor activities"
        ],
        requirements: [
            "Bachelor's degree in Business or related field",
            "4-6 years of experience in staffing/recruitment sales",
            "Proven track record of meeting sales targets",
            "Strong networking and relationship-building skills",
            "Excellent negotiation and presentation abilities",
            "Understanding of IT and engineering staffing markets"
        ],
        benefits: [
            "Attractive base salary plus commission",
            "Health insurance and retirement benefits",
            "Career advancement opportunities",
            "Travel allowances"
        ]
    },
    {
        id: "business-development-manager",
        title: "Business Development Manager",
        department: "Business Development",
        location: "India",
        type: "Full-time",
        experience: "5-8 years",
        description: "Lead our business development initiatives and drive growth across multiple verticals. You will be instrumental in expanding our market presence and building strategic partnerships.",
        responsibilities: [
            "Develop and implement business development strategies",
            "Identify new market opportunities and partnerships",
            "Lead sales presentations and client meetings",
            "Negotiate and close high-value deals",
            "Build and mentor the business development team",
            "Report on market trends and sales performance"
        ],
        requirements: [
            "MBA or Bachelor's degree in Business Administration",
            "5-8 years of experience in B2B business development",
            "Strong leadership and team management skills",
            "Excellent communication and negotiation abilities",
            "Experience in engineering or technical services industry",
            "Proven track record of revenue growth"
        ],
        benefits: [
            "Competitive salary with performance incentives",
            "Comprehensive health coverage",
            "Leadership development programs",
            "Flexible working options"
        ]
    },
    {
        id: "draftsman-piping-design",
        title: "Draftsman - Piping Design",
        department: "Design",
        location: "India",
        type: "Full-time",
        experience: "2-5 years",
        description: "Create detailed piping drawings and layouts for industrial projects. You will work with our design engineering team to deliver high-quality technical documentation.",
        responsibilities: [
            "Prepare detailed piping drawings using AutoCAD and 3D modeling software",
            "Create isometric drawings and piping layouts",
            "Develop bill of materials for piping systems",
            "Coordinate with design engineers on technical specifications",
            "Maintain drawing database and revision control",
            "Ensure compliance with industry standards and codes"
        ],
        requirements: [
            "Diploma in Mechanical/Chemical Engineering or related field",
            "2-5 years of experience in piping design and drafting",
            "Proficiency in AutoCAD, SP3D, or similar software",
            "Knowledge of piping standards (ASME, ANSI)",
            "Understanding of P&IDs and piping specifications",
            "Attention to detail and accuracy"
        ],
        benefits: [
            "Competitive salary",
            "Health insurance benefits",
            "Skill development training",
            "Career growth opportunities"
        ]
    },
    {
        id: "hr-admin-trainee",
        title: "HR Admin Trainee",
        department: "Human Resources",
        location: "India",
        type: "Internship",
        experience: "0-1 years",
        description: "Start your HR career with us! This trainee position offers hands-on experience in HR administration and operations while learning from experienced professionals.",
        responsibilities: [
            "Assist in recruitment and screening processes",
            "Support employee onboarding activities",
            "Maintain HR databases and employee records",
            "Help organize training and company events",
            "Handle basic employee queries",
            "Prepare HR reports and documentation"
        ],
        requirements: [
            "Bachelor's degree in HR, Business, or related field",
            "Strong interest in Human Resources",
            "Good communication skills in English",
            "Proficiency in MS Office applications",
            "Eager to learn and grow",
            "Organized and detail-oriented"
        ],
        benefits: [
            "Competitive stipend",
            "Mentorship from senior HR professionals",
            "Opportunity for full-time conversion",
            "Certificate upon completion"
        ]
    },
    {
        id: "inside-sales-specialist",
        title: "Inside Sales Specialist",
        department: "Sales",
        location: "India",
        type: "Full-time",
        experience: "1-3 years",
        description: "Drive sales through inside sales activities including lead generation, qualification, and conversion. You will be a key contributor to our revenue growth.",
        responsibilities: [
            "Generate and qualify leads through various channels",
            "Conduct sales calls and product demonstrations",
            "Manage sales pipeline using CRM tools",
            "Achieve monthly and quarterly sales targets",
            "Collaborate with marketing on lead generation campaigns",
            "Provide market feedback and customer insights"
        ],
        requirements: [
            "Bachelor's degree in any discipline",
            "1-3 years of experience in inside sales or telesales",
            "Excellent verbal communication skills",
            "Experience with CRM software (Salesforce, HubSpot)",
            "Goal-oriented and self-motivated",
            "Ability to handle rejection and stay positive"
        ],
        benefits: [
            "Base salary plus attractive incentives",
            "Health insurance",
            "Sales training and certifications",
            "Fast-track career growth"
        ]
    },
    {
        id: "design-engineer",
        title: "Design Engineer",
        department: "Engineering",
        location: "India",
        type: "Full-time",
        experience: "3-6 years",
        description: "Design and develop mechanical systems and components for industrial applications. You will work on innovative projects and contribute to product development.",
        responsibilities: [
            "Create detailed mechanical designs using CAD software",
            "Perform engineering calculations and simulations",
            "Develop prototypes and conduct testing",
            "Prepare technical specifications and documentation",
            "Collaborate with manufacturing on design for production",
            "Ensure designs meet quality and safety standards"
        ],
        requirements: [
            "Bachelor's degree in Mechanical Engineering",
            "3-6 years of experience in mechanical design",
            "Proficiency in SolidWorks, AutoCAD, or similar",
            "Experience with FEA and simulation tools",
            "Knowledge of manufacturing processes",
            "Strong analytical and problem-solving skills"
        ],
        benefits: [
            "Competitive compensation package",
            "Health and wellness benefits",
            "Professional certification support",
            "Innovative work environment"
        ]
    },
    {
        id: "tech-support-specialist",
        title: "Tech Support Specialist",
        department: "Technology",
        location: "India",
        type: "Full-time",
        experience: "1-3 years",
        description: "Provide technical support to internal users and clients. You will troubleshoot issues, maintain systems, and ensure smooth IT operations.",
        responsibilities: [
            "Respond to technical support requests via phone, email, and chat",
            "Troubleshoot hardware, software, and network issues",
            "Install and configure computer systems and applications",
            "Maintain IT documentation and knowledge base",
            "Escalate complex issues to senior technicians",
            "Conduct user training on IT tools and systems"
        ],
        requirements: [
            "Bachelor's degree in IT, Computer Science, or related field",
            "1-3 years of experience in technical support",
            "Knowledge of Windows, Linux, and networking",
            "Familiarity with ticketing systems",
            "Excellent communication and customer service skills",
            "A+ or similar certifications preferred"
        ],
        benefits: [
            "Competitive salary",
            "Health insurance",
            "IT certification sponsorship",
            "Shift allowances"
        ]
    },
    {
        id: "mechanical-engineer",
        title: "Mechanical Engineer",
        department: "Engineering",
        location: "India",
        type: "Full-time",
        experience: "3-5 years",
        description: "Join our engineering team to work on exciting mechanical engineering projects. You will design, analyze, and oversee the manufacturing of mechanical systems.",
        responsibilities: [
            "Design mechanical systems and components",
            "Conduct stress analysis and thermal simulations",
            "Prepare detailed engineering drawings",
            "Oversee prototype development and testing",
            "Collaborate with cross-functional engineering teams",
            "Ensure compliance with engineering standards"
        ],
        requirements: [
            "Bachelor's degree in Mechanical Engineering",
            "3-5 years of relevant experience",
            "Proficiency in CAD/CAM software",
            "Experience with ANSYS or similar analysis tools",
            "Knowledge of manufacturing processes",
            "Strong technical and analytical skills"
        ],
        benefits: [
            "Competitive salary package",
            "Medical and life insurance",
            "Continuous learning opportunities",
            "Collaborative work culture"
        ]
    },
    {
        id: "plant-engineering-manager",
        title: "Plant Engineering Manager",
        department: "Operations",
        location: "India",
        type: "Full-time",
        experience: "10+ years",
        description: "Lead the plant engineering function and manage all aspects of facility maintenance, projects, and engineering operations. This is a senior leadership role.",
        responsibilities: [
            "Manage plant engineering and maintenance teams",
            "Oversee capital projects and plant improvements",
            "Develop and manage engineering budgets",
            "Ensure plant safety and regulatory compliance",
            "Implement preventive maintenance programs",
            "Drive operational efficiency and cost reduction"
        ],
        requirements: [
            "Bachelor's degree in Engineering; MBA preferred",
            "10+ years of experience in plant engineering",
            "Strong leadership and team management skills",
            "Experience with facility management and capital projects",
            "Knowledge of safety regulations and compliance",
            "Excellent project management abilities"
        ],
        benefits: [
            "Executive-level compensation",
            "Comprehensive health coverage for family",
            "Performance bonuses",
            "Leadership development programs"
        ]
    },
    {
        id: "robotics-engineer",
        title: "Robotics Engineer",
        department: "Engineering",
        location: "India",
        type: "Full-time",
        experience: "3-6 years",
        description: "Design and develop robotic systems for industrial automation. You will work on cutting-edge robotics projects and push the boundaries of automation technology.",
        responsibilities: [
            "Design and program industrial robotic systems",
            "Develop robot control algorithms and motion planning",
            "Integrate robotics with sensors and vision systems",
            "Conduct testing and performance optimization",
            "Create technical documentation and user guides",
            "Collaborate with clients on custom solutions"
        ],
        requirements: [
            "Bachelor's/Master's in Robotics, Mechatronics, or related field",
            "3-6 years of experience in robotics development",
            "Proficiency in robot programming (ABB, FANUC, KUKA)",
            "Experience with ROS and Python/C++",
            "Knowledge of machine vision and sensors",
            "Strong problem-solving and innovation skills"
        ],
        benefits: [
            "Competitive salary",
            "Health and wellness benefits",
            "Conference and training sponsorship",
            "Innovation bonuses"
        ]
    },
    {
        id: "software-engineer",
        title: "Software Engineer",
        department: "Technology",
        location: "India",
        type: "Full-time",
        experience: "2-5 years",
        description: "Build and maintain software applications that power our engineering solutions. You will work with modern technologies and contribute to exciting projects.",
        responsibilities: [
            "Develop and maintain web and desktop applications",
            "Write clean, maintainable, and efficient code",
            "Participate in code reviews and technical discussions",
            "Collaborate with product team on requirements",
            "Debug and troubleshoot software issues",
            "Stay updated with latest technologies and best practices"
        ],
        requirements: [
            "Bachelor's degree in Computer Science or related field",
            "2-5 years of software development experience",
            "Proficiency in JavaScript/TypeScript, Python, or Java",
            "Experience with React, Node.js, or similar frameworks",
            "Knowledge of databases and API development",
            "Strong problem-solving and teamwork skills"
        ],
        benefits: [
            "Competitive salary package",
            "Health insurance and wellness benefits",
            "Remote work flexibility",
            "Learning and development budget"
        ]
    },
    {
        id: "technical-recruiter",
        title: "Technical Recruiter",
        department: "Human Resources",
        location: "India",
        type: "Full-time",
        experience: "2-4 years",
        description: "Source and recruit top technical talent for our engineering and technology teams. You will build our talent pipeline and help grow our technical workforce.",
        responsibilities: [
            "Source candidates through various channels",
            "Screen and interview technical candidates",
            "Manage full-cycle recruitment process",
            "Build talent pipeline for critical roles",
            "Partner with hiring managers on requirements",
            "Track recruitment metrics and optimize processes"
        ],
        requirements: [
            "Bachelor's degree in HR or related field",
            "2-4 years of technical recruitment experience",
            "Understanding of engineering and IT roles",
            "Experience with ATS and sourcing tools",
            "Strong communication and negotiation skills",
            "Ability to assess technical competencies"
        ],
        benefits: [
            "Competitive base salary plus incentives",
            "Health insurance benefits",
            "Career growth in talent acquisition",
            "Flexible working arrangements"
        ]
    }
];

export const getDepartments = () => {
    const departments = [...new Set(jobs.map(job => job.department))];
    return departments.sort();
};

export const getLocations = () => {
    const locations = [...new Set(jobs.map(job => job.location))];
    return locations.sort();
};

export const getJobById = (id: string) => {
    return jobs.find(job => job.id === id);
};
