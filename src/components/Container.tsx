import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="relative w-full h-[93vh] flex flex-col justify-center items-center overflow-y-hidden">
      <svg className='h-full absolute pointer-events-none w-full h-[93vh] inset-0 stroke-slate-200 stroke-[0.1] animated-border-svg fill-none z-0' viewBox='0 0 100 100' preserveAspectRatio='none'>
        <rect x='3' y='2' width='94' height='96' rx={1.5} ry={2.5} className='z-[-1]' />
      </svg>
      {/* logic for child content layout */}
      <div className="w-[75vw] h-[80vh] flex flex-col p-4 sm:p-8 fade-in z-10 overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
