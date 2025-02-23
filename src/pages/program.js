import React from "react";

const Program = () => {
  const sessions = [
    {
      id: 1,
      title: "Morning Session",
      time: "10:00 AM - 11:30 AM",
      link: "https://zoom.us/j/1234567890"
    },
    {
      id: 2,
      title: "Afternoon Session",
      time: "2:00 PM - 3:30 PM",
      link: "https://zoom.us/j/0987654321"
    },
    {
      id: 3,
      title: "Evening Session",
      time: "6:00 PM - 7:30 PM",
      link: "https://zoom.us/j/1122334455"
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Program Schedule</h2>
      <div className="row">
        {sessions.map((session) => (
          <div key={session.id} className="col-md-4">
            <div className="card mb-3 p-3 shadow-sm">
              <h5 className="card-title">{session.title}</h5>
              <p className="card-text">{session.time}</p>
              <a href={session.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Join Zoom Session
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
