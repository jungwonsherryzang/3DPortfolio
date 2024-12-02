import { microsoft, lab } from "../assets/images";
import {
    car,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    threejs,
    pricewise,
    react,
    redux,
    snapgram,
    tailwindcss,
    threads,
    typescript,
    azure,
    cosmosdb
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: azure,
        name: "Azure",
        type: "Microsoft Azure",
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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: cosmosdb,
        name: "CosmosDB",
        type: "Database",
    }
];

export const experiences = [
    {
        title: "Senior Azure Cloud Software Engineer",
        company_name: "Microsoft - VM team",
        icon: microsoft,
        iconBg: "#accbe1",
        date: "February 2023 - Present",
        points: [
            "Working as a Technical Advisor (TA) and Subject Matter Expert (SME) to lead the VM team ",
            "Worked on VM technical issue resolution from the backend side with using Microsoft tools – mainly dealing with Windows and Linux VM OS level",
            "Collaborated within and across various teams to leverage troubleshooting and to investigate",
        ],
    },
    {
        title: "Azure Cloud Software Engineer",
        company_name: "Microsoft - Cosmos DB team",
        icon: microsoft,
        iconBg: "#accbe1",
        date: "August 2022 - February 2023",
        points: [
            "Analyzed product logs and generate visualizations using SQL queries on Kusto",
            "Created and managed various database objects like Stored Procedures, Views, Azure Functions, Indexes, Triggers and analyze product logs",
            "Delivered the best practices in extraction-transform-load (ETL) processes involving large and complex data sets to provide optimized and cost-efficient solutions in Azure Cloud Services such as Cosmos DB, Azure Data Factory (ADF), Azure Synapse Analytics, App Services and Data Bricks",
            "Troubleshooted technical issues by analyzing product telemetry, recreating client-side behaviors such as applications using .NET, Java, C# and Python and generating visualizations to specific concerns",
        ],
    },
    {
        title: "Software Engineer (Student Researcher)",
        company_name: "NextGen ERAU Applied Research Lab",
        icon: lab,
        iconBg: "#b7e4c7",
        date: "August 2020 - May 2022",
        points: [
            "Worked on FAA NextGen Project “SWIM (System Wide Information Management)” data transfer software system development – mainly targeted to develop the new SWIM data management software written by Javascript",
            "Worked under Full Life-Cycle Engineering and Agile framework ",
            "TDD with aviation datasets; Pair Programming; Regular requirement review meeting with FAA customer team",
            "Prepared FAA Flight datasets – FFICE/FIXM version 4.2, weather datasets - iWXXM, aeronautical datasets – AIXM version 5.1 to test the system validation",
            "Additionally developed XML Schema Validator of Business Rule system with TypeScript; Reduced the rate of detecting schema errors from 3% to 2%, for the Flight Plan (FP) dataset",
            "Additionally developed Data Converter system from XML Schema to JSON with Java to JavaScript and TypeScript",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/jungwonsherryzang',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sherryzang523/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Cloud-based Web Application with Real-time Flight data Project',
        description: 'Developed a web application that cleans real-time flight data with SQL and Machine Learning (ML) algorithm called Isolation Forest Model and deploys the cleaned real-time fetched data to the web application.',
        link: 'https://github.com/jungwonsherryzang/Cloud-based-Web-Application-with-Real-Time-Flight-Data-with-ADS-B',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Hotel Review Text Classification Model Project',
        description: 'Built an hotel review text classification model with using RNN model on different ratings to check the best accuracy.', 
        link: 'https://github.com/jungwonsherryzang/Hotel-Review-Text-Classification-Model',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Toulouse Weather Information Website Project',
        description: 'Built the website that is showing the real-time Toulouse weather information.',
        link: 'https://github.com/jungwonsherryzang/Toulouse-real-time-weather-information-project',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Hand Motion Trash Can Project',
        description: 'Built a motionable trash can that opens when we wave our hands in front of the trash can and automatically close it after some time.',
        link: 'https://github.com/jungwonsherryzang/Automatic-bin-raspberrypi-project',
    }
];