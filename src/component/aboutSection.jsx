import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#000] from-blue-900 to-black text-white py-16 px-6 lg:px-12"
      aria-label="About me section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold">About me</h1>

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                " As a passionate data professional, I have 1.5+ years of
                experience in{" "}
                <a
                  href="#"
                  className="text-blue-300 hover:text-blue-200 underline transition-colors duration-300"
                  aria-label="Learn more about large-scale data processing"
                >
                  large-scale data processing
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-300 hover:text-blue-200 underline transition-colors duration-300"
                  aria-label="Learn more about real-time analytics"
                >
                  real-time analytics
                </a>
                . My expertise spans the entire{" "}
                <a
                  href="#"
                  className="text-blue-300 hover:text-blue-200 underline transition-colors duration-300"
                  aria-label="Learn more about data lifecycle"
                >
                  data lifecycle
                </a>
                , from{" "}
                <a
                  href="#"
                  className="text-blue-300 hover:text-blue-200 underline transition-colors duration-300"
                  aria-label="Learn more about infrastructure design"
                >
                  infrastructure design
                </a>{" "}
                to advanced analytics and visualisation. "
              </p>

              <p>
                With a strong academic foundation in a Master of Web and{" "}
                <a
                  href="#"
                  className="text-blue-300 hover:text-blue-200 underline transition-colors duration-300"
                  aria-label="Learn more about Data Science"
                >
                  Data Science
                </a>{" "}
                and hands-on{" "}
                <a
                  href="#"
                  className="text-blue-300 hover:text-blue-200 underline transition-colors duration-300"
                  aria-label="Learn more about industry experience"
                >
                  industry experience
                </a>
                , I am driven to deliver end-to-end{" "}
                <a
                  href="#"
                  className="text-blue-300 hover:text-blue-200 underline transition-colors duration-300"
                  aria-label="Learn more about data solutions"
                >
                  data solutions
                </a>{" "}
                that drive impactful business outcomes.
              </p>

              <p>
                "Currently co-authoring a research paper with the University of
                Koblenz and Mercedes-Benz."
              </p>
            </div>
          </div>

          {/* Right Column - Information Cards */}
          <div className="space-y-8">
            {/* Education Section */}
            <article>
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span
                    className="text-blue-300 mt-1 flex-shrink-0"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  <div>
                    <p className="font-medium">M.Sc. - Web and Data Science</p>
                    <p className="text-gray-300 text-sm">
                      University of Koblenz, Germany ( Present )
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="text-blue-300 mt-1 flex-shrink-0"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  <div>
                    <p className="font-medium">
                      B.E. - Computer Science Engineering
                    </p>
                    <p className="text-gray-300 text-sm">
                      Gujarat Technological University (July 2015- Jun 2019)
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Industry Knowledge Section */}
            <article>
              <h2 className="text-xl font-semibold mb-4">Industry Knowledge</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-300" aria-hidden="true">
                    →
                  </span>
                  <span>Automotive & Manufacturing</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-300" aria-hidden="true">
                    →
                  </span>
                  <span>Energy & Utilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-300" aria-hidden="true">
                    →
                  </span>
                  <span>Retail & E-commerce</span>
                </div>
              </div>
            </article>

            {/* Portfolio Companies and Visit My Profile Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <article>
                <h2 className="text-xl font-semibold mb-4">
                  Portfolio Companies
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-300" aria-hidden="true">
                      →
                    </span>
                    <span>Mercedes-Benz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-300" aria-hidden="true">
                      →
                    </span>
                    <span>Zeonlabs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-300" aria-hidden="true">
                      →
                    </span>
                    <span>Planet X</span>
                  </div>
                </div>
              </article>

              <article>
                <h2 className="text-xl font-semibold mb-4">
                  Visit My Profile At
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-300" aria-hidden="true">
                      →
                    </span>
                    <a
                      href="#"
                      className="hover:text-blue-300 transition-colors duration-300"
                      aria-label="Visit my Tableau profile"
                    >
                      Tableau
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-300" aria-hidden="true">
                      →
                    </span>
                    <a
                      href="#"
                      className="hover:text-blue-300 transition-colors duration-300"
                      aria-label="Visit my LinkedIn profile"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-300" aria-hidden="true">
                      →
                    </span>
                    <a
                      href="#"
                      className="hover:text-blue-300 transition-colors duration-300"
                      aria-label="Visit my GitHub profile"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
