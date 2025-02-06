import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  aws,
  java,
  tailwind,
  nodejs,
  mongodb,
  python,
  git,
  figma,
  docker,
  meta,
  unt,
  goldmansachs,
  legato,
  virtusa,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  sql,
  spring,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "resume",
    title: "Resume",
    link : "https://drive.google.com/file/d/1oV_kVZu0Vtw-Uicisb5Q2yvdF3AY5_Gr/view?usp=sharing"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "SQL Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Mysql",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    
    title: "Java Full Stack Developer",
    company_name: "Goldman Sachs",
    icon: goldmansachs,
    iconBg: "#E6DEDD",
    date: "July, 2024 - till now",
    points: [
      "As a full-stack java developer focusing on maintaining and improving the software while pushing to integrate it further in GS ecosystem.",
      "•Spearheaded the redesign of the authentication framework for ClearFactr, adopting modern security standards with OAuth 2.0, resulting in a 50% improvement in login performance and increased system security.",
      "Developed and published public APIs for ClearFactr, enabling seamless integration with external systems and expanding the tool's functionality within the GS ecosystem.",
      "Built microservices with Java and Spring Boot to support ClearFactr's core functionalities, ensuring scalable and efficient operations.",
      "	•	Collaborated with stakeholders and cross-functional teams to gather requirements, ensuring alignment with the broader GS ecosystem goals and improving project delivery timelines by 20%.",
    ],
  },
  {
    
    title: "Java Web App Developer",
    company_name: "University of North Texas",
    icon: unt,
    iconBg: "#E6DEDD",
    date: "August, 2023 - May, 2024",
    points: [
      "Enhanced library management by developing Spring MVC controllers, leading to a 30% improvement in API response times and a 25% reduction in user-reported interface issues.",
      "Utilized core Java concepts to implement backend logic, reducing code complexity by 30% and improving system performance by 35% as measured by response times and resource utilization.",
      "Collaborated with stakeholders to implement new features, resulting in a 90% satisfaction rate among library staff and a 35% increase in patron engagement with the library management system.",
      "Developed intuitive and responsive user interfaces using React, leading to a 50% improvement in user experience and a 20% increase in user retention rates.",
      "	Handled very large databases (Oracle and MS-SQL) for enterprise-level applications, optimizing data storage and retrieval processes, which resulted in a 50% reduction in latency and improved overall application performance.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Legato Health Technologies LLC",
    company_link: "https://drive.google.com/file/d/1zNU2RtxYLXJ_G9N4YflPEvxGW6bZ_02w/view?usp=sharing",
    icon: legato,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Jan 2023",
    points: [
      "Understanding the fundamental concepts and architecture of cloud computing.",
      "Designed RESTful APIs using Spring Boot and Spring MVC, enabling seamless integration of various insurance functionalities such as account management, policy tracking, and quote rating.",
      "Implemented OAuth Client Credentials authorization using Spring Security, enhancing the system's security posture and reducing unauthorized access attempts by 95%.",
      "Containerized microservices using Docker and deployed them on AWS EC2 instances, resulting in a 70% reduction in deployment time and a 50% improvement in system scalability.",
      "Integrated Apache Kafka message brokers to handle high-volume data processing, enabling the system to process over 10,000 insurance quotes per hour during peak times, a 200% improvement over the previous system capacity.",
      "Automated the build and deployment process using Jenkins, reducing the time required for each release cycle by 60% and increasing the frequency of deployments from bi-weekly to daily.",
      
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Virtusa",
    company_link: "https://drive.google.com/file/d/1Vh5jJ0XETXBRLnUY8FOMYALq9UsdNw4v/view?usp=sharing",
    icon: virtusa,
    iconBg: "#383E56",
    date: "Jun 2018 - Oct 2021",
    points: [
      "Engineered and maintained web application, resulting in a 30% increase in operational efficiency and a 20% reduction in manual errors.",
       "Enhanced data handling efficiency by 35% through the implementation of well-structured Service and Controller classes.",
      "Optimized database interactions, leading to a 40% improvement in query performance and a 30% reduction in database load.",
      "Automated more than 20 routine tasks, reducing manual effort by 40% and boosting operational efficiency by 30%.",
      "Triggered report emails using JMS batch jobs based on the daily, weekly and monthly reports which helped to increase the customer engagement with the application by 2x times.",
      	"Streamlined large data volumes in Oracle DB and MS-SQL, performing complex queries and optimizations that resulted in a 35% improvement in data processing speed and efficiency.",
      "Managed comprehensive testing strategy led to a 60% reduction in post-release bugs and a 40% decrease in QA testing time.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rajan is a quick learner and hardworking individual who excels in adapting to new challenges and consistently delivers outstanding results.",
    name: "Akriti Karn",
    designation: "International Sales Executive",
    company: "B2b Exports LLC",
    image: "https://media.licdn.com/dms/image/D4D03AQEkxTKX9IH4LA/profile-displayphoto-shrink_800_800/0/1681407522164?e=1726099200&v=beta&t=_ARwdO7VYUcgYuhILOcPmdnXze10O_1yuHEc3RaHGgw",
  },
  {
    testimonial:
      "He effectively led our academic project group with strong organizational skills and insightful guidance. Their leadership ensured smooth coordination among team members, leading to a successful and cohesive project outcome.",
    name: "Sumit kumar",
    designation: "Student",
    company: "VIT Bhopal 25",
    image: "https://media.licdn.com/dms/image/D4D03AQG6R0B0CEc1_w/profile-displayphoto-shrink_400_400/0/1701462307033?e=1726099200&v=beta&t=Y8Yb5JbUojKwPUtuYlNMpYVabLRstgQIGYFCyiGBiDM",
  },
  {
    testimonial:
      "Rajan bhaiya is a senior mentor who has provided invaluable guidance and support throughout my studies, helping me navigate challenges with patience and expertise.",
    name: "Atharv vyas",
    designation: "student",
    company: "VIT Bhopal 26",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GFiDgIWIO4yh00U6hw6p9g9ZcPUWznSl9g&s",
  },
];

const projects = [
  {
    name: "Image Search Web App",
    description:
      "Web-based application that enables users to search for images using a JavaScript API, providing a seamless and efficient solution for finding and viewing images online.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rajan0323/imageGenerator",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
