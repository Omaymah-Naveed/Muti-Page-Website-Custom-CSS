import React from 'react'

const About = () => {
  return (
    <div>
      <section className='about' style={{ backgroundImage: "url(about-banner.avif)" }}>
        <div className='about-content'>
          <h2 className='fade-in' id="about-heading">About Us</h2>
          <p>At Watch World, we are passionate about creating timepieces that blend precision, craftsmanship, and timeless style. Our watches are designed for those who value both functionality and elegance, combining innovative technology with classic aesthetics.</p>
        </div>
      </section>
    </div>
  )
}

export default About
