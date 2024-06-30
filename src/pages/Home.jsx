import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import { homePage } from "../constant/userData";
import resumePDF from "../assets/Sarawut_Resume.pdf";

const Home = () => {
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 100,
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(-20px, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 200,
  });

  return (
    <>
      <style>
        {`@media (min-width: 768px) {
          .md-flex-row {
            flex-direction: row !important;
            }
          }
        `}
      </style>
      <div className="flex flex-col justify-center mx-4 md:mx-10 md-flex-row">
        <animated.div style={headerAnimation} className={"md:mr-10"}>
          <div className="mx-auto mt-5 max-w-2xl font-bold xl:mt-18">
            <h1 className="font-extra-bold mx-auto max-w-[15ch] text-center text-4xl leading-snug transition-all md:text-5xl md:leading-relaxed md:mx-0 md:text-left xl:text-6xl xl:leading-normal">
              {homePage?.headerOne}
            </h1>
            <p className="mx-auto max-w-[35ch] text-center text-base opacity-60 transition-all md:mx-0 md:text-left xl:max-w-[50ch]">
              {homePage?.shotdescript}
            </p>
          </div>
          <div className="mt-10 whitespace-nowrap text-center md:text-left">
            <a
              href={resumePDF}
              download="sarawut_resume.pdf"
              className="mr-4 rounded-xl border-2 border-black bg-black px-6 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500"
            >
              My Resume
            </a>
            <Link
              to="contact"
              className="rounded-xl border-2 border-black px-6 py-4 font-bold transition-all hover:-translate-y-0.5 dark:text-orange-500 dark:border-orange-500  hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:hover:text-white"
            >
              Contact Me
            </Link>
          </div>
        </animated.div>
        <animated.div style={imageAnimation}>
          <div
            className={`relative mx-auto mt-10 transition-all lg:h-[500px] w-[350px] h-[350px] lg:w-[500px] xl:mt-18`}
          >
            <div className="h-full w-full overflow-hidden rounded-3xl border-2 border-black shadow-customHover">
              <img
                className="h-full w-full object-cover"
                src={homePage?.profileImage}
                alt="pfp"
              ></img>
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default Home;
