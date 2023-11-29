export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div
        className="flex flex-col justify-evenly items-center w-4/6 h-4/6 px-16 
      bg-indigo-100 rounded-3xl shadow-xl hover:shadow-2xl 
      transition ease-in-out duration-500 hover:scale-110"
      >
        <h1 className="text-3xl font-bold">
          Hi! My name is{" "}
          <a className="font-extrabold">Farhan Hasan. &#128075;</a>
        </h1>
        <h2 className="font-semibold text-xl">
          I am a Masters student studying Software Design and Development in
          University of Galway, Ireland. Please use the navbar above to navigate
          around this website. I have created this website to showcase my
          skills. Thank you for clicking on my website.
        </h2>
      </div>
    </main>
  );
}
