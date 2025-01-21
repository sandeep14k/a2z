import React from "react";

const AboutCompany = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
        marginTop: 150,
        flexWrap: "wrap", // Allows wrapping when space is limited
      }}
    >
      {/* Left Section */}
      <div style={{ flex: 1, minWidth: "300px", paddingRight: "20px", marginLeft: "10%" }}>
        <p
          className="about-text"
          style={{
            background: "linear-gradient(to left, rgb(247, 0, 104) 0%, rgb(68, 16, 102) 25%, rgb(247, 0, 104) 75%, rgb(68, 16, 102) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "16px",
            fontWeight: 500,
            wordWrap: "break-word", // Ensures long words break
            whiteSpace: "normal", // Allows text wrapping
          }}
        >
          ABOUT COMPANY
        </p>
        <h2
          style={{
            color: "black",
            fontSize: "40px",
            fontWeight: 700,
            margin: "10px 0",
            wordWrap: "break-word", // Ensures long text wraps
            whiteSpace: "normal", // Allows text wrapping
          }}
        >
          Welcome to the A2Z Marketing
        </h2>
        <div
          style={{
            marginBottom: "20px",
            color: "rgb(136, 136, 136)",
            fontSize: "16px",
            fontWeight: 400,
            wordWrap: "break-word", // Ensures long text wraps
            whiteSpace: "normal", // Allows text wrapping
          }}
        >
          A2Z Marketing is an Exclusive Event Management Service Provider Organizing Corporate Events, Marketing
          Programs, Special Corporate Hospitality Events, Commercial Events & Private Events
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {[
            "Event Management Service Provider.",
            "Organizing Corporate Events.",
            "Marketing Programs.",
            "Special Corporate Hospitality Events.",
            "Branding and Wall Painting.",
          ].map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                wordWrap: "break-word", // Ensures long text wraps
                whiteSpace: "normal", // Allows text wrapping
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "rgb(225, 19, 123)",
                  borderRadius: "50%",
                  color: "white",
                  marginRight: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Read More Button */}
        <button className="read-more-btn">
          <span>Read More</span>
        </button>
      </div>

      {/* Right Section */}
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {/* Rotating Foreground Image */}
        <div
          style={{
            width: "550px",
            height: "550px",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "1px 8px 20px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            animation: "rotateImage 4s linear infinite", // Apply animation to the image
          }}
        >
          <img
            src="about.jpg"
            alt="Company"
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Keyframes for Button and Image */}
      <style>
        {`
          @keyframes rotateImage {
            0% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(40deg);
            }
            50% {
              transform: rotate(0deg);
            }
            75% {
              transform: rotate(-40deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          .read-more-btn {
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            padding: 15px 30px;
            color: white;
            background-color: #1c94d2;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            z-index: 0;
            transition: color 0.3s ease-in-out;
            margin-top:50px;
          }

          .read-more-btn span {
            position: relative;
            z-index: 1;
          }

          .read-more-btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 0;
            transition: left 0.3s ease-in-out;
          }

          .read-more-btn:hover::before {
            left: 0;
          }

          .read-more-btn:hover {
            color: #1c94d2;
          }

          @media (max-width: 768px) {
            section {
              flexDirection: column;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutCompany;
