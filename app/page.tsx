import Header  from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <section id="Features" style={{ padding: '4rem 1rem', backgroundColor: '#a3a3' }}>
          <h2 style={{ textAlign: 'center', fontSize: '4vh', marginBottom: '2rem' }}>Why You Have to Choose Navipath?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            <div style={{ width: '16vw', textAlign: 'center', height:'50vh', border:'1px solid white', borderRadius:'10px' }}>
              <img src="../icons/real-time.png" alt="Real-time Navigation" style={{ width: '10vh', height: '10vh', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '3vh', marginBottom: '1rem' }}>Real-time Navigation</h3>
              <p>Get accurate, up-to-date directions to your destination.</p>
            </div>
            <div style={{ width: '16vw', textAlign: 'center',height:'50vh', border:'1px solid white', borderRadius:'10px' }}>
              <img src="../icons/offline-maps.png" alt="Offline Maps" style={{ width: '10vh', height: '10vh', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '3vh', marginBottom: '1rem' }}>Offline Maps</h3>
              <p>Access maps and navigation even without an internet connection.</p>
            </div>
            <div style={{ width: '16vw', textAlign: 'center', height:'50vh' , border:'1px solid white', borderRadius:'10px'}}>
              <img src="../icons/voice-guidance.png" alt="Voice Guidance" style={{ width: '10vh', height: '10vh', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '3vh', marginBottom: '1rem' }}>Voice Guidance</h3>
              <p>Receive turn-by-turn voice instructions for hands-free navigation.</p>
            </div>
            <div style={{ width: '16vw', textAlign: 'center', height:'50vh' , border:'1px solid white', borderRadius:'10px'}}>
              <img src="../icons/voice-guidance.png" alt="Voice Guidance" style={{ width: '10vh', height: '10vh', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '3vh', marginBottom: '1rem' }}>Voice Guidance</h3>
              <p>Receive turn-by-turn voice instructions for hands-free navigation.</p>
            </div>
            <div style={{ width: '16vw', textAlign: 'center', height:'50vh' , border:'1px solid white', borderRadius:'10px'}}>
              <img src="../icons/voice-guidance.png" alt="Voice Guidance" style={{ width: '10vh', height: '10vh', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '3vh', marginBottom: '1rem' }}>Voice Guidance</h3>
              <p>Receive turn-by-turn voice instructions for hands-free navigation.</p>
            </div>
          </div>
        </section>
        <section id="Testimonial">
          <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '4vh', marginBottom: '2rem' }}>What Our Users Say</h2>
            <blockquote style={{ fontStyle: 'italic', fontSize: '2.5vh', maxWidth: '600px', margin: '0 auto' }}>
              "Navipath has transformed the way I travel. The real-time updates and offline maps are lifesavers!"
            </blockquote>
            <p style={{ marginTop: '1rem', fontSize: '2vh' }}>- Alex P.</p>
          </div>
        </section>
        <section id="Contact">
          <div style={{ padding: '4rem 1rem', textAlign: 'center', backgroundColor: '#a3a3a3' }}>
            <h2 style={{ fontSize: '4vh', marginBottom: '2rem' }}>Get in Touch</h2>
            <p style={{ fontSize: '2vh', marginBottom: '2rem' }}>Have questions? We'd love to hear from you!</p>
            <a href="Contact.tsx">
              <button style={{ padding: '1rem 2rem', fontSize: '2vh', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Contact Us
              </button>
              {/* Map component has to be added here.*/}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
