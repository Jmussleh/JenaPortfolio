import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from "next/image";
import Jena from "../public/Jena.png"
import badge from "../public/codingbadge.png"
import JavaScript from "../public/JavaScript-logo.png"
import Reactpic from "../public/React.png"
import tailwind from "../public/tailwind.png"
import Background from "../public/linesbackground.jpg"
import Brewsome from "../public/Brewsome Weather.png"
import flightnanny from "../public/flight_nanny.png"
import studybuddy from "../public/studybuddyscreenshot.png"
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode ] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jena Mussleh Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl"><span className="text-lime-400">MERN</span>Stack</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li>
                < Link className="bg-gradient-to-r from from-lime-600 text- to-lime-400 text-white px-4 py-2 rounded-md ml-8" href="https://docs.google.com/document/d/1E-kmyd8txlxfWmKkyoK_aqqRkdK8c_SxKQfz7X-yILM/edit?usp=sharing">Resume</Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-lime-400 font-medium dark:text-lime-400 md:text-6xl">Jena Mussleh</h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
              Motivated and skilled Full Stack Developer, recently graduated from the Full Stack Coding Bootcamp at UCF, proficient in the MERN stack. Demonstrated expertise in building robust applications and collaborating effectively within team environments using GitHub for version control. Possesses a strong foundation in project organization and coordination, contributing to successful group projects throughout the bootcamp. Excited to leverage acquired skills and passion for coding to contribute to a dynamic development team.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <Link href="https://www.linkedin.com/in/jenamussleh">
              <AiFillLinkedin />
            </Link>
            <Image src={badge} height={100} />
            <Link href="https://github.com/Jmussleh?tab=repositories">
              <AiFillGithub />
            </Link>
           
          </div>
          <div className="realtive mx-auto rounded-full w-80 h-80 overflow-hidden mt-20 md:h-96 md:w-96 ">
            <Image src={Jena} />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-center dark:text-white">Services I Offer</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 lg:text-2xl">
                Languages
              </h3>
              <h4 className="py-4 text-lime-400 md:text-lg lg:text-xl">Tools I Use</h4>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">JavaScript</p>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">Java</p>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">Python</p>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">C#</p>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 lg:text-2xl">
                Libraries
              </h3>
              <h4 className="py-4 text-lime-400 md:text-lg lg:text-xl">Tools I Use</h4>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">React</p>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">Node</p>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">jQuery</p>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">NPM</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 lg:text-2xl">
                Frameworks
                </h3>
              <h4 className="py-4 text-lime-400 md:text-lg lg:text-xl">Tools I Use</h4>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">Bootstrap</p>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">Tailwind</p>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">CSS3</p>
              <p className="text-gray-800 py-1 md:text-lg lg:text-xl">HTML5</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-center dark:text-white">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          </div>
        </section>
      </main>
    </div>
  );
}