import React, { useEffect, useState } from 'react';
import { type TimelineEntry } from './Projects';

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

interface ExperiencesProps {
  timelineData: TimelineEntry[];
}

const Experiences = ({ timelineData }: ExperiencesProps) => {
  const [selectedEntryId, setSelectedEntryId] = useState<string>('');

  useEffect(() => {
    if (timelineData.length > 0) {
      setSelectedEntryId(timelineData[0]?.id);
    } else {
      setSelectedEntryId('');
    }
  }, [timelineData]);

  const selectedEntry = timelineData.find(x => x.id == selectedEntryId);

  return (
    <div className="flex pt-4 pb-4 flex-col gap-4">
      <div className="text-3xl font-bold">
        <h1>Experiences</h1>
      </div>
      <div className="flex flex-row gap-4">
        {/*Timeline*/}
        <div className="flex flex-col min-h-[60vh] justify-center gap-3 m-4 w-100 items-start">
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

export default Experiences;
