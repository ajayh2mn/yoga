import React, { useState } from "react";

const Program = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "10px",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    background: "#f9f9f9",
    flex: 1,
    maxWidth: "48%",
    minWidth: "250px",
    minHeight: "70px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  // Left card aligned style
  const leftCardStyle = {
    ...cardStyle,
    marginLeft: "0",
    marginRight: "auto",
  };

  // Right card aligned style
  const rightCardStyle = {
    ...cardStyle,
    marginRight: "0",
    marginLeft: "auto",
  };

  // Button style remains unchanged
  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    textAlign: "center",
    display: "inline-block",
    width: "70px",
    fontSize: "14px",
  };

  const sessions = [
    { id: 1, title: "அகம் பிரம்மாஸ்மி", time: "⏰ 4:00 AM TO 6:00 AM" },
    { id: 2, title: "ஆச்சாரியார் சொற்பொழிவு", time: "⏰ 6:01 AM TO 6:30 AM" },
    { id: 3, title: "YOGA NIDRA", time: "⏰ 10:30 AM to 12:00 NOON" },
    { id: 4, title: "சக்ரா தியானம்", time: "⏰ 4:30 PM to 5:10 PM" },
    { id: 5, title: "அந்திப்பொழுது தியானம்", time: "⏰ 6:00 PM to 6:40 PM" },
    { id: 6, title: "அமிர்தா அத்தேடம்", time: "⏰ 8:00 PM to 8:40 PM" },
    { id: 7, title: "ஆன்மீக கதையும் கருத்தும்", time: "⏰ 8:40 PM to 9:10 PM" },
    { id: 8, title: "ராகமும் தியானமும்", time: "⏰ 10:00 PM to 10:40 PM" },
  ];

  const zoomLink =
    "https://us06web.zoom.us/j/6317367552?pwd=Lmy8FHrX0JXuZCWsZRwUR4UGORTdpb.1";

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        📅 Program Schedule
      </h2>
      <div>
        {sessions.map((session, index) => {
          // Choose left or right card style based on index.
          const baseCardStyle =
            index % 2 === 0 ? leftCardStyle : rightCardStyle;

          // If this card is hovered, add hover effects.
          const hoverStyle =
            hoveredIndex === index
              ? {
                  transform: "scale(1.05)",
                  boxShadow: "0 0 10px rgba(0, 123, 255, 0.7)",
                }
              : {};

          // Merge the base card style with the hover style.
          const cardMergeStyle = { ...baseCardStyle, ...hoverStyle };

          return (
            <div key={session.id} style={rowStyle}>
              <div
                style={cardMergeStyle}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div>
                  <h4 style={{ margin: "0 0 10px 0" }}>{session.title}</h4>
                  <p style={{ margin: 0 }}>{session.time}</p>
                </div>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <a
                    href={zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={buttonStyle}
                  >
                    Join
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Program;