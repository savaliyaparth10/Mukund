import React from "react";
import { ExternalLink, FileText, MapPin, User, Calendar } from "lucide-react";

export function MercedesBenzTimeline() {
  const timelineData = [
    {
      title: "January 2024",
      content: (
        <div>
          <p className="mb-4 text-sm font-medium text-neutral-300">
            Started as a <span className="text-white">Data Engineer & Analyst</span> at Mercedes-Benz.
          </p>
          <p className="text-sm text-neutral-400">
            Stuttgart, Germany | Master Thesis Collaboration
          </p>
        </div>
      ),
    },
    {
      title: "February 2024",
      content: (
        <p className="text-sm text-neutral-300">
          Architected <span className="text-white font-semibold">Big Data</span> warehouse schema for 20TB+ data.
        </p>
      ),
    },
    {
      title: "March 2024",
      content: (
        <p className="text-sm text-neutral-300">
          Built scalable <span className="text-white font-semibold">data pipelines</span> for batch & streaming.
        </p>
      ),
    },
    {
      title: "April 2024",
      content: (
        <p className="text-sm text-neutral-300">
          Reduced computation cost by <span className="text-green-400 font-bold">40%</span> through optimization.
        </p>
      ),
    },
    {
      title: "May 2024",
      content: (
        <p className="text-sm text-neutral-300">
          Enhanced data quality and governance for 76.8B+ time-series points.
        </p>
      ),
    },
    {
      title: "June 2024",
      content: (
        <div>
          <p className="text-sm text-neutral-300">
            Wrapped up thesis project and started <span className="underline text-green-400">research publication</span> process.
          </p>
          <a
            href="https://www.mercedes-benz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center text-blue-300 hover:text-white text-sm"
          >
            More about Mercedes-Benz <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="timeline-container py-12 px-6">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">
        Timeline @ Mercedes-Benz
      </h2>
      <div className="space-y-10 border-l border-neutral-700 pl-4">
        {timelineData.map((item, index) => (
          <div key={index} className="relative pl-6">
            <div className="absolute -left-3 top-1 w-4 h-4 bg-blue-500 rounded-full shadow-md"></div>
            <h4 className="text-lg text-white font-semibold mb-1">{item.title}</h4>
            <div className="text-neutral-300 text-sm">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
