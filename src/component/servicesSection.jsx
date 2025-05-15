import React, { useEffect, useState } from "react";
import {
  HandCoins,
  Paintbrush,
  SquareChartGantt,
  Combine,
  BicepsFlexed,
  Signature,
} from "lucide-react";

export const ServicesSection = () => {
  const [services, setServices] = useState([]);

  // Predefined icons to be assigned based on index
  const icons = [
    <HandCoins className="w-12 h-12" aria-hidden="true" />,
    <Paintbrush className="w-12 h-12" aria-hidden="true" />,
    <SquareChartGantt className="w-12 h-12" aria-hidden="true" />,
    <Combine className="w-12 h-12" aria-hidden="true" />,
    <BicepsFlexed className="w-12 h-12" aria-hidden="true" />,
    <Signature className="w-12 h-12" aria-hidden="true" />,
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://naturalx.in/admin/api/get_services"
        );
        const result = await response.json();
        if (result.status === 1) {
          setServices(result.data);
        } else {
          console.error("Failed to fetch services:", result.msg);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section
      id="services"
      className="top-8 w-full mt-2 md:px-24 px-6 py-16"
      style={{ marginBottom: "-100px" }}
    >
      <header>
        <h1 className="text-5xl lg:text-start font-bold mb-4">Services</h1>
        <hr />
      </header>

      <article className="mb-12 lg:text-start mt-4">
        <h2 className="text-2xl font-bold mb-4">
          Unveiling the Art of Premium Textures: Our Services
        </h2>
        <p className="text-base">
          Our dedication to excellence goes beyond delivering stunning textures.
          At Premium Textures, it's about enhancing spaces with unparalleled
          artistry.
        </p>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="flex flex-col lg:text-start text-center space-y-4"
            aria-labelledby={`service-${service.id}`}
          >
            <div className="w-full flex justify-center lg:justify-start">
              {icons[index % icons.length]}{" "}
            </div>
            <h3
              id={`service-${service.id}`}
              className="text-2xl font-bold"
            >
              {service.name}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
