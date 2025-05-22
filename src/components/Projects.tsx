// import { useState } from "react";
import Technologies from "./Technologies";
import Experiences from "./Experiences";

type Props = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}

export default function ProjectsSection({ sectionRef }: Props) {
  // const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <div ref={sectionRef}>
      <hr />
      <Technologies />
      <hr />
      <Experiences />
    </div>
  );
}
