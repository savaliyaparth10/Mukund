import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Navigate, useNavigate } from "react-router-dom";
import image1 from "../assets/1.png";

export const BookFreeSiteVisitSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pincode: "",
    email: "",
    whatsappUpdates: false,
    hasConstruction: false,
    hasPainter: false,
    userType: "",
    selectedLocation: "", // New state for selected location
  });
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pincodeData, setPincodeData] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form submitted:", formData);

    try {
      const response = await fetch(
        `https://naturalx.in/admin/api/save_contact?name=${encodeURIComponent(
          formData.name
        )}&phone=${encodeURIComponent(
          formData.mobile
        )}&email=${encodeURIComponent(
          formData.email || "-"
        )}&msg=${encodeURIComponent(message)}`
      );

      if (response.ok) {
        console.log("Form data submitted successfully");
        setShowToast(true);
        setFormData({
          name: "",
          mobile: "",
          pincode: "",
          email: "",
          whatsappUpdates: false,
          hasConstruction: false,
          hasPainter: false,
          userType: "",
          selectedLocation: "",
        });
        // <Navigate to="/app" replace />;
        setTimeout(() => {
          setShowToast(false);
          navigate("/app");
          setTimeout(() => {
            window.location.reload(); // Reload after navigation
          }, 100);
        }, 3000);
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch pincode data only if pincode is 6 digits long
    const fetchPincodeData = async () => {
      if (formData.pincode.length === 6) {
        try {
          const pincodeResponse = await fetch(
            `https://api.postalpincode.in/pincode/${formData.pincode}`
          );
          const pincodeResult = await pincodeResponse.json();
          if (pincodeResult[0].Status === "Success") {
            setPincodeData(pincodeResult[0].PostOffice);
          } else {
            setPincodeData([]);
          }
        } catch (error) {
          console.error("Error fetching pincode data:", error);
          setPincodeData([]);
        }
      }
    };

    fetchPincodeData();
  }, [formData.pincode]);

  useEffect(() => {
    const selectedLocation = pincodeData.find(
      (location) => location.Name === formData.selectedLocation
    );
    setMessage(
      `WhatsApp Updates: ${formData.whatsappUpdates}, User Type: ${
        formData.userType
      }, Pincode: ${formData.pincode}. Location: ${
        selectedLocation ? selectedLocation.Name : "Unknown"
      }, District: ${
        selectedLocation ? selectedLocation.District : "Unknown"
      }, State: ${
        selectedLocation ? selectedLocation.State : "Unknown"
      }, Country: ${selectedLocation ? selectedLocation.Country : "Unknown"}`
    );
  }, [
    pincodeData,
    formData.whatsappUpdates,
    formData.userType,
    formData.pincode,
    formData.selectedLocation,
  ]);

  return (
    <div className="px-4 md:px-12 min-h-[75vh] lg:px-24 pt-24 md:pt-18 lg:pt-18 relative">
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-bleck px-4 py-2 rounded-lg shadow-lg z-50">
          Details added successfully!
        </div>
      )}
        <div className="">
          <img
            src={image1}
            alt="Book Free Site Visit"
            className="w-full h-auto rounded-xl mb-4"
          />
        </div>
      <div className=" p-4 mx-auto rounded-3xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bleck mb-4">
            Book Free Site Visit
          </h1>
          <p className="text-lg text-bleck/90">
            Say goodbye to painting hassles with Prime Texture's expert
            supervision!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-lg  text-bleck placeholder-bleck/80 border border-bleck-700 focus:outline-none focus:border-bleck-400"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile" className="sr-only">
                Mobile Number
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  {/* Phone Icon */}
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 19 18"
                  >
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                  </svg>
                </div>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="+91 Enter mobile number"
                  required
                  pattern="[0-9]{10}"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.mobile}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                    if (value.length <= 10) {
                      setFormData({ ...formData, mobile: value });
                    }
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="pincode" className="sr-only">
                Pincode
              </label>
              <input
                id="pincode"
                name="pincode"
                type="text"
                placeholder="Enter your Pincode"
                required
                pattern="[0-9]{6}"
                className="w-full px-4 py-3 rounded-lg  text-bleck placeholder-bleck/80 border border-bleck-700 focus:outline-none focus:border-blue-400"
                value={formData.pincode}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  if (value.length <= 6) {
                    setFormData({
                      ...formData,
                      pincode: value,
                      selectedLocation: "",
                    });
                  }
                }}
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     pincode: e.target.value,
                //     selectedLocation: "",
                //   });
                // }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative w-full">
                {/* Email Icon */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>

                {/* Email Input Field */}
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {formData.pincode.length === 6 && pincodeData.length > 0 && (
              <div className="form-group">
                <label htmlFor="location" className="sr-only">
                  Location
                </label>
                <Select
                  id="location"
                  name="location"
                  placeholder="Select Location"
                  value={formData.selectedLocation || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      selectedLocation: e.target.value,
                    })
                  }
                  displayEmpty
                  className="w-full px-4 py-3 rounded-lg  text-bleck border border-bleck-700 focus:outline-none focus:border-blue-400"
                  sx={{
                    "& .MuiSelect-select": {
                      color: "#000", // Set the text color of the selected item to bleck
                    },
                    "& .MuiSelect-icon": {
                      color: "#000", // Set the color of the dropdown arrow to bleck
                    },
                  }}
                >
                  <MenuItem
                    value=""
                    disabled
                    className="text-bleck"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      bleckSpace: "nowrap",
                    }}
                  >
                    Select Location
                  </MenuItem>
                  {pincodeData.map((location, index) => (
                    <MenuItem
                      key={index}
                      value={location.Name}
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        bleckSpace: "nowrap",
                      }}
                    >
                      {location.Name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <label className="flex items-center space-x-3 text-bleck cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={formData.whatsappUpdates}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whatsappUpdates: e.target.checked,
                    })
                  }
                />
                <div
                  className={`w-6 h-6 border-2 rounded-full ${
                    formData.whatsappUpdates
                      ? "bg-green-500 border-green-500"
                      : "border-bleck"
                  }`}
                >
                  {formData.whatsappUpdates && (
                    <svg
                      className="w-4 h-4 mx-auto mt-0.5 text-bleck"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span>Update me on WhatsApp</span>
            </label>

            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-labelledby="user-type-radio-buttons-group"
                name="user-type-radio-buttons-group"
                value={formData.userType}
                onChange={(e) =>
                  setFormData({ ...formData, userType: e.target.value })
                }
              >
                <FormControlLabel
                  value="Architect/Interior Designer"
                  control={
                    <Radio
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-bleck">
                      An Architect/Interior Designer
                    </span>
                  }
                />
                <FormControlLabel
                  value="End User (Homeowner/Client)"
                  control={
                    <Radio
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-bleck">
                      An End User (Homeowner/Client)
                    </span>
                  }
                />
                <FormControlLabel
                  value="Inquiring for Dealership/Distribution"
                  control={
                    <Radio
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-bleck">
                      Inquiring for Dealership/Distribution
                    </span>
                  }
                />
              </RadioGroup>
            </FormControl>
          </div>

          <p className="text-sm text-bleck/70">
            By proceeding, you are authorizing NatureX Premium Textures and its
            suggested contractors to get in touch with you through calls, sms,
            or e-mail.
          </p>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-700 text-[#fff] font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span>Submitting...</span>
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span>Book an appointment</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
