import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Shaker",
  lastName: "Mahmoud",
  name: `Shaker Mahmoud`,
  role: "Developer & Security Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "sudoshaker@example.com",
  location: "Iraq, Baghdad" as Person["location"], // display label only
  languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on cybersecurity, CTF challenges, and development tips</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/drengir1",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/sudoshaker/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Developer by craft, Hacker by curiosity</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Mirai Case Studies</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured case study
        </Text>
      </Row>
    ),
    href: "/work/mirai-case-studies",
  },
  subline: (
    <>
    I'm {person.firstName}, a passionate developer and security researcher. NCSE 2025 Finalist and HTB Top 100 CTF participant. ITU Certified Trainer and AFDE member.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Iraq`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://www.instagram.com/sudoshaker/",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Shaker is a developer and cybersecurity enthusiast dedicated to building secure applications
        and sharing knowledge in the security community. With expertise in CTF competitions, ethical hacking,
        and software development, he combines practical skills with a passion for continuous learning and innovation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Independent Security Researcher",
        timeframe: "2024 - Present",
        role: "Developer & Cybersecurity Trainer",
        achievements: [
          <>
            NCSE 2025 Finalist - Recognized for exceptional performance in cybersecurity examinations
            and demonstrated expertise in security practices.
          </>,
          <>
            HTB University CTF 2025 Top 100 - Ranked among top 100 participants in HackTheBox
            Capture The Flag competitions, showcasing advanced hacking and problem-solving skills.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "AFDE (Arab Federation for Digital Economy)",
        timeframe: "2023 - Present",
        role: "Member & Certified Trainer",
        achievements: [
          <>
            ITU Certified Trainer - Certified by International Telecommunication Union to deliver
            training programs on cybersecurity and technology best practices.
          </>,
          <>
            Active member contributing to digital economy initiatives and mentoring emerging
            developers in cybersecurity principles and ethical hacking.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Certifications & Training",
    institutions: [
      {
        name: "ITU (International Telecommunication Union)",
        description: <>Certified Trainer in Cybersecurity and Technology Excellence.</>,
      },
      {
        name: "NCSE (National Cybersecurity Examination)",
        description: <>2025 Finalist - Demonstrated advanced expertise in cybersecurity practices.</>,
      },
      {
        name: "HackTheBox Academy",
        description: <>Top 100 participant in CTF competitions, continuous skill development in ethical hacking.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Cybersecurity & Ethical Hacking",
        description: (
          <>Expert in penetration testing, vulnerability assessment, and secure code review. Active CTF competitor.</>
        ),
        tags: [
          {
            name: "Penetration Testing",
            icon: "figma",
          },
          {
            name: "Ethical Hacking",
            icon: "javascript",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Software Development",
        description: (
          <>Building secure applications with modern frameworks and implementing security best practices.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "nextjs",
          },
          {
            name: "Security",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Case Studies",
  title: "Mirai Case Studies",
  description: `Mirai case studies by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // The work section now highlights the Mirai case study only
};

export { person, social, newsletter, home, about, work };
