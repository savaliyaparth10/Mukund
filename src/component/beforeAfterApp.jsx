import React from "react";
import ReactCompareImage from "react-compare-image";

const before =
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg";
const after =
  "https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg";

export default function BeforeAfterApp() {
  return (
    <div id="our_process" className="w-full  md:px-24 px-6 py-16 ">
      <h1 className="text-5xl mt-2 font-bold mb-4 lg:text-start">
        {" "}
        Our Process
      </h1>
      <hr />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
      </div>
    </div>
  );
}
