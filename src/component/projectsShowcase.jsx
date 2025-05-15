import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Custom styles for the Swiper
const swiperStyles = `
  .mySwiper {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  
  .mySwiper .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
    border-radius: 12px;
    cursor: pointer;
  }
  
  .mySwiper .swiper-slide-active .project-card {
    opacity: 1;
    transform: scale(1);
  }
  
  .mySwiper .swiper-slide:not(.swiper-slide-active) .project-card {
    opacity: 0.7;
    transform: scale(0.95);
  }
  
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.5;
    width: 12px;
    height: 12px;
  }
  
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #3b82f6;
  }
  
  @media (max-width: 768px) {
    .mySwiper .swiper-slide {
      width: 280px;
      height: 280px;
    }
  }
  
  @media (max-width: 480px) {
    .mySwiper .swiper-slide {
      width: 250px;
      height: 250px;
    }
  }
`;

const ProjectsShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Real Time Stock Market data processing",
      tags: ["Azure", "Kafka", "Power BI"],
      category: "Financial Technology",
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Framer Studio",
      tags: ["Azure", "Power BI"],
      category: "Design Platform",
      bgColor: "bg-green-500",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Framer Studio",
      tags: ["Global"],
      category: "Web Development",
      bgColor: "bg-gray-500",
      textColor: "text-white",
    },
    {
      id: 4,
      title: "Framer Studio",
      tags: ["Global"],
      category: "Digital Marketing",
      bgColor: "bg-gray-800",
      textColor: "text-white",
    },
    {
      id: 5,
      title: "Framer Studio",
      tags: ["Global"],
      category: "Mobile App",
      bgColor: "bg-blue-700",
      textColor: "text-white",
    },
  ];

  return (
    <div id="projects">
      <style>{swiperStyles}</style>
      <section
        className="bg-black text-white py-16 px-6 lg:px-12"
        role="main"
        aria-label="Projects Showcase"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex items-center justify-between mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold">Projects</h1>
            <a
              href="/projects"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
              aria-label="View all projects"
            >
              <span>See All</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </header>

          {/* Desktop Grid View */}
          <div className="hidden lg:grid grid-cols-5 gap-6 mb-16">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`
                  ${project.bgColor} 
                  ${project.textColor}
                  rounded-lg p-6 h-64 cursor-pointer
                  hover:scale-105 transition-transform duration-300
                  focus:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20
                `}
                tabIndex={0}
                role="button"
                aria-label={`View project: ${project.title}`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold mb-4 leading-tight">
                      {project.title}
                    </h2>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-sm opacity-75"
                          aria-label={`Technology: ${tag}`}
                        >
                          {tag}
                          {tagIndex < project.tags.length - 1 && (
                            <span className="mx-2">|</span>
                          )}
                        </span>
                      ))}
                    </div>
                    <span className="sr-only">
                      Category: {project.category}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile Coverflow Swiper */}
          <div className="lg:hidden">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay, A11y]}
              className="mySwiper"
              a11y={{
                enabled: true,
                prevSlideMessage: "Previous project",
                nextSlideMessage: "Next project",
                paginationBulletMessage: "Go to project {{index}}",
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <article
                    className={`
                      project-card
                      ${project.bgColor} 
                      ${project.textColor}
                      rounded-lg p-6 h-full w-full cursor-pointer
                      transition-all duration-300
                      focus:outline-none focus:ring-4 focus:ring-white/20
                    `}
                    tabIndex={0}
                    role="button"
                    aria-label={`View project: ${project.title}`}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-4 leading-tight">
                          {project.title}
                        </h2>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-sm opacity-75"
                              aria-label={`Technology: ${tag}`}
                            >
                              {tag}
                              {tagIndex < project.tags.length - 1 && (
                                <span className="mx-2">|</span>
                              )}
                            </span>
                          ))}
                        </div>
                        <span className="sr-only">
                          Category: {project.category}
                        </span>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsShowcase;
