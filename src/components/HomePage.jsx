import React from "react";
import paths from "../paths";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="flex flex-col justify-between h-full">
      <main className="h-3/5 flex flex-col justify-around items-center">
        <h1 className="xs: w-full md:w-1/2 font-normal text-gray-700 dark:text-gray-400">
          🚧 The project is still under development, so the model can recognize
          only <t />
          <span className="bg-yellow-200">
            "History Museum of Armenia", "Armenian National Opera and Ballet
            Theatre" and "The Government of the Republic of Armenia"
          </span>
        </h1>

        <div className="">
          <Link
            to={paths.imageUpload}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 xs: text-md md:text-xl font-bold tracking-tight text-blue-400 dark:text-white">
              Click here and go to the page to upload the image!
            </h5>
          </Link>
        </div>
      </main>

      <footer className="mt-6 flex flex-wrap justify-around items-center">
        <div>
          <h3>🔗 Links</h3>
          <ul className="text-blue-400 underline">
            <li>
              <a href="https://github.com/bierooed/sightseeing" target="_blank">
                Project GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hov13/" target="_blank">
                Author's Linkedin
              </a>
            </li>
          </ul>
        </div>
        <h3 className="mt-6">Developed with love in Armenia 🇦🇲</h3>
      </footer>
    </section>
  );
}
