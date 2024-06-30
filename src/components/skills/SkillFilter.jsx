import React from "react";

const SkillFilter = ({ title, description, bgImg, isActive, onClick }) => {
  return (
    <div
      className={`card group relative mb-5 flex max-w-[400px] cursor-pointer flex-col rounded-2xl border-2 border-black shadow-custom transition-all hover:-translate-y-0.5 hover:shadow-customHover ${
        isActive ? "shadow-customHover border-green" : ""
      }`}
      onClick={onClick}
    >
      <div className="img-wrapper relative h-[250px] overflow-hidden rounded-t-lg">
        <img src={bgImg} alt={title} className="inline-block h-full w-full transform object-contain transition-all ease-in-out" />
      </div>
      <div className="flex-grow rounded-b-xl bg-white dark:bg-[#0d0d0d] p-5">
        <div className="title text-2xl font-bold">{title}</div>
        <div className="description text-base">{description}</div>
      </div>
    </div>
  );
};

export default SkillFilter;

{/* <>
      <main>
        <>
          <div className="mx-auto mt-10 px-5">
            <section className="flex justify-center flex-col">
              <animated.div
                style={headerAnimation}
                className="flex flex-col justify-center"
              >
                <div>
                  <h2 className="mb-5 max-w-[15ch] mx-auto text-center text-5xl font-bold transition-all  md:text-7xl">
                    {pageData.headerOne}
                  </h2>
                </div>
              </animated.div>
            </section>
          </div>
        </>
        <animated.div style={headerAnimation}>
          <Sections pageData={pageData} userData={userData} />
        </animated.div>
      </main>

      <section>
        <animated.div
          style={projectCardsAnimation}
          className="container mx-auto mb-5 px-5"
        >
          <div>
            <h2 className="mb-10 text-center text-2xl font-bold leading-relaxed transition-all">
            FRONTEND
            </h2>
          </div>
          <FrontSkills />

          <div>
            <h2 className=" mb-10 mt-16 text-center text-2xl font-bold leading-relaxed transition-all">
            BACKEND AND DATABASE
            </h2>
          </div>
          <BackSkills />

          <div>
            <h2 className=" mb-10 mt-16 text-center text-2xl font-bold leading-relaxed transition-all">
            OTHER SKILLS
            </h2>
          </div>
          <OtherSkills />
        </animated.div>
      </section>
    </>
  );
}; */}
