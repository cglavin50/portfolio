import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Cooper from '../assets/Cooper.jpg';

interface Props {
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

export default function Landing({ projectsRef }: Props) {
  const viewProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full flex gap-8 mt-[15vh] mb-[20vh]'>
      <div className="w-full flex flex-col justify-start text-left gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Cooper!</h1>
          <p className="text-lg mt-1">📍Washington, DC</p>
        </div>

        <div>
          <p className="text-lg text-mint-500">
            I am a <strong>Full-Stack Developer</strong> with a passion for delivering <em>secure, user-friendly applications</em>. I love to wear many hats, working across the stack to solve complex problems.
          </p>
        </div>

        <div>
          <p className="text-lg">
            I'm currently a developer at <a href='https://www.easydynamics.com/'>Easy Dynamics</a> using <strong>.NET, Python, and Typescript + React</strong> to build secure web applications used nation-wide. I have a strong foundation in Cybersecurity, leveraging my time in federal contracting to build intuitive web applications with an emphasis on security and availability. To see more, please checkout my <a className="text-soft-pink" href="#" onClick={viewProjects}>Projects</a> below.
          </p>
        </div>

        <div className='text-lg'>
          <strong className='text-slate-200'>Connect with Me:</strong>
          <div className='flex gap-4 mt-3'>
            <a href="https://www.linkedin.com/in/cooper-glavin-5852351aa/" target="_blank" className='icon'>
              <FaLinkedin size={48} />
            </a>
            <a href="https://github.com/cglavin50" target='_blank' className='icon'>
              <FaGithub size={48} />
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-start hidden sm:block'>
        <img
          src={Cooper}
          alt="Self Portrait"
          className='w-[25vw] h-fit object-scale-down rounded-xl border-6 border-soft-pink shadow-lg transition-transform duration-300 ease-in-out hover:scale-110'
        />
      </div>
    </div>
  );
}
