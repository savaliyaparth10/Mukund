import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const SiteVisitForm = () => {
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
        setTimeout(() => setShowToast(false), 3000);
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
    <div className="px-4 md:px-12 lg:px-24  pt-24 md:pt-18 lg:pt-18 relative">
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Details added successfully!
        </div>
      )}
      <div className="bg-[#073863] p-12 min-h-[100vh] mx-auto rounded-3xl ">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Book Free Site Visit
          </h1>
          <p className="text-lg text-white/90">
            Bid goodbye to your home painting hassles with our expert
            supervision
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
                className="w-full px-4 py-3 rounded-lg bg-[#073863] text-white placeholder-white/70 border border-white-600 focus:outline-none focus:border-white-400"
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
              <input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="+91 Enter mobile number"
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 rounded-lg bg-[#073863] text-white placeholder-white/70 border border-white-600 focus:outline-none focus:border-blue-400"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
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
                className="w-full px-4 py-3 rounded-lg bg-[#073863] text-white placeholder-white/70 border border-white-600 focus:outline-none focus:border-blue-400"
                value={formData.pincode}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    pincode: e.target.value,
                    selectedLocation: "",
                  });
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#073863] text-white placeholder-white/70 border border-white-600 focus:outline-none focus:border-blue-400"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
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
                  className="w-full px-4 py-3 rounded-lg bg-[#073863] text-white border border-white-600 focus:outline-none focus:border-blue-400"
                  sx={{
                    "& .MuiSelect-select": {
                      color: "#fff", // Set the text color of the selected item to white
                    },
                    "& .MuiSelect-icon": {
                      color: "#fff", // Set the color of the dropdown arrow to white
                    },
                  }}
                >
                  <MenuItem
                    value=""
                    disabled
                    className="text-white"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
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
                        whiteSpace: "nowrap",
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
            <label className="flex items-center space-x-3 text-white cursor-pointer">
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
                      : "border-white"
                  }`}
                >
                  {formData.whatsappUpdates && (
                    <svg
                      className="w-4 h-4 mx-auto mt-0.5 text-white"
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
                        color: "#fff",
                        "&.Mui-checked": {
                          color: "#fff",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-white">
                      An Architect/Interior Designer
                    </span>
                  }
                />
                <FormControlLabel
                  value="End User (Homeowner/Client)"
                  control={
                    <Radio
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": {
                          color: "#fff",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-white">
                      An End User (Homeowner/Client)
                    </span>
                  }
                />
                <FormControlLabel
                  value="Inquiring for Dealership/Distribution"
                  control={
                    <Radio
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": {
                          color: "#fff",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-white">
                      Inquiring for Dealership/Distribution
                    </span>
                  }
                />
              </RadioGroup>
            </FormControl>
          </div>

          <p className="text-sm text-white/70">
            By proceeding, you are authorizing NatureX Premium Textures and its
            suggested contractors to get in touch with you through calls, sms,
            or e-mail.
          </p>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-[#fff] font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
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
