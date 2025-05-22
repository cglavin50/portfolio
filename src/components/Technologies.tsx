import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiDotnet } from 'react-icons/si';
import { FaReact, FaDocker, FaPython, FaJava, FaAws } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { TbBrandAnsible } from 'react-icons/tb';

export default function Technologies() {
  return (
    <div className="flex pt-4 pb-8 flex-col gap-4">
      <div className="text-3xl font-bold">
        <h1>Technologies</h1>
      </div>
      <div className="flex flex-row gap-6 w-full justify-evenly">
        <div className="icon">
          <SiTypescript size={48} />
        </div>
        <div className="icon">
          <FaReact size={48} />
        </div>
        <div className="icon">
          <RiTailwindCssFill size={48} />
        </div>
        <div className="icon">
          <SiDotnet size={48} />
        </div>
        <div className="icon">
          <FaDocker size={48} />
        </div>
        <div className="icon">
          <FaPython size={48} />
        </div>
        <div className="icon">
          <FaGolang size={48} />
        </div>
        <div className="icon">
          <FaJava size={48} />
        </div>
        <div className="icon">
          <FaAws size={48} />
        </div>
        <div className="icon">
          <TbBrandAnsible size={48} />
        </div>
      </div>
    </div>
  );
}
