import React from "react";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "pink", height: "92vh", padding: "20px" }}>
      <div
        className="d-flex border flex-column align-items-center"
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "7px",
        }}
      >
        <img
          style={{ borderRadius: "6px", marginBottom: "20px" }}
          src="https://www.thedestinycalls.com/images/image-11.jpg"
          alt="contact us"
        />
        <h2>Email : jasvanth143@gmail.com</h2>
        <h2>Phone no : 6305XXXX71</h2>
      </div>
    </div>
  );
};

export default Contact;
