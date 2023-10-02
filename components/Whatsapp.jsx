import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ number }) => {
    const phoneNumber = "+27 79 347 3180"; // Replace this with the new phone number


return (
    <a href={`https://wa.me/${phoneNumber}`}>
    <button

      style={{ position: "fixed", right: "20px", bottom: "20px" }}
    >
      <FaWhatsapp size={90} style={{ backgroundColor: "lightgreen",borderRadius:40 }} />
    </button>
  </a>
);
};

export default WhatsAppButton;