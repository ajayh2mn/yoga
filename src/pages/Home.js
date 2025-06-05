import React from "react";
import yogaImage from "../assets/yoga-1.jpg";
// import journeyImage from "../assets/yoga-img.webp";
import cardImage1 from "../assets/card-img1.webp";
import cardImage2 from "../assets/card-img2.webp";
import cardImage3 from "../assets/card-img3.webp";
import cardImage4 from "../assets/card-img4.webp";

const Home = () => {
  const contentData = [
    {
      img: yogaImage,
      heading: "SATCHITANANDA SADHGURU SANJAIJI",
      content: (
        <>
          <p>
            <strong>Sanjai</strong> was born in the year 1973 in Trichy district, Tamil Nadu, India,
            to Venkatesan and Mohana.
          </p>
          <p>
            Sanjai became enlightened in the year 2008 after some serious experiments
            and experiences with meditation...
          </p>
          <p>
            All the Yogi Bava's gathered and conferred the title of <strong>SADHGURU SANJAIJI</strong>...
          </p>
          <p>
            <em>Meditation means observing your nature, inhaling... existing... of your breath...</em>
          </p>
        </>
      ),
    },
    // {
    //   img: journeyImage,
    //   heading: "Discover Our Journey",
    //   content: (
    //     <p>
    //       At Isha Foundation, we believe in the power of holistic well-being...
    //     </p>
    //   ),
    // },
  ];

  const cardImages = [cardImage1, cardImage2, cardImage3, cardImage4];
  const cardTitles = [
    "Cultivating Mindfulness in Daily Life",
    "Inner Engineering: A Path to Self-Transformation",
    "The Importance of Yoga in Modern Life",
    "Finding Inner Peace Through Meditation",
  ];
  const cardTexts = [
    "Learn practical techniques to cultivate mindfulness...",
    "Discover the transformative potential of Inner Engineering...",
    "Explore the multifaceted benefits of yoga...",
    "Discover the transformative power of meditation...",
  ];

  return (
    <div style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}>
      {contentData.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
            marginTop:"70px",
          }}
        >
          <img
            src={item.img}
            alt={`Image ${index + 1}`}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "12px",
              margin: "10px",
            }}
          />
          <div
            style={{
              flex: "1",
              maxWidth: "500px",
              padding: "10px",
              textAlign: "justify",
            }}
          >
            <h2>{item.heading}</h2>
            {item.content}
          </div>
        </div>
      ))}

      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <h2>Explore Our Resources</h2>
        <p>Access articles, videos, and tools for growth</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {cardImages.map((img, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={img}
              alt={`Card ${index + 1}`}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "16px" }}>
              <h3>{cardTitles[index]}</h3>
              <p>{cardTexts[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
