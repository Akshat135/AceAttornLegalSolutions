// src/components/WhatsAppButton.jsx
import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
href="https://api.whatsapp.com/send/?phone=917379902583&text=Hello%2C%20I%E2%80%99m%20interested%20in%20your%20legal%20services.%20Please%20get%20in%20touch.%20Thank%20you.&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
