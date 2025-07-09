import { useEffect, useState } from "react";
import Technologies from "./Technologies";
import Experiences from "./Experiences";

export interface TimelineEntry {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  description: string[];
  technologies: string[];
}

export const entries: TimelineEntry[] = [
  {
    id: 'easy-dynamics',
    title: 'Fullstack Developer',
    subtitle: 'Easy Dynamics',
    date: 'Jul 2024 – Present',
    description: [
      'Built and maintained fullstack web applications and React with Typescript/MUI, enabling secure editing, viewing, and processing of cybersecurity controls- utilizing AWS ECR + ECS for automated deployments',
      'Engineered a User Management System for a new web application, leveraging Auth0 with Python, Typescript, and React + MUI to develop MVP under tight deadlines- leading to first sale of new platform.',
      'Created dynamic forms, search interfaces, and user management tools with secure RBAC integration for our Typescript React application.',
      'Wrote .NET APIs to create a scalable validation engine for batch .CSV and .XML uploads, handling hundreds of simultaneous file validations in a single user session',
      'Rewrote critical form submission modules with complex validation logic for a nationwide federal government reporting system using .NET and Blazor WASM, utilzing strategic indexing, SQL views, and caching to prevent timeouts during high-load batch uploads.'
    ],
    technologies: ['dotnet', 'python', 'react', 'typescript', 'aws'],
  },
  {
    id: 'seclab',
    title: 'Research Assistant',
    subtitle: 'Georgetown Univserity SecLab',
    date: 'Jan 2023 - May 2024',
    description: [
      'Conducted protocol-level research on secure communication systems with an emphasis on proxying, gaining deep familiarity with TCP/IP, DNS, BGP, ESNI, and ECH.',
      'Engineered a P2P messaging app in Go using Libp2p with end-to-end encryption, pub/sub, relaying, and HTTPS proxying with an emphasis on security and network privacy.',
    ],
    technologies: ['golang',],
  },
  {
    id: 'heimdall',
    title: 'Java SWE Intern',
    subtitle: 'Heimdall Data',
    date: 'Aug 2023 - April 2024',
    description: [
      'Optimized query caching performance on Database Proxy solution build on JDBC.',
      'Rewrote JUnit test suite, improving test coverage and Jenkins execution time.',
      'Developed a product registration module to move AWS Marketplace instances to private offers utilizing AWS API and EC2 metadata, leading to a 15% increase in revenue.'
    ],
    technologies: ['aws', 'java'],
  },
  {
    id: 'telos',
    title: 'Solutions Architect Intern',
    subtitle: 'Telos Corp',
    date: 'June 2022 - October 2022',
    description: [
      'Integrated Wazuh into our audit compliance tooling, built out Python scripts leveraging AWS Lambda functions for our data ingestion pipeline, enhancing real-time security monitoring.'
    ],
    technologies: ['aws', 'python',],
  },
];



interface Props {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}

export default function ProjectsSection({ sectionRef }: Props) {
  const [selectedEntry, setSelectedEntry] = useState<TimelineEntry>(entries[0]);

  useEffect(() => {
    console.log(selectedEntry);
  }, [selectedEntry]);

  return (
    <div ref={sectionRef}>
      <hr />
      <Technologies selectedEntry={selectedEntry} />
      <hr />
      <Experiences setSelectedEntry={setSelectedEntry} selectedEntry={selectedEntry} timelineData={entries} />
    </div>
  );
}
