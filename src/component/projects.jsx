import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Real Time Stock Market data processing",
    tags: ["Azure", "Kafka", "Power BI"],
    color: "bg-blue-500",
  },
  {
    title: "Framer Studio",
    tags: ["Azure", "Power BI"],
    color: "bg-lime-500",
  },
  {
    title: "Framer Studio",
    tags: ["Global"],
    color: "bg-gray-400",
  },
  {
    title: "Framer Studio",
    tags: ["Global"],
    color: "bg-zinc-700",
  },
  {
    title: "Framer Studio",
    tags: ["Global"],
    color: "bg-gradient-to-r from-blue-600 to-black",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 md:px-16 bg-black text-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">Projects</h2>
        <Link
          href="#"
          className="text-gray-400 hover:text-white flex items-center gap-2"
        >
          See All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="space-y-2">
            <div
              className={cn(
                project.color,
                "h-40 rounded-xl p-4 flex items-center justify-center text-center font-semibold text-white text-lg"
              )}
            >
              {project.title.length > 30 ? (
                <span>{project.title.slice(0, 30)}...</span>
              ) : (
                <span>{project.title}</span>
              )}
            </div>
            <div>
              <p className="font-medium leading-tight truncate">
                {project.title}
              </p>
              <p className="text-gray-400 text-sm">
                {project.tags.join(" | ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
