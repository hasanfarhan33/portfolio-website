import React from "react";
import Link from "next/link";

export default function resume() {
  return (
    <main className="flex justify-center h-screen">
      <div className="flex flex-col h-auto w-4/6 px-16 font-semibold text-xl">
        <h1 className="text-center text-3xl font-extrabold pt-10">
          Farhan Hasan
        </h1>

        <h2 className="text-2xl font-bold pt-5">EXPERIENCE</h2>
        <h3>
          <a className="font-bold">University of Galway: </a>{" "}
          <a className="italic">Graduate Teaching Assistant</a>
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Mentored 15 Masters students in lab and graded their assignment for
            the course &quot;Java Tools and Techniques for Big Data&quot;
          </li>
        </ul>
        <h3 className="pt-3">
          <a className="font-bold">Rezo.AI: </a>
          <a className="italic">Software Engineering Intern</a>
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Utilized modules like pyTesseract and NLTK to extract text from 500
            images of documents
          </li>
          <li>
            Used Selenium and xlsxwriter to automate minor repetitive browser
            tasks, like extracting and storing data from different sources
          </li>
        </ul>
        <h3 className="pt-3">
          <a className="font-bold">Duosis: </a>
          <a className="italic">Automation Intern</a>
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Developed workflows on a Micro Focus software to automate intra and
            inter machine tasks
          </li>
          <li>
            Customized workflows using Javascript to automate complex file
            manipulation tasks
          </li>
        </ul>

        
        {/* PROJECTS */}
        <h2 className="text-2xl font-bold pt-5">PROJECTS</h2>
        <ul className="list-disc list-inside">
          <div className="flex justify-between">
            <li>Too Much Traffic Game</li>
            <Link className = "text-indigo-500"href="https://github.com/hasanfarhan33/tooMuchTrafficPyGame" rel="noopener noreferrer" target="_blank">Check on GitHub</Link>
          </div>
          <div className = "flex justify-between">
            <li>Student Assessment Portal Website</li>
            <Link className = "text-indigo-500"href="https://github.com/hasanfarhan33/Assignment_3" rel="noopener noreferrer" target="_blank">Check on GitHub</Link>
          </div>
          <div className = "flex justify-between">
            <li>Physics Sandbox</li>
            <Link className = "text-red-500"href="" rel="noopener noreferrer" target="_blank">Not available on GitHub yet</Link>
          </div>
            
        </ul>

        {/* EDUCATION */}
        <h2 className="text-2xl font-bold pt-5">EDUCATION</h2>
        <ul className="list-disc list-inside">
          <li>Bahcesehir University: B.Sc. in Computer Engineering</li>
          <li>
            University of Galway: M.Sc. in Software Design and Development
          </li>
        </ul>

        {/* SKILLS */}
        <h2 className = "text-2xl font-bold pt-5">SKILLS</h2>
        <ul className="no-disc list-inside">
          <li><a className = "font-bold">Languages: </a>C++, Java, Python, HTML, CSS, JavaScript</li>
          <li><a className="font-bold">Frameworks: </a>React, NodeJS, MongoDB, PyGame, TensorFlow, Numpy, Selenium, PyTesseract, OpenCV, NextJS, mySQL, Apache Tomcat </li>
        </ul>

      </div>
    </main>
  );
}
