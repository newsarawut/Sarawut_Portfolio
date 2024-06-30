import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { userData } from '../constant/userData';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animationProps = useSpring({
    from: { opacity: 0, transform: "translate3d(-20px, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 100,
  });

  return (
    <>
      <main>
        <div className="container mx-auto my-10 max-w-screen-lg px-5">
          <div className="wrapper items-center gap-10 md:flex">
            <animated.div
              style={animationProps}
              className="md:min-w-[25rem] mx-auto max-w-lg md:mx-0"
            >
              <h2 className="text-center text-5xl font-bold transition-all md:text-left md:text-6xl">
                Contact
              </h2>
              <p className="transition-all md:text-left my-4 sm:mt-0 text-center">
                This is my portfolio which I created using React language and
                using the Tailwind CSS library. If you are interested and would
                like to give it a chance to join your organization, you can
                contact me as specified. I am ready to seize the opportunity to
                cooperate with you. And I can still develop various skills to
                be consistent with company policy.
              </p>
              <div className="mb-5">
                <div className="card contact-card rounded-lg border-2 border-black p-5">
                  <div className="mb-4 inline-block w-full">
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src="https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633d9a460fc6857e260d0f2b_envelope-icon-large-paperfolio-webflow-template.svg"
                        loading="eager"
                        alt="envelope icon"
                      />
                      <a
                        href={`mailto:${userData?.email}`}
                        className="w-full transition-all"
                      >
                        <p
                          className={
                            "transition-all hover:text-orange-500 hover:opacity-80"
                          }
                        >
                          {userData?.email}
                        </p>
                      </a>
                    </div>
                  </div>

                  <div className="mb-4 inline-block w-full">
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src="https://img.icons8.com/dusk/64/github.png"
                        loading="eager"
                        alt="GitHub icon"
                        className="w-10 h-10"
                      />
                      <a
                        href={"https://github.com/newsarawut"}
                        target="_blank"
                        className="w-full transition-all"
                      >
                        <p
                          className={
                            "transition-all hover:text-orange-500 hover:opacity-80"
                          }
                        >
                          @newsarawut
                        </p>
                      </a>
                    </div>
                  </div>

                  <div className="mb-4 inline-block w-full">
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src="https://img.icons8.com/dusk/64/linkedin--v1.png"
                        loading="eager"
                        alt="LinkedIn icon"
                        className="w-10 h-10"
                      />
                      <a
                        href={"https://www.linkedin.com/in/sarawut-chaiwun-dev"}
                        target="_blank"
                        className="w-full transition-all"
                      >
                        <p
                          className={
                            "transition-all hover:text-orange-500 hover:opacity-80"
                          }
                        >
                          Sarawut Chaiwun
                        </p>
                      </a>
                    </div>
                  </div>

                  <div className="mb-4 inline-block w-full">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633d9a5fec957e53ae8857ce_phone-icon-large-paperfolio-webflow-template.svg"
                      loading="eager"
                      alt="phone icon"
                      className="w-10 h-10"
                    />
                    <a
                      href={`tel:${userData.phone}`}
                      target="_blank"
                      className="w-full transition-all"
                    >
                      <p
                        className={
                          "transition-all hover:text-orange-500 hover:opacity-80"
                        }
                      >
                        {userData.phone}
                      </p>
                    </a>
                  </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src="https://img.icons8.com/doodle/48/map-marker.png"
                      alt="phone icon"
                      className="w-10 h-10"
                    />
                    <a
                      href="https://maps.app.goo.gl/Hyyz7Pp7Q63LFKUW9"
                      target="_blank"
                      className="w-full transition-all"
                    >
                      <p
                        className={
                          "transition-all hover:text-orange-500 hover:opacity-80"
                        }
                      >
                        {userData.location}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </animated.div>
            <ContactForm userData={userData} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
