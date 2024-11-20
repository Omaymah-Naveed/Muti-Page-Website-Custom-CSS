import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='contact-form'>
        <h2 className='fade-in'>Contact Us</h2>
        <form>
          <input type="text" placeholder='Enter Your Name Here' required />
          <input type="email" placeholder='Enter Your Email Address' required/>
          <input type="text" placeholder='Enter Your Phone Number' required/>
          <textarea placeholder='Enter Your Message Here' rows={5} required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
