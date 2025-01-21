import React from "react";

const Features = () => {
  const features = [
    {
      icon: "💎",
      title: "Networking",
      description: "Worked with clients like ITC, Mahindra, Samsung, Airtel, Vodafone, HDFC, ICICI, Roca, HP.",
    },
    {
      icon: "🗣️",
      title: "Great Speakers",
      description: "Brand Solution has worked with front-line companies like Castrol, Adani, ACC, Binani, HUL.",
    },
    {
      icon: "🔍",
      title: "Experience",
      description: "Brand Solution has around 20 years of experience in Sales & Marketing.",
    },
    {
      icon: "🎉",
      title: "Party",
      description: "We organize Corporate Party Events like Dance Shows, Magic Shows, Fashion Shows, Etc.",
    },
    {
      icon: "👥",
      title: "New People",
      description: "Our Primary Vision is to enable our Clients to succeed in their specific objectives.",
    },
  ];

  return (
    <section
      style={{
        padding: "50px",
        fontFamily: "Poppins, sans-serif",
        backgroundColor: " #f9f9f9",
      }}
    >
      {/* Top Section */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <p
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            backgroundImage: "linear-gradient(to left, rgb(247, 0, 104) 0%, rgb(68, 16, 102) 25%, rgb(247, 0, 104) 75%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "16px",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          Features
        </p>
        <h2
          style={{
            color: "rgb(30, 31, 54)",
            fontSize: "42px",
            fontWeight: 700,
            fontFamily: "Ubuntu, sans-serif",
            marginTop: "10px",
          }}
        >
          Our Feature
        </h2>
      </div>

      {/* Cards Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              textAlign: "left",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div
              style={{
                fontSize: "40px",
                color: "rgb(247, 0, 104)",
                marginBottom: "15px",
              }}
            >
              {feature.icon}
            </div>
            <h3
              style={{
                color: "rgb(30, 31, 54)",
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "10px",
                fontFamily: "Ubuntu, sans-serif",
              }}
            >
              {feature.title}
            </h3>
            <p style={{ color: "rgb(120, 120, 120)", fontSize: "14px", lineHeight: "1.8" }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
