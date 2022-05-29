import React from "react";
import portrait from "../assets/portrait_suit.jpeg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";



const Me = () => {
  return (
    <div className="flex flex-grow">
      <div className="flex w-full">
        <div className="lg:w-[50%] w-[90%] min-h-screen flex  m-0 mx-auto place-content-center">
          <div className="w-[90%] h-full">
            <img
              src={portrait}
              alt="/"
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 block ml-auto mr-auto border-solid border-4 border-neutral drop-shadow-md"
            />
            <div className="sm:w-[80%] xs:w-[100%] h-16 rounded-lg bg-neutral mt-5 m-0 mx-auto text-center">
              <h3 className="3xl:text-2xl xs:text-sm text-xs 3xl:pt-4 pt-5 3xl:font-normal font-semibold">
                Hello, I'm a student who does application development !
              </h3>
            </div>
            <h1 className="pt-5 text-4xl font-bold">Julian Hartmann</h1>
            <p>Student of computer science, based in Switzerland</p>
            <div className="w-[100%] m-0 mx-auto pt-10">
              <h2 className="text-3xl font-bold">What do I do ?</h2>
              <p className="">
                I am currently attending a school that is mostly involved in
                application development. As a student there, I have gained
                experience in various areas of computer science in the last two
                years, which I look forward to expanding in the years to come.
                When I'm not at work, I usually like to hang out with my friends, especially with my girlfriend
                online and offline. Though it often happens that my friends and
                I are suddenly discussing about our projects in the workings,
                when we're online. Every project I did in school has been
                documented by me and you can see some of my done projects by
                clicking the button below.
              </p>
              <div className="text-center pt-3">
                <a role="button" className="btn btn-wide" href="https://portfolio.bbbaden.ch/view/view.php?t=hJRKLrHia4WAlUx1MCPs" target="_blank">My Projects</a>
              </div>
            </div>
            <div className="w-[100%] m-0 mx-auto pt-10">
              <h2 className="text-3xl font-bold">Bio</h2>
              <div class="overflow-x-auto pt-2">
                <table class="table w-full">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Education</th>
                      <th>Country</th>
                      <th>City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>2011-2017</th>
                      <td>Primary School</td>
                      <td>Switzerland</td>
                      <td>Spreitenbach</td>
                    </tr>

                    <tr>
                      <th>2017-2020</th>
                      <td>Upper Secondary (Bezirksschule)</td>
                      <td>Switzerland</td>
                      <td>Spreitenbach</td>
                    </tr>

                    <tr>
                      <th>2020-today</th>
                      <td>Informatikmittelschule</td>
                      <td>Switzerland</td>
                      <td>Baden</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-[100%] m-0 mx-auto pt-10">
              <h2 className="text-3xl font-bold">
                Knowledge<span className="text-base"> in computer science</span>
              </h2>
              <div className="grid grid-rows-4 grid-flow-col gap-4 text-white text-sm text-center font-bold leading-6 bg-stripes-pink rounded-lg pt-2">
                <div className="p-4 rounded-lg shadow-ll bg-base-300">
                  <p>Java</p>
                  <progress
                    class="progress progress-primary sm:w-56 w-32"
                    value="55"
                    max="100"
                  ></progress>
                </div>
                <div className="p-4 rounded-lg shadow-ll bg-base-300">
                  <p>.Net</p>
                  <progress
                    class="progress progress-primary sm:w-56 w-32"
                    value="80"
                    max="100"
                  ></progress>
                </div>
                <div className="p-4 rounded-lg shadow-ll bg-base-300">
                  <p>CSS</p>
                  <progress
                    class="progress progress-primary sm:w-56 w-32"
                    value="90"
                    max="100"
                  ></progress>
                </div>
                <div className="p-4 rounded-lg shadow-ll bg-base-300">
                  <p>SQL</p>
                  <progress
                    class="progress progress-primary sm:w-56 w-32"
                    value="60"
                    max="100"
                  ></progress>
                </div>
                <div className="p-4 rounded-lg shadow-ll bg-base-300">
                  <p>C#</p>
                  <progress
                    class="progress progress-primary sm:w-56 w-32"
                    value="75"
                    max="100"
                  ></progress>
                </div>
                <div className="p-4 rounded-lg shadow-ll bg-base-300">
                  <p>React</p>
                  <progress
                    class="progress progress-primary sm:w-56 w-32"
                    value="65"
                    max="100"
                  ></progress>
                </div>
                <div className="p-4 rounded-lg shadow-ll bg-base-300">
                  <p>HTML</p>
                  <progress
                    class="progress progress-primary sm:w-56 w-32"
                    value="95"
                    max="100"
                  ></progress>
                </div>
                <div className="p-4 rounded-lg shadow-ll bg-base-300">
                  <p>PHP</p>
                  <progress
                    class="progress progress-primary sm:w-56 w-32"
                    value="40"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
            <div className="w-[100%] m-0 mx-auto pt-10">
              <h2 className="text-3xl font-bold">
                I <span className="text-3xl">&#x2661;</span>
              </h2>
              <p className="">
                basketball, music, playing my ukulele, web development
              </p>
            </div>
            <div className="w-[100%] m-0 mx-auto pt-10">
              <h2 className="text-3xl font-bold pb-2">On the web</h2>
              <div class="mockup-window border bg-base-300">
                <div class="grid justify-center px-4 py-16 bg-base-200 gap-2">
                  <a href="https://github.com/JHartmann-ims" role="button" className="btn btn-outline btn-wide gap-2" target="_blank">
                    <img src={github} alt="" className="w-7 h-7"/>
                    JHartmann-ims
                  </a>
                  <a href="https://www.linkedin.com/in/julian-hartmann-a17999239/" role="button" className="btn btn-outline btn-wide gap-2" target="_blank">
                    <img src={linkedin} alt="" className="w-6 h-6"/>
                    Julian Hartmann
                  </a>
                  <a href="https://www.youtube.com/channel/UCCQpiU3-tQ1gbrj7JdVyqKQ/videos" role="button" className="btn btn-outline btn-wide gap-2" target="_blank">
                    <img src={youtube} alt="" className="w-7 h-7"/>
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
