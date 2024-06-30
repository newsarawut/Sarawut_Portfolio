
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { aboutPage } from "../constant/userData";
import Experience from "../components/Experience";
import resumePDF from "../assets/Sarawut_Resume.pdf";

const About = () => {
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(-20px, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 100,
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 300,
  });
  return (
    <>
      <main>
        <>
          <div className="mx-auto my-10 px-5">
            <section className="flex justify-center flex-col">
              <animated.div
                style={headerAnimation}
                className="flex flex-col justify-center"
              >
                <div>
                  <h2 className="mb-5 max-w-[15ch] mx-auto text-center text-5xl font-bold transition-all  md:text-7xl">
                    {aboutPage.headerOne}
                  </h2>
                </div>
                <div className="ml-5">
                  <p className="mb-5 max-w-[70ch] mx-auto text-center text-2xl font-semibold transition-all">
                    {aboutPage.descriptionOne}
                  </p>
                </div>
                <div className="flex justify-center text-center">
                  <a
                    href={resumePDF}
                    download="sarawut_resume.pdf"
                    className="mb-4 inline-block rounded-xl border-2 border-transparent bg-black px-4 py-2 font-bold text-white transition-all hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500"
                  >
                    My Resume
                  </a>
                  <Link
                    to="https://github.com/newsarawut"
                    target="_blank"
                    className="mb-4 ml-4 inline-block rounded-xl border-2  bg-transparent px-4 py-2 font-bold text-black border-black dark:text-orange-500 dark:border-orange-500 transition-all  hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:hover:hover:text-white"
                  >
                    GitHub
                  </Link>
                </div>
              </animated.div>
            </section>
          </div>
        </>
        <animated.div style={imageAnimation}>
          <Experience />
        </animated.div>
      </main>
    </>
  )
}

export default About