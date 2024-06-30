import React, { useState } from "react";
import SkillFilter from "./SkillFilter";
import SkillContainer from "./SkillContainer";
import { useSpring, animated } from "react-spring";

const SkillItem = ({ skills, skillDetails }) => {
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 200,
  });

  const projectCardsAnimation = useSpring({
    from: { transform: "translate3d(0, 20px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 500,
  });

  const [selectedSkill, setSelectedSkill] = useState("FRONTEND");

  const filteredSkills = selectedSkill === "FRONTEND"
    ? skillDetails.frontend
    : selectedSkill === "BACKEND AND DATABASE"
    ? skillDetails.backend
    : skillDetails.other;

  return (
    <section className="relative mb-20 mt-105">
      <animated.div
                style={headerAnimation}
                className="flex flex-col justify-center"
              >
        <div className="mx-10 grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:mx-80">
          {skills.map(skill => (
            <SkillFilter
              key={skill.name}
              title={skill.name}
              description={skill.description}
              bgImg={skill.image}
              isActive={selectedSkill === skill.name}
              onClick={() => setSelectedSkill(skill.name)}
            />
          ))}
        </div>
      </animated.div>

      <animated.div
          style={projectCardsAnimation}
          className="container mx-auto mb-5 px-5"
        >
        <div className="mt-8">
          <h2 className="mb-10 text-center text-2xl font-bold leading-relaxed transition-all">{selectedSkill}</h2>
          <SkillContainer skills={filteredSkills} />
        </div>
        </animated.div>
    </section>
  );
};

export default SkillItem;
