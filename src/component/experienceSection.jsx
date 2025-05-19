import React, { useEffect, useState } from "react";
import {
  Database,
  BarChart,
  Cpu,
  Zap,
  Settings,
  Shield,
  GitBranch,
  Code,
  Container,
  Building2,
  ExternalLink,
  FileText,
  Calendar,
  MapPin,
  User,
  BrushCleaning,
} from "lucide-react";
import Mercede_benz_logo from "../assets/image_resources/worke_with/Mercede-benz_logo.svg";

const ExperienceSection = ({ titelHide, theme }) => {
  // const [theme, setTheme] = useState("blue"); // 'blue' or 'dark'

  const themeClasses = {
    blue: {
      container: "bg-black from-blue-900 via-blue-800 to-blue-700",
      card: "bg-blue-600",
      accent: "text-blue-200",
      highlight: "text-green-400",
    },
    dark: {
      container: "bg-black from-gray-900 via-gray-800 to-gray-700",
      card: "bg-gray-600",
      accent: "text-gray-300",
      highlight: "text-green-400",
    },
  };

  const currentTheme = themeClasses[theme];

  const statistics = [
    { value: "20TB+", label: "Total\nDataset Size" },
    { value: "76.8BL+", label: "Processed\nData points" },
    { value: "40%", label: "Computation\nCost Reduced" },
    { value: "25%", label: "Data size\nOptimised" },
  ];

  const achievements = [
    {
      icon: <Database className="w-5 h-5" />,
      title: "Bigdata solution",
      description: "designed & deployed, 25% data size optimised",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Data quality",
      description:
        "strong attention to detail and care 76.8 billions+ time-series data",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Database schema",
      description: "architected for data warehouse to manage 20TB+ data",
    },
    {
      icon: <BarChart className="w-5 h-5" />,
      title: "Data pipelines",
      description: "built for batch and streaming data processing",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Data warehouse & lake",
      description: "migration, optimization, evolution, deployment",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Data Governance Policy",
      description: "Contributed to data quality, availability, security",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Optimised Cost",
      description:
        "of cloud environment archived by reducing computation by 40%",
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Coding",
      description: "Well structured code versioning with GitHub, Docker",
    },
  ];

  // useEffect(() => {
  //   setTheme(theme);
  // }, [theme]);

  return (
    <section
      id="experience"
      className={`min-h-screen ${currentTheme.container} text-white px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-20`}
    >
      {/* Theme Toggle Button */}
      {/* <div className="flex justify-end mb-8">
        <button
          onClick={() => setTheme(theme === "blue" ? "dark" : "blue")}
          className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-300"
        >
          Toggle Theme
        </button>
      </div> */}

      {/* Experience Header */}
      <div className="max-w-7xl mx-auto">
        {!titelHide && (
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-16 text-left">
            Experience
          </h1>
        )}

        {/* Experience Card */}
        <div
          className={`${currentTheme.card} rounded-lg shadow-2xl p-6 sm:p-8 lg:p-12`}
        >
          {/* Header with Logo and Website */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <div className="w-38 h-38  rounded-full flex items-center justify-center">
                <img src={Mercede_benz_logo} alt="" />
              </div>
            </div>
            <a
              href="https://www.mercedes-benz.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme.accent} hover:text-white transition-colors duration-200 flex items-center gap-2`}
            >
              www.mercedes-benz.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Two Column Layout */}
          <div className="flex ">
            {/* Left Column - Details */}
            <div className="space-y-8 w-[30%]">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {/* <User className="w-5 h-5" /> */}
                  Position
                </h3>
                <p className={`${currentTheme.accent} text-lg`}>
                  Data Engineer & Analyst
                </p>
                <p className={`${currentTheme.accent}`}>Master Thesis</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {/* <MapPin className="w-5 h-5" /> */}
                  Location
                </h3>
                <p className={`${currentTheme.accent} text-lg`}>
                  Stuttgart, Germany
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {/* <Calendar className="w-5 h-5" /> */}
                  Timeline
                </h3>
                <p className={`${currentTheme.accent} text-lg`}>
                  Jan - Jun 2024
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {/* <FileText className="w-5 h-5" /> */}
                  Key Point
                </h3>
                <p className={`text-lg underline `}>Research publication</p>
                <p className={`text-lg underline `}>in process</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {/* <ExternalLink className="w-5 h-5" /> */}
                  Link
                </h3>
                <button
                  className={`${currentTheme.accent} text-lg hover:text-white transition-colors duration-200`}
                >
                  Click for more details
                </button>
              </div>
            </div>

            {/* Right Column - Achievements */}
            <div className="space-y-4 w-full">
              {/* Statistics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-start">
                    <div className="text-3xl   lg:text-4xl  mb-2">
                      {stat.value}
                    </div>
                    <div
                      className={`text-lg ${currentTheme.accent} whitespace-pre-line`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4  ">
                  {/* Icon */}
                  <div className="text-white flex-shrink-0 mt-1 text-lg">
                    {achievement.icon}
                  </div>

                    <h4 className="font-semibold text-lg mb-1">{achievement.title}</h4>
                  {/* Text Container */}
                  <div className="flex flex-col text-white text-sm leading-relaxed">
                    {/* Title with bold and some margin */}

                    {/* Description with white text, and inline bold or underlined parts */}
                    <p className="text-white opacity-60  text-lg">
                      {/* Use spans inside description if you want parts bold or underlined */}
                      {achievement.description.split(" ").map((word, i) => {
                        // Example: make numbers or % bold and underlined with dotted line
                        if (/\d+[%]*/.test(word)) {
                          return (
                            <span
                              key={i}
                              className="font-bold underline decoration-dotted decoration-white"
                            >
                              {word + " "}
                            </span>
                          );
                        }
                        // Example: keywords bold
                        if (
                          [
                            "Bigdata",
                            "Data",
                            "Database",
                            "architected",
                            "pipelines",
                            "Governance",
                            "Optimised",
                            "Coding",
                            "GitHub",
                            "Docker",
                          ].some((keyword) =>
                            word.toLowerCase().includes(keyword.toLowerCase())
                          )
                        ) {
                          return (
                            <span key={i} className="font-semibold">
                              {word + " "}
                            </span>
                          );
                        }
                        return word + " ";
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
