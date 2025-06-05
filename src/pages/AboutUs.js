import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="about-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          🧘 About Us
        </motion.h1>

        <motion.section
          className="about-section"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="about-heading">Our Journey</h2>
          <p className="about-text">
            At <strong>[Your Yoga Site Name]</strong>, we believe that yoga is more than just a practice — it's a way of life.
            Our journey began with a simple vision: to create a peaceful, welcoming space where individuals can connect with their body, mind, and soul.
          </p>
        </motion.section>

        <motion.section
          className="about-section"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="about-heading">What We Offer</h2>
          <ul className="about-list">
            <li>Yoga poses and sequences (asanas)</li>
            <li>Breathing techniques (pranayama)</li>
            <li>Guided meditations</li>
            <li>Mindfulness practices</li>
            <li>Nutrition tips for yogis</li>
            <li>Wellness and holistic health</li>
            <li>Yoga gear and accessory reviews</li>
          </ul>
        </motion.section>

        <motion.section
          className="about-section"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="about-heading">Our Mission</h2>
          <p className="about-text">
            Our mission is to make the benefits of yoga accessible and inspiring. Through our blog, we aim to spread awareness of the physical, emotional, and spiritual benefits that yoga brings into daily life.
          </p>
        </motion.section>

        <motion.section
          className="about-section"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <h2 className="about-heading">Meet the Team</h2>
          <p className="about-text">
            We’re a small team of passionate yoga practitioners, certified instructors, and wellness writers. Each member brings unique insights to ensure rich, diverse content.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <h2 className="about-heading">Join Our Community</h2>
          <p className="about-text">
            We're more than a website — we’re a growing community. Follow us for weekly updates, yoga challenges, and wellness inspiration.
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AboutUs;
