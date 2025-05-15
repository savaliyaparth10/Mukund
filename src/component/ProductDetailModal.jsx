import React, { useState, useEffect } from "react";

const ProductDetailModal = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pincode: "",
    role: "", // Add role field
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [pincodeData, setPincodeData] = useState(null);

  useEffect(() => {
    if (formData.pincode && formData.pincode.length === 6) {
      fetchPincodeData(formData.pincode);
    }
  }, [formData.pincode]);

  const fetchPincodeData = async (pincode) => {
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data[0].Status === "Success") {
          setPincodeData(data[0].PostOffice[0]);
        } else {
          setPincodeData(null);
        }
      } else {
        setPincodeData(null);
      }
    } catch (error) {
      setPincodeData(null);
    }
  };

  if (!product) return null;

  const validatePhone = (phone) => {
    const phoneRegex = /^(?:(?:\+91)|(?:91)|(?:0))?[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ""));
  };

  const validatePincode = (pincode) => {
    const pincodeRegex = /^\d{6}$/;
    return pincodeRegex.test(pincode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({
      ...prev,
      role: role,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid Indian mobile number";
    }

    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!validatePincode(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      setSubmitStatus("Please correct the errors below");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const message = `Inquiry For ${product.title} from pincode ${
      formData.pincode
    }. Location: ${pincodeData ? pincodeData.Name : "Unknown"} , District: ${
      pincodeData ? pincodeData.District : "Unknown"
    } , State: ${pincodeData ? pincodeData.State : "Unknown"} , Country: ${
      pincodeData ? pincodeData.Country : "Unknown"
    } . Role: ${formData.role}`;

    try {
      const response = await fetch(
        `https://naturalx.in/admin/api/save_contact?name=${encodeURIComponent(
          formData.name
        )}&phone=${encodeURIComponent(
          formData.phone
        )}&email=${encodeURIComponent(
          formData.email || "-"
        )}&msg=${encodeURIComponent(message)}`
      );

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-3">{product.title}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                Category: {product.category.join(", ")}
              </p>
              {/* Contact Form */}
              <div className="space-y-4 mt-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name *"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Mobile Number *"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="Pincode *"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.pincode ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {errors.pincode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.pincode}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    To serve you better, please let us know if you are:
                  </label>
                  <div className="space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="role"
                        value="Architect/Interior Designer"
                        checked={
                          formData.role === "Architect/Interior Designer"
                        }
                        onChange={() =>
                          handleRoleChange("Architect/Interior Designer")
                        }
                        className="form-radio text-orange-500"
                      />
                      <span className="ml-2 text-gray-700">
                        Architect/Interior Designer
                      </span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="role"
                        value="End User (Homeowner/Client)"
                        checked={
                          formData.role === "End User (Homeowner/Client)"
                        }
                        onChange={() =>
                          handleRoleChange("End User (Homeowner/Client)")
                        }
                        className="form-radio text-orange-500"
                      />
                      <span className="ml-2 text-gray-700">
                        End User (Homeowner/Client)
                      </span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="role"
                        value="Dealership/Distribution"
                        checked={formData.role === "Dealership/Distribution"}
                        onChange={() =>
                          handleRoleChange("Dealership/Distribution")
                        }
                        className="form-radio text-orange-500"
                      />
                      <span className="ml-2 text-gray-700">
                        Inquiring for Dealership/Distribution
                      </span>
                    </label>
                  </div>
                  {errors.role && (
                    <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                  )}
                </div>
              </div>
              {submitStatus && (
                <p
                  className={`mt-2 text-sm ${
                    submitStatus === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {submitStatus === "success"
                    ? "Inquiry submitted successfully!"
                    : submitStatus}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
