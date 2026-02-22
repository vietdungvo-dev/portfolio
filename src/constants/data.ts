

export interface SocialLink {
    label: string;
    href: string;
    icon: "github" | "linkedin" | "mail";
}

export interface SkillCategory {
    category: string;
    icon: string;
    skills: string[];
}

export interface Project {
    title: string;
    role: string;
    tech: string[];
    achievement: string;
}

export interface Education {
    school: string;
    degree: string;
    specialization: string;
}

export interface Certificate {
    name: string;
    issuer: string;
    url: string;
    image: string;
}

export interface CVData {
    profile: {
        name: string;
        role: string;
        tagline: string;
        summary: string;
        avatar: string;
        links: SocialLink[];
    };
    skills: SkillCategory[];
    projects: Project[];
    certificates: Certificate[];
    education: Education;
}

const cvData: CVData = {
    // ---------------------------------------------------------------------------
    // Profile
    // ---------------------------------------------------------------------------
    profile: {
        name: "Vo Viet Dung",
        role: "Software Engineer (AI & Front-end)",
        tagline:
            "Bridging the gap between Complex AI Algorithms and Intuitive User Interfaces.",
        summary:
            "Dynamic Artificial Intelligence graduate with a strong algorithmic foundation and proven expertise in modern Front-end development. Passionate about architecting high-performance systems and transforming complex AI models into seamless web applications.",
        avatar: "/images/avatar.png",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/vietdungvo-dev",
                icon: "github",
            },
            {
                label: "LinkedIn",
                href: "https://linkedin.com/in/vietdungvo",
                icon: "linkedin",
            },
            {
                label: "Email",
                href: "mailto:vovietdung2001300@gmail.com",
                icon: "mail",
            },
        ],
    },

    // ---------------------------------------------------------------------------
    // Skills
    // ---------------------------------------------------------------------------
    skills: [
        {
            category: "Programming Languages",
            icon: "💻",
            skills: ["Python", "JavaScript", "TypeScript", "C/C++", "SQL"],
        },
        {
            category: "AI & Machine Learning",
            icon: "🧠",
            skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning"],
        },
        {
            category: "Front-end Development",
            icon: "🎨",
            skills: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Shadcn/UI"],
        },
        {
            category: "Tools & DevOps",
            icon: "⚙️",
            skills: ["Git/GitHub", "Bun", "Node.js", "Vercel", "RESTful APIs", "Postman", "Docker"],
        },
    ],

    // ---------------------------------------------------------------------------
    // Projects
    // ---------------------------------------------------------------------------
    projects: [
        {
            title: "Public Administration Services System (PASCS)",
            role: "Front-end & AI Developer",
            tech: [
                "Next.js",
                "React",
                "Bun",
                "Tailwind CSS",
                "Vector Database",
                ".NET",
                "Docker",
            ],
            achievement:
                "Engineered an intelligent AI Chatbot using Vector DB to provide automated admin consultations. Architected management dashboards with shadcn/ui.",
        },
        {
            title: "HIV Treatment Support Platform",
            role: "Front-end Developer",
            tech: ["React.js", "Vite", "TypeScript", "Tailwind CSS"],
            achievement:
                "Developed client-side logic for doctor-patient communication and real-time prescription planning.",
        },
        {
            title: "KOI Fish Delivery Logistics System",
            role: "Front-end Developer",
            tech: ["React.js", "Leaflet.js", "Shadcn/UI"],
            achievement:
                "Integrated Leaflet.js for shortest-path calculation and shipping fee estimation.",
        },
    ],

    // ---------------------------------------------------------------------------
    // Certificates
    // ---------------------------------------------------------------------------
    certificates: [
        {
            name: "Python for Everybody",
            issuer: "University of Michigan",
            url: "https://coursera.org/share/333e466d2eb3b59eb42980e200305de4",
            image: "/certificates/Python for Everybody.jpeg",
        },
        {
            name: "Software Development Lifecycle",
            issuer: "University of Minnesota",
            url: "https://coursera.org/share/c106efa30a01385ccf15a064c6d37eae",
            image: "/certificates/Sofware Development Lifecycle.jpeg",
        },
        {
            name: "User Experience Research and Design",
            issuer: "University of Michigan",
            url: "https://coursera.org/share/adc73047cd6c18600ce43829734d7dd4",
            image: "/certificates/User Experience Research and Design.jpeg",
        },
        {
            name: "CertNexus Certified Ethical Emerging Technologist",
            issuer: "CertNexus",
            url: "https://coursera.org/share/8b00ab31822811a1e4ba9bfbf29a45d1",
            image: "/certificates/CertNexus Certified Ethical Emerging Technologist.jpeg",
        },
        {
            name: "Project Management Principles and Practices",
            issuer: "University of California, Irvine",
            url: "https://coursera.org/share/17d6fc61d2af113b7e2b2761b0c27a2c",
            image: "/certificates/Project Management Principles and Practices.jpeg",
        },
        {
            name: "Computer Communications",
            issuer: "University of Colorado System",
            url: "https://coursera.org/share/ba3b9cc9821e2d550fc90c1dabb758fe",
            image: "/certificates/Computer Communications.jpeg",
        },
    ],

    // ---------------------------------------------------------------------------
    // Education
    // ---------------------------------------------------------------------------
    education: {
        school: "FPT University",
        degree: "Bachelor of Engineering in Software Engineering",
        specialization: "Specialization in Artificial Intelligence",
    },
};

export default cvData;
