import React from "react";

import { Link, useNavigate } from "react-router-dom";

const SkillCard = ({ skill }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (skill.cer === "404") {
      navigate("/notfound");
    } else {
      window.open(skill.cer, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="w-[180px]" onClick={handleCardClick}>
      <div className="relative mb-5 flex w-[180px] flex-col rounded-xl border-2 border-black shadow-custom transition-all hover:translate-y-0.5 hover:shadow-customHover cursor-pointer">
        
        <div className="image-wrapper mt-3 relative h-[200px] max-sm:h-[150px] overflow-hidden rounded-t-lg transition-all p-1">
          <img
            src={skill.image}
            alt={skill.title}
            className="inline-block h-full w-full transform object-cover transition-all ease-in-out "
          />
        </div>

        <div className="bg-white dark:bg-[#0d0d0d] p-5">
          <h2 className="mb-5 text-center  text-2xl font-bold leading-snug transition-all">
            {skill.title}
          </h2>
          <p className="text-base text-center transition-all">{skill.level}</p>
        </div>

        {skill.cer !== "404" ? (
          <Link
            to={skill.cer}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white px-5 py-2 dark:bg-[#0d0d0d] text-sm font-bold"
          >
            Certificate more{" "}
            <div className={`inline-block transition-all`}>→</div>
          </Link>
        ) : (
          <button
            disabled
            className="inline-block bg-white px-5 py-2 dark:bg-[#0d0d0d] text-sm font-bold"
          >
            Certificate more{" "}
            <div className={`inline-block transition-all`}>→</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default SkillCard;
