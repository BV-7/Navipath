"use client"
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const team = [
    {
      name: "Vignesh",
      role: "Backend & AI Engineer",
      strength: "Can debug blindfolded",
      weakness: "Starts feature branches faster than he finishes coffee",
      img: "/team/vignesh.jpg",
    },
    {
      name: "Aditi",
      role: "UI/UX Designer",
      strength: "Turns wireframes into art",
      weakness: "Will redesign at 2am 'just to tweak the font'",
      img: "/team/aditi.jpg",
    },
    {
      name: "Rahul",
      role: "Frontend Dev",
      strength: "CSS whisperer",
      weakness: "Console.logs in production",
      img: "/team/rahul.jpg",
    },
  ];

  return (
    <div style={{ overflowX: "hidden", color: "#fff", fontFamily: "sans-serif" }}>
      {/* HERO SECTION */}
      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/team/team-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}
        >
          <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>Who We Are</h1>
          <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
            A curious crew of innovators navigating uncharted waters of AI and maritime intelligence.
          </p>
        </motion.div>
      </section>

      {/* TRANSITION SECTION */}
      <section
        style={{
          height: "60vh",
          backgroundColor: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ maxWidth: "700px" }}
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: "600" }}>Meet the Crew</h2>
          <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#bbb" }}>
            Behind every algorithm and compass lies a team that argues over coffee but codes like captains.
          </p>
        </motion.div>
      </section>

      {/* TEAM SECTIONS */}
      {team.map((member, i) => (
        <section
          key={i}
          style={{
            display: "flex",
            flexDirection: i % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            backgroundColor: i % 2 === 0 ? "#111" : "#1a1a1a",
            padding: "4rem 2rem",
            gap: "3rem",
          }}
        >
          <motion.img
            src={member.img}
            alt={member.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #0070f3",
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            style={{ maxWidth: "500px" }}
          >
            <h3 style={{ fontSize: "2rem", fontWeight: "bold" }}>{member.name}</h3>
            <p style={{ color: "#999", fontSize: "1.2rem", marginBottom: "1rem" }}>
              {member.role}
            </p>
            <p style={{ fontSize: "1rem" }}>
              <strong>Strength:</strong> {member.strength}
              <br />
              <strong>Weakness:</strong> {member.weakness}
            </p>
          </motion.div>
        </section>
      ))}

      {/* ENDING SECTION */}
      <section
        style={{
          height: "60vh",
          background: "linear-gradient(to bottom, #0a0a0a, #000)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ maxWidth: "700px" }}
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: "600" }}>The Journey Continues</h2>
          <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#ccc" }}>
            NaviPath started as an idea. It’s becoming a movement — toward smarter, safer, and sustainable seas.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            style={{
              marginTop: "2rem",
              padding: "0.8rem 2rem",
              background: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Contact Us
          </button>
        </motion.div>
      </section>
    </div>
  );
}
