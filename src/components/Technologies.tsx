import { useEffect, useState } from 'react';
import { type IconType } from 'react-icons';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiDotnet } from 'react-icons/si';
import { FaReact, FaDocker, FaPython, FaJava, FaAws } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { TbBrandAnsible } from 'react-icons/tb';
import { type TimelineEntry } from "./Projects";

interface TechnologiesProps {
  // timelineData: TimelineEntry[];
  // setTimelineData: ((data: TimelineEntry[]) => void);
  // setSelectedTech: ((data: string[]) => void);
  // selectedTech: string[];
  selectedEntry: TimelineEntry;
}

interface tech {
  id: string;
  component: IconType;
  active: boolean;
}

const techList: tech[] = [
  {
    id: 'typescript',
    component: SiTypescript,
    active: false,
  },
  {
    id: 'react',
    component: FaReact,
    active: false,
  },
  {
    id: 'tailwind',
    component: RiTailwindCssFill,
    active: false,
  },
  {
    id: 'dotnet',
    component: SiDotnet,
    active: false,
  },
  {
    id: 'docker',
    component: FaDocker,
    active: false,
  },
  {
    id: 'python',
    component: FaPython,
    active: false,
  },
  {
    id: 'golang',
    component: FaGolang,
    active: false,
  },
  {
    id: 'java',
    component: FaJava,
    active: false,
  },
  {
    id: 'aws',
    component: FaAws,
    active: false,
  },
  {
    id: 'ansible',
    component: TbBrandAnsible,
    active: false,
  },
]

const Technologies = ({ selectedEntry }: TechnologiesProps) => {
  const [selectedTech, setSelectedTech] = useState<string[]>(selectedEntry.technologies);

  useEffect(() =>  {
    setSelectedTech(selectedEntry.technologies); 
  }, [selectedEntry]);

  return (
    <div className="flex pt-4 pb-8 flex-col gap-6">
      <div className="text-3xl flex flex-row gap-3 font-bold text-soft-pink">
        <h1 className='w-full'>Technologies</h1>
      </div>
      <div className="flex flex-row gap-6 w-full justify-evenly">
        {techList.map((item, idx) => {
          const Icon = item.component;
          const highlight = selectedTech.includes(item.id);
          return (
            <div key={idx} className={`transition hover:scale-110 rounded-lg ${highlight ? 'text-light-cyan' : ''}`} >
              <Icon size={48} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
