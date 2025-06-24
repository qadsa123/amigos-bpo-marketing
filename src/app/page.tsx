'use client';

import { useState, useEffect } from 'react';


const inputFieldStyle = {
  padding: '12px',
  borderRadius: '5px',
  border: 'none',
  outline: 'none',
  fontSize: '1rem',
  transition: 'box-shadow 0.3s ease',
  boxShadow: '0 0 0 1px #ccc',
} as React.CSSProperties;

const navLink = {
  color: '#264653',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '1rem',
  cursor: 'pointer',
};


export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile(); // check initially
  window.addEventListener('resize', checkMobile); // listen to window resize
  return () => window.removeEventListener('resize', checkMobile); // clean up
}, []);
  return (
    <>
      {/* Responsive Header */}
      <header
        style={{
          backgroundColor: '#ffffff',
          padding: '16px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#264653' }}>
          Amigos BPO
        </div>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          <a href="#services" style={navLink}>Services</a>
          <a href="#about" style={navLink}>About</a>
          <a href="#contact" style={navLink}>Contact</a>
        </nav>

        {/* Hamburger for mobile */}
        {isMobile && (
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
          className="hamburger"
        >
          <span style={{ width: '25px', height: '3px', background: '#264653' }}></span>
          <span style={{ width: '25px', height: '3px', background: '#264653' }}></span>
          <span style={{ width: '25px', height: '3px', background: '#264653' }}></span>
        </div>
        )}
       
      </header>

      {/* Mobile Menu */}
        {menuOpen && (
          
  <div
    style={{
      position: 'fixed',     
      top: '64px',           
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      padding: '12px 0',
      borderBottom: '1px solid #ccc',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 999,
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
    }}
    className="mobile-menu"
  >
    <a href="#services" style={navLink}>Services</a>
    <a href="#about" style={navLink}>About</a>
    <a href="#contact" style={navLink}>Contact</a>
  </div>
)}


      {/* Main site sections */}
      
    <main style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section
  style={{
    position: 'relative',
    height: '75vh', // ⬅️ adjusted from 100vh
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    overflow: 'hidden',
  }}
>
  {/* Background Image */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url("/hero.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 0,
    }}
  />

  {/* Dark Overlay */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.4)',
      zIndex: 1,
    }}
  />

  {/* Text Content */}
  <div style={{ position: 'relative', zIndex: 2, padding: '0 20px' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
      Outsourcing That Works for You
    </h1>
    <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
      High-performance marketing, support, and operations — done for you.
    </p>
    <button
      style={{
        marginTop: '30px',
        backgroundColor: '#F4A261',
        border: 'none',
        padding: '12px 24px',
        fontSize: '1rem',
        borderRadius: '6px',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      Get Started
    </button>
  </div>
</section>


      


{/* About Us */}
<section id="about"
  style={{
    backgroundColor: '#F9F9F9',
    padding: '80px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
  }}
>
  {/* Left: Text */}
  <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
    <h2 style={{ color: '#264653', fontSize: '2.4rem', marginBottom: '20px' }}>
      About Amigos BPO
    </h2>
    <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8' }}>
      Amigos BPO is a global outsourcing partner helping businesses grow through top-tier services
      in customer care, back-office processing, and lead management. We focus on delivering results
      with clarity, consistency, and care.
    </p>
    <p style={{ marginTop: '20px', fontSize: '1rem', color: '#555' }}>
      Our team values innovation, transparency, and long-term partnerships, making us the go-to choice
      for businesses that demand more.
    </p>
  </div>

  {/* Right: Coded General Business SVG */}
  <div style={{ flex: '1 1 300px', maxWidth: '500px', textAlign: 'center' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 300"
      style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
    >
      {/* Table */}
      <ellipse cx="250" cy="200" rx="150" ry="25" fill="#F4A261" opacity="0.4" />

      {/* Person 1 */}
      <circle cx="180" cy="140" r="20" fill="#2A9D8F" />
      <rect x="165" y="160" width="30" height="40" rx="5" fill="#264653" />

      {/* Person 2 */}
      <circle cx="250" cy="100" r="20" fill="#2A9D8F" />
      <rect x="235" y="120" width="30" height="40" rx="5" fill="#264653" />

      {/* Person 3 */}
      <circle cx="320" cy="140" r="20" fill="#2A9D8F" />
      <rect x="305" y="160" width="30" height="40" rx="5" fill="#264653" />

      {/* Laptop */}
      <rect x="235" y="180" width="30" height="15" fill="#ccc" rx="2" />
      <line x1="235" y1="180" x2="265" y2="180" stroke="#aaa" strokeWidth="1" />

      {/* Devices */}
      <rect x="160" y="185" width="20" height="12" fill="#ddd" rx="2" />
      <rect x="320" y="185" width="20" height="12" fill="#ddd" rx="2" />
    </svg>
  </div>
</section>

     
{/* Services */}
<section id="services"
  style={{
    backgroundColor: '#ffffff',
    padding: '80px 20px',
    textAlign: 'center',
  }}
>
  <h2
    style={{
      fontSize: '2.5rem',
      color: '#264653',
      marginBottom: '40px',
    }}
  >
    Our Marketing Services
  </h2>

  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
    }}
  >
    {[
      { title: 'Lead Generation', desc: 'Targeted outreach to convert prospects into leads.' },
      { title: 'Email Marketing', desc: 'Strategic campaigns that nurture and retain customers.' },
      { title: 'CRM Integration', desc: 'Streamline and automate customer interactions.' },
      { title: 'Paid Ad Campaigns', desc: 'Optimize ROI through data-driven ads.' },
      { title: 'Social Media Strategy', desc: 'Engage and grow across digital platforms.' },
      { title: 'Analytics & Reporting', desc: 'Track KPIs to improve marketing outcomes.' },
    ].map((service, i) => (
      <div
        key={i}
        style={{
          flex: '1 1 280px',
          backgroundColor: '#F4F4F4',
          borderLeft: '5px solid #F4A261',
          borderRadius: '10px',
          padding: '25px',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }}
      >
        <h3 style={{ color: '#2A9D8F', fontSize: '1.5rem', marginBottom: '10px' }}>
          {service.title}
        </h3>
        <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6' }}>{service.desc}</p>
      </div>
    ))}
  </div>
</section>

      
      {/* Contact Us */}
<section id="contact"
  style={{
    backgroundColor: '#264653',
    padding: '80px 20px',
    color: 'white',
    textAlign: 'center',
  }}
>
  <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Contact Us</h2>
  <p style={{ fontSize: '1rem', marginBottom: '40px', maxWidth: '600px', marginInline: 'auto' }}>
    We&#39;d love to hear from you! Reach out with questions, collaborations, or service inquiries.
  </p>

  <form
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '500px',
      margin: '0 auto',
    }}
  >
    <input
      type="text"
      placeholder="Name"
      required
      style={inputFieldStyle}
    />
    <input
      type="email"
      placeholder="Email"
      required
      style={inputFieldStyle}
    />
    <textarea
      placeholder="Your Message"
      rows={5}
      required
      style={{ ...inputFieldStyle, resize: 'vertical' }}
    ></textarea>

    <button
      type="submit"
      style={{
        backgroundColor: '#F4A261',
        color: 'white',
        padding: '12px',
        border: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseOver={e => (e.currentTarget.style.backgroundColor = '#e68c3a')}
      onMouseOut={e => (e.currentTarget.style.backgroundColor = '#F4A261')}
    >
      Send Message
    </button>
  </form>
</section>

    </main></>
  );
}


