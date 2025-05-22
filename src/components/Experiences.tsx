import React, { useState } from 'react';

interface TimelineEntry {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  description: string[];
  technologies: string[];
}

interface CardProps {
  entry: TimelineEntry;
  onSelect: (data: string) => void;
}

const TimelineCircle = () => {
  return (
    <div className="rounded-full w-6 h-6 bg-light-cyan" />
  );
}

const TimelinePillar = () => {
  return (
    <div className="flex justify-center w-6">
      <div className="rounded-t-full rounded-b-full w-2 h-full bg-light-cyan" />
    </div>
  );
}

function TimelineCard({ entry, onSelect }: CardProps) {
  return (
    <div className="flex flex-col w-60 gap-1 border border-soft-pink m-4 p-4 rounded-md transition-transform duration-300 hover:scale-110" onClick={() => onSelect(entry.id)}>
      <strong className="text-soft-pink">{entry.title}</strong>
      <hr />
      <p className="text-lavendar font-bold">{entry.subtitle}</p>
      <p>{entry.date}</p>
    </div>
  );
}


export default function Experiences() {
  const [selectedEntryId, setSelectedEntryId] = useState<string>('easy-dynamics');

  const timelineData: TimelineEntry[] = [
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
      technologies: [],
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
      technologies: [],
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
      technologies: [],
    },
    {
      id: 'telos',
      title: 'Solutions Architect Intern',
      subtitle: 'Telos Corp',
      date: 'June 2022 - October 2022',
      description: [
        'Integrated Wazuh into our audit compliance tooling, built out Python scripts leveraging AWS Lambda functions for our data ingestion pipeline, enhancing real-time security monitoring.'
      ],
      technologies: [],
    },
  ];

  const selectedEntry = timelineData.find(x => x.id == selectedEntryId);

  return (
    <div className="flex pt-4 pb-4 flex-col gap-4">
      <div className="text-3xl font-bold">
        <h1>Experiences</h1>
      </div>
      <div className="flex flex-row gap-4">
        {/*Timeline*/}
        <div className="flex flex-col min-h-screen gap-3 m-4 w-100 items-start">
          {timelineData.map((entry, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-row gap-2">
                <TimelinePillar />
                <TimelineCard entry={entry} onSelect={setSelectedEntryId} />
              </div>
              <TimelineCircle />
            </React.Fragment>
          ))}
        </div>
        {/*Descrption*/}
        <div className="flex flex-col w-full gap-3" >
          <div className='text-3xl font-bold text-soft-pink'>
            <h1>{selectedEntry?.title}</h1>
          </div>
          <div className='flex flex-col text-xl'>
            <div className='text-light-cyan'>
              {selectedEntry?.subtitle}
            </div>
            <div className='text-lavendar'>
              {selectedEntry?.date}
            </div>
          </div>
          <div />
          <div className='flex flex-col gap-3 list-inside p-3 rounded-lg text-lg border-2 border-soft-pink'>
            {selectedEntry?.description.map((item, idx) => (
              <React.Fragment key={idx}>
                <li className='transition-transform duration-500 hover:text-light-cyan'>{item}</li>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
