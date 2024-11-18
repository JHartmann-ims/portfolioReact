import React from "react";
import portrait from "../assets/portraitJHA.jpeg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import TechStack from "./TechStack";

const Me = () => {
  return (
    <div className="flex flex-grow">
      <div className="flex w-full">
        <div className="lg:w-[850px] w-[90%] min-h-screen flex  m-0 mx-auto place-content-center">
          <div className="w-[90%] h-full">
            <img
              src={portrait}
              alt="portrait of Julian"
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 block ml-auto mr-auto border-solid border-4 border-neutral drop-shadow-md"
            />
            <div className="w-full h-auto rounded-lg bg-neutral mt-5 mx-auto text-center p-4 shadow-md">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                Hello, I'm a passionate software developer!
              </h3>
            </div>

            <TechStack />

            <h1 className="pt-5 text-4xl font-bold">Julian Hartmann</h1>
            <p>Software developer, based in Switzerland</p>
            <div className="w-[100%] m-0 mx-auto pt-10">
              <h2 className="text-3xl font-bold">Who am I ?</h2>
              <p>
                I am a 20 year old developer with a strong passion for
                technology and software development, which began during my early
                years. Recently i graduated from the Informatikmittelschule in
                Baden, earning a Berufsmatura and an EFZ. I have gained solid
                experience in both frontend and backend development, equipping
                me with the skills to tackle a wide range of challenges.
              </p>
              <br />
              <p>
                My journey into development started with a keen interest in
                understanding how things work behind the scenes-wether it was
                the functionality of websites, applications, or video games.
                This curiosity led me to create my first video game using Unity
                and C#. This experience was needed to get me to realize that
                this is a career I wanted to pursue.
              </p>
            </div>
            <div className="w-[100%] m-0 mx-auto pt-10">
              <h2 className="text-3xl font-bold">Work Experience / Education</h2>
              <div className="container pt-4 mx-auto">
                <div className="relative px-4">
                  <div className="relative border-l-2 border-gray-600">
                    <div className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-4 h-4 bg-primary rounded-full -left-2 ring-4 ring-gray-900">
                      </span>
                      <h3 className="text-xl font-semibold tracking-wide">
                        RTP GmbH
                      </h3>
                      <time className="text-sm text-gray-400">Aug 2024 - Present</time>
                      <p className="mt-2">
                      Continued developing and maintaining web applications with TYPO3, Neos, PHP, and MySQL. Expanded responsibilities to include server administration and maintenance.                      </p>
                    </div>

                    <div className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-4 h-4 bg-primary rounded-full -left-2 ring-4 ring-gray-900">
                      </span>
                      <h3 className="text-xl font-semibold tracking-wide">
                        RTP GmbH
                      </h3>
                      <time className="text-sm text-gray-400">Aug 2023 - Aug 2024</time>
                      <p className="mt-2">
                      Developed and maintained web applications using TYPO3, Neos, PHP, and MySQL. Created custom extensions for TYPO3 and Neos, implemented browser-independent layouts with HTML/CSS, and worked on client-side programming with JavaScript and popular libraries.                      
                      </p>
                    </div>

                    <div className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-4 h-4 bg-primary rounded-full -left-2 ring-4 ring-gray-900">
                      </span>
                      <h3 className="text-xl font-semibold tracking-wide">
                        Informatikmittelschule Baden
                      </h3>
                      <time className="text-sm text-gray-400">Aug 2020 - Aug 2023</time>
                      <p className="mt-2">
                      Completed a four-year program focused on application development, including an internship in the final year. Gained knowledge of various technologies, including React, Java, C#, PHP, MySQL, and JavaScript.                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="w-[100%] m-0 mx-auto pt-2">
              <h2 className="text-3xl font-bold">
                I <span className="text-3xl">&#x2661;</span>
              </h2>
              <p className="">the gym, coding, music, my ukulele</p>
            </div>
            <div className="w-[100%] m-0 mx-auto pt-10">
              <h2 className="text-3xl font-bold pb-2">On the web</h2>
              <div class="mockup-window bg-base-300">
                <div class="grid justify-center px-4 py-16 bg-base-200 gap-2">
                  <a
                    href="https://github.com/JHartmann-ims"
                    role="button"
                    className="btn btn-outline btn-wide gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="" className="w-7 h-7" />
                    JHartmann-ims
                  </a>
                  <a
                    href="https://www.linkedin.com/in/julian-hartmann-a17999239/"
                    role="button"
                    className="btn btn-outline btn-wide gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedin} alt="" className="w-6 h-6" />
                    Julian Hartmann
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCCQpiU3-tQ1gbrj7JdVyqKQ/videos"
                    role="button"
                    className="btn btn-outline btn-wide gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={youtube} alt="" className="w-7 h-7" />
                    quacksterr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
