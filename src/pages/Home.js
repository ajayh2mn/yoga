import React from "react";
import "./Home.css";
import yogaImage from "../assets/yoga-1.jpg";
import journeyImage from "../assets/yoga-img.webp";
import cardImage1 from "../assets/card-img1.webp";
import cardImage2 from "../assets/card-img2.webp";
import cardImage3 from "../assets/card-img3.webp";
import cardImage4 from "../assets/card-img4.webp";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-image">
          <img src={yogaImage} alt="Yoga Practice" />
        </div>
        <div className="home-content">
          <h2>SATCHITANANDA SADHGURU SANJAIJI</h2>
          <p>
            <strong>Sanjai</strong> was born in the year 1973 in Trichy district, Tamil Nadu, India,
            to Venkatesan and Mohana.
          </p>
          <p>
            Sanjai became enlightened in the year 2008 after some serious experiments
            and experiences with meditation. Since then, Sanjaiji has been striving
            hard to awaken and enlighten each and every individual. This journey began
            in 2009 in schools, temples, and towns of Pondicherry and Trichy, and expanded
            online throughout the world in June 2020.
          </p>
          <p>
            All the Yogi Bava's gathered and conferred the title of <strong>SADHGURU SANJAIJI</strong>
            on <strong>24th December 2024</strong> and <strong>SATCHITANANDA SADHGURU SANJAIJI</strong>
            on <strong>1st January 2025</strong>, with the blessings of Sadhpurush
            Pitamaha Brahmarshi Subhash Patriji.
          </p>
          <p>
            <em>Meditation means observing your nature, inhaling... existing... of your breath...</em>
          </p>
        </div>
      </div>
      {/* <div className="home-section">
        <div className="section-title">
          <h2>Discover Our Journey</h2>
        </div>
        <div className="section-content">
          <p>
            At Isha Foundation, we believe in the power of holistic well-being. Founded by Sadhguru Jaggi Vasudev, our mission is to empower individuals through transformative programs in yoga, meditation, and personal growth.
          </p>
        </div>
      </div>
      <div className="home-additional-image">
        <img src={journeyImage} alt="Our Journey" />
      </div>
      <div className="home-resources">
        <h2>Explore Our Resources</h2>
        <p>Access articles, videos, and tools for growth</p>
      </div> */}
      <div className="home-cards-container">
        {[cardImage1, cardImage2, cardImage3, cardImage4].map((img, index) => (
          <div className="home-card" key={index}>
            <img src={img} alt={`Card ${index + 1}`} />
            <div className="home-card-content">
              <h3>{["Cultivating Mindfulness in Daily Life", "Inner Engineering: A Path to Self-Transformation", "The Importance of Yoga in Modern Life", "Finding Inner Peace Through Meditation"][index]}</h3>
              <p>{["Learn practical techniques to cultivate mindfulness and integrate it into your daily routine for enhanced well-being.", "Discover the transformative potential of Inner Engineering, a program designed to unlock your inner potential.", "Explore the multifaceted benefits of yoga, from physical health to mental well-being, and how it enriches daily life.", "Discover the transformative power of meditation and how it can lead to a more peaceful and fulfilling life."][index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
