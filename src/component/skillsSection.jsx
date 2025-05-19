import React from "react";
import AWS from "../assets/image_resources/skills_logo/AWS.svg";
import Airflow from "../assets/image_resources/skills_logo/Airflow.svg";
import Alteryx from "../assets/image_resources/skills_logo/Alteryx.svg";
import Azure from "../assets/image_resources/skills_logo/Azure.svg";
import Excel from "../assets/image_resources/skills_logo/Excel.svg";
import Github from "../assets/image_resources/skills_logo/Github.svg";
import Google_cloud from "../assets/image_resources/skills_logo/Google_cloud.svg";
import Hadoop from "../assets/image_resources/skills_logo/Hadoop.svg";
import Kafka from "../assets/image_resources/skills_logo/Kafka.svg";
import MongoDB from "../assets/image_resources/skills_logo/MongoDB.svg";
import PowerBI from "../assets/image_resources/skills_logo/PowerBI.svg";
import Snowflake from "../assets/image_resources/skills_logo/Snowflake.svg";
import Tableau from "../assets/image_resources/skills_logo/Tableau.svg";
import databricks from "../assets/image_resources/skills_logo/databricks.svg";
import dbt from "../assets/image_resources/skills_logo/dbt.svg";
import docker from "../assets/image_resources/skills_logo/docker.svg";

const SkillsSection = () => {
  const skillsData = {
    programming: [
      "Python",
      "PySpark",
      "SQL",
      "VBA | Macro",
      "Shell Script",
      "Html / css",
      "JavaScript",
      "Algorithm Dev",
    ],
    dataAnalysis: [
      "KPI Analysis",
      "Statistics",
      "Dashboards",
      "A/B Testing",
      "Gap Analysis",
    ],
    bigDataEngineering: [
      "Data Lake",
      "Data Architecture",
      "Data Warehousing",
      "Cluster Management",
      "ETL / ELT",
      "CI / CD data pipeline",
      "Database Schema",
      "DBT",
    ],
    cloudDatabases: [
      "Azure",
      "Google Cloud",
      "Snowflake",
      "Delta Lake",
      "Mongo DB",
      "NOSQL",
      "Alteryx",
    ],
    dataScience: ["Data Wrangling", "ML", "Forecasting"],
    language: ["German", "English"],
  };

  const SkillCard = ({ title, skills, logos = null }) => (
    <div className="bg-blue-950 bg-opacity-50 rounded-lg p-6 space-y-4 border border-blue-900/40 min-w-[290px] flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-white font-semibold text-lg">{title}</h3>

      {/* Skills List */}
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center text-gray-200 text-lg">
            <span className="mr-2 text-blue-500">→</span>
            {skill}
          </div>
        ))}
      </div>

      {/* Logos (aligned to bottom right) */}
      {logos && (
        <div className="mt-auto pt-4 flex justify-end flex-wrap gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center">
              {logo}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#000] from-blue-950 via-blue-950 to-black text-white px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-20 lg:h-[100vh] flex items-center"
    >
      <div className=" mx-auto container">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-semibold mb-16 text-left text-white">
          Skills
        </h1>

        {/* Skills Grid */}
        <div className="flex  ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
            {/* Programming */}
            <div className="grid grid-cols-1 gap-4 ">
              <div className="">
                <SkillCard
                  title="Programming"
                  skills={skillsData.programming}
                />
              </div>
              <div>
                <SkillCard title="Language" skills={skillsData.language} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                {/* Data Analysis */}
                <SkillCard
                  title="Data Analysis"
                  skills={skillsData.dataAnalysis}
                  logos={[
                    <div key="excel-tableau" className="flex flex-wrap gap-4">
                      <img src={Excel} alt="Excel" className="h-8" />
                      <img src={Tableau} alt="Tableau" className="h-6" />
                      <img
                        key="powerbi"
                        src={PowerBI}
                        alt="Power BI"
                        className="h-8"
                      />
                    </div>,
                  ]}
                />
              </div>

              {/* Language */}

              {/* Data Science */}
              <SkillCard title="Data Science" skills={skillsData.dataScience} />
            </div>

            {/* Big Data Engineering */}

            <SkillCard
              title="Big Data Engineering"
              skills={skillsData.bigDataEngineering}
              logos={[
                <div key="big-data-tools" className="flex flex-wrap gap-4">
                  <img src={databricks} alt="Databricks" className="h-8" />
                  <img src={dbt} alt="dbt" className="h-8" />
                  <img src={Hadoop} alt="Hadoop" className="h-8" />
                  <img src={Airflow} alt="Airflow" className="h-8" />
                  <img src={docker} alt="Docker" className="h-8" />
                  <img src={Github} alt="GitHub" className="h-6" />
                  <img src={Kafka} alt="Kafka" className="h-8" />
                </div>,
              ]}
            />

            {/* Cloud & Databases */}
            <SkillCard
              title="Cloud & Databases"
              skills={skillsData.cloudDatabases}
              logos={[
                <div key="cloud-db-tools" className="flex flex-wrap gap-4">
                  <img src={Azure} alt="Azure" className="h-8" />
                  <img src={MongoDB} alt="MongoDB" className="h-8" />
                  <img src={Snowflake} alt="Snowflake" className="h-8" />
                  <img src={Alteryx} alt="Alteryx" className="h-8" />
                  <img src={Google_cloud} alt="Google Cloud" className="h-8" />
                  <img src={AWS} alt="AWS" className="h-8" />
                </div>,
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
