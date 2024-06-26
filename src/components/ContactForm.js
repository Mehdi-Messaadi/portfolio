import React, { useState } from "react";

import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]*$/; // Only letters and spaces allowed
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate inputs as the user types
    if (name === "name") {
      if (!validateName(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: t("name-validation"),
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "",
        }));
      }
    }

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: t("email-validation"),
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before sending the form
    if (!validateName(formData.name)) {
      alert(t("name-alert"));
      return;
    }

    if (!validateEmail(formData.email)) {
      alert(t("email-alert"));
      return;
    }

    // Send formData to backend service
    const response = await fetch("http://localhost:5000/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="ContactForm-Container">
      <form className="ContactForm" onSubmit={handleSubmit}>
        <div className="ContactForm-NameAndEmail-Input-Container">
          <div className="ContactForm-Input-Container">
            <input
              className="ContactForm-Input"
              placeholder={t("name") + " :"}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="ContactForm-Input-Container">
            <input
              className="ContactForm-Input"
              placeholder="Email :"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
        <div className="ContactForm-Input-Container">
          <textarea
            className="ContactForm-Input Textarea"
            placeholder="Message :"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="Button-Style-One" type="submit">
          {t("send-message")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
