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
    <div className="bg-gray-800 bg-opacity-60 rounded-lg p-4 space-y-3 border border-gray-700">
      <h3 className="text-white font-medium text-lg mb-4">{title}</h3>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center text-gray-300 text-sm">
            <span className="mr-2 text-gray-500">→</span>
            {skill}
          </div>
        ))}
      </div>
      {logos && (
        <div className="mt-4 flex flex-wrap gap-3">
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
      className="min-h-screen bg-[#000] from-blue-900 via-blue-800 to-blue-700 text-white px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-left">
          Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Programming */}
          <SkillCard title="Programming" skills={skillsData.programming} />

          {/* Data Analysis */}
          <SkillCard
            title="Data Analysis"
            skills={skillsData.dataAnalysis}
            logos={[
              <div className="flex items-center gap-2">
                <img src={Excel} alt="Excel" className="h-7" />
                <img src={Tableau} alt="Tableau" className="h-7" />
              </div>,
              <img src={PowerBI} alt="Power BI" className="h-7" />,
            ]}
          />

          {/* Big Data Engineering */}
          <SkillCard
            title="Big Data Engineering"
            skills={skillsData.bigDataEngineering}
            logos={[
              <div className="flex flex-wrap gap-2">
                <img src={databricks} alt="Databricks" className="h-7" />
                <img src={dbt} alt="dbt" className="h-7" />
                <img src={Hadoop} alt="Hadoop" className="h-7" />
                <img src={Airflow} alt="Airflow" className="h-7" />
                <img src={docker} alt="Docker" className="h-7" />
                <img src={Github} alt="GitHub" className="h-7" />
                <img src={Kafka} alt="Kafka" className="h-7" />
              </div>,
            ]}
          />

          {/* Cloud & Databases */}
          <SkillCard
            title="Cloud & Databases"
            skills={skillsData.cloudDatabases}
            logos={[
              <div className="flex flex-wrap gap-2">
                <img src={Azure} alt="Azure" className="h-7" />
                <img src={MongoDB} alt="MongoDB" className="h-7" />
                <img src={Snowflake} alt="Snowflake" className="h-7" />
                <img src={Alteryx} alt="Alteryx" className="h-7" />
                <img src={Google_cloud} alt="Google Cloud" className="h-7" />
                <img src={AWS} alt="AWS" className="h-7" />
              </div>,
            ]}
          />

          {/* Data Science */}
          <SkillCard title="Data Science" skills={skillsData.dataScience} />

          {/* Language */}
          <SkillCard title="Language" skills={skillsData.language} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
