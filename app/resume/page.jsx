import React from "react";

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
            Guided 15 Masters students in lab and graded their assignment for
            the course "Java Tools and Techniques for Big Data"
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
          <li>2D Maze Game: C++</li>
          <li>2D Snooker Game: Java</li>
          <li>2D Space Shooter: Java</li>
          <li>KMP String Matching Algorithm: Java</li>
          <li>P2P Chat Application: Python</li>
          <li>Age Prediction Mobile App: Flutter, Tensorflow and OpenCV</li>
        </ul>

        {/* EDUCATION */}
        <h2 className="text-2xl font-bold pt-5">EDUCATION</h2>
        <ul className="list-disc list-inside">
          <li>Bahcesehir University: B.Sc. in Computer Engineering</li>
          <li>
            University of Galway: M.Sc. in Software Design and Development
          </li>
        </ul>
      </div>
    </main>
  );
}
