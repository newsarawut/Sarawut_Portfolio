import React from "react";
import { useSpring, animated } from "react-spring";
import SkillItem from "../components/skills/SkillItem";
import { skillDetails, skills } from "../constant/userData";

const Skills = () => {
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

  return (
    <>
      <main>
        <div className="mx-auto mt-10 px-5">
          <section className="flex justify-center flex-col">
            <animated.div
              style={headerAnimation}
              className="flex flex-col justify-center"
            >
              <div>
                <h2 className="mb-5 max-w-[15ch] mx-auto text-center text-5xl font-bold transition-all md:text-7xl">
                  Skills
                </h2>
              </div>
            </animated.div>
          </section>
        </div>
      </main>

      <section>
        <animated.div
          style={projectCardsAnimation}
          className="container mx-auto mb-5 px-5"
        >
          <SkillItem skills={skills} skillDetails={skillDetails} />
        </animated.div>
      </section>
    </>
  );
};

export default Skills;
