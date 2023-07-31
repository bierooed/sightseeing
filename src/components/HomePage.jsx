import React from "react";
import paths from "../paths";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="h-2/5 flex flex-col justify-around items-center">
      <h1 className="xs: w-full md:w-1/2 font-normal text-gray-700">
        🚧 The project is still under development, so the model can recognize
        only{" "}
        <span className="bg-yellow-200">
          "History Museum of Armenia", "Armenian National Opera and Ballet
          Theatre" and "The Government of the Republic of Armenia"
        </span>
      </h1>

      <div className="mt-24">
        <Link to={paths.imageUpload} className="underline decoration-blue-400">
          <h5 className="mb-2 xs: text-md md:text-xl font-bold tracking-tight text-blue-400">
            Click here and go to the page to upload the image!
          </h5>
        </Link>
      </div>
    </main>
  );
}
