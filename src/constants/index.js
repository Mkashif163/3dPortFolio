import voltonic from "../assets/images/voltonic.png";
import Odacious from "../assets/images/Odacious.png";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Voltonic Solutions",
        icon: voltonic,
        iconBg: "#accbe1",
        date: "March 2023 - January 2024",
        points: [
            "Developed and maintained user interfaces for web applications using Next.js, React, Redux, and GraphQL.",
            "Collaborated with cross-functional teams, including designers and backend developers, to implement and optimize front-end solutions.",
            "Participated in code reviews to ensure best practices and code quality.",
            "Worked closely with UX/UI designers to bring visually stunning and responsive designs to life.",
            "Implemented and maintained state management using Redux for efficient data flow in complex applications.",
            "Utilized RestAPI to efficiently fetch and manage data from the server.",
            "Stayed up-to-date with the latest industry trends and technologies, and proactively suggested improvements to enhance the user experience."
        ],
    },
    {
        title: "Junior Software Engineer",
        company_name: "Odacious",
        icon: Odacious,
        iconBg: "#fbc3bc",
        date: "May 2022 - August 2022",
        points: [
            "Collaborated with senior engineers to design and develop new features for a complex software application, resulting in a 20% improvement in overall system performance.",
            "Developed and implemented new features for the company's flagship product, resulting in a 20% increase in user engagement.",
            "Developed and implemented new features in a web application, resulting in a 20% increase in user engagement and a 30% decrease in bug reports."
        ],
    }
]

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mkashif163',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/muhammadkashif70',
    }
];

export const projects = [
    {
        iconUrl: 'placeholder1',
        theme: 'btn-back-red',
        name: 'Industrymall (Multivendor E-commerce)',
        description: 'Developed a user-friendly multi-vendor e-commerce platform using Next.js and TypeScript.',
        link: 'https://www.industrymall.net/',
    },
    {
        iconUrl: 'placeholder2',
        theme: 'btn-back-green',
        name: 'Mavarid (Multivendor E-commerce)',
        description: 'Integrated various APIs seamlessly with Axios for real-time data handling.',
        link: 'https://mavarid.store/',
    }
];