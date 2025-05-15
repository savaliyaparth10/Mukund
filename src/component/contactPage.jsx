import React, { useEffect, useState } from "react";
import LoadingAM from "../assets/Frame 5.gif";

export const ContactPage = () => {
  const [ContactPageData, setContactPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://naturalx.in/admin/api/get_extra_details"
        );
        const result = await response.json();
        if (result.status === 1) {
          setContactPageData(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phone" && value.length > 10) {
      return; // Prevent input longer than 10 characters
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all required fields (Name, Phone, Email).");
      return;
    }

    try {
      const response = await fetch(
        `https://naturalx.in/admin/api/save_contact?name=${encodeURIComponent(
          formData.name
        )}&phone=${encodeURIComponent(
          formData.phone
        )}&email=${encodeURIComponent(formData.email)}&msg=${encodeURIComponent(
          formData.message
        )}`,
        {
          method: "GET", // or "POST" if the API supports POST
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        alert("Your contact details have been submitted!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          consent: false,
        });
      } else {
        console.error("Failed to submit form");
        alert("There was an issue submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please check your connection and try again.");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  if (isLoading)
    return (
      <div className="text-center py-24 mt-50 w-[100%] min-h-[80vh] flex justify-center items-center">
        <img src={LoadingAM} className="w-[70px] h-[70px]" alt="Loading" />
      </div>
    );

  return (
    <div id="contact" className="w-full  md:px-24 px-6 py-16 mt-4 ">
      <h1 className="text-5xl font-bold mb-4 md:flex ">Contact Us</h1>
      <hr />
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2  gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold mb-6 md:flex">Get in touch</h2>
          <p className="text-gray-700 mb-8 md:flex md:justify-start md:text-left">
            NatureX Premium Textures in limecoat is a natural slaked lime and
            clay base product combined with latest technology…
          </p>

          <div className="space-y-6 ">
            <div className="flex items-start space-x-4">
              <div className="w-8 flex items-center justify-center h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">EMAIL ADDRESS</h3>
                <a
                  href={`mailto:${ContactPageData?.email}`}
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {ContactPageData?.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 flex items-center justify-center h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">PHONE NUMBER</h3>
                <a
                  href={`tel:${ContactPageData?.phone}`}
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {ContactPageData?.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 flex items-center justify-center h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">OUR ADDRESS</h3>
                <a
                  href={ContactPageData?.address_1_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {ContactPageData?.address1}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block font-bold mb-2 flex justify-start">
                Your Name  <span className={` text-red-600 text-md`}>{' '}*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 rounded"
                placeholder="your name..."
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-bold flex justify-start">
                Your Phone <span className={` text-red-600 text-md`}>{' '}*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 rounded"
                placeholder="Phone"
                pattern="\d{10}"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-bold flex justify-start">
                Your E-mail <span className={` text-red-600 text-md`}>{' '}*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 rounded"
                placeholder="your E-mail..."
                required
              />
            </div>
          </div>

          <div className="">
            <label className="block mb-2 font-bold flex justify-start">
              Message  <span className={` text-red-600 text-md`}>{' '}*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 rounded h-40"
              placeholder="Your Message"
              required
            />
          </div>

          <div className="flex items-center ">
            <div className=" flex items-top justify-start ">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-4 h-4  mt-1 focus:ring-orange-500 text-orange-600 border-gray-300 rounded"
                required
              />
              <div className="ml-2">
                I consent to email tracking for a better experience.
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition-colors"
          >
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
};
