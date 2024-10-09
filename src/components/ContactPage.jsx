import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// require('dotenv').config();


const ContactPage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('Email Sent!');
          alert("Email Sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="p-10 bg-slate-800 min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-white text-center font-playFair">Contact Me</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mx-12 my-24'>
            <div className='flex flex-col gap-4 lg:gap-8 text-white'>
              <div className='flex flex-row gap-4 lg:gap-8 font-lato'>
                <FaLocationDot></FaLocationDot>
                <p> Ghaziabad, UttarPradesh, India </p>
              </div>
              <div className='flex flex-row gap-4 lg:gap-8 font-lato'>
                <FaPhone></FaPhone>
                <p> +91 6307434701 </p>
              </div>
              <div className='flex flex-row gap-4 lg:gap-8 font-lato'>
                <MdEmail></MdEmail>
                <p> janhvivatsya24@gmail.com </p>
              </div>
            </div>
            <div className='flex flex-col gap-4 lg:gap-8'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 lg:gap-8 text-white'>
              <div className='flex flex-col gap-2'>
              <label>Name</label>
              <input type="text" name="user_name" className='rounded text-black'/>
              </div>
              <div className='flex flex-col gap-2'>
              <label>Email</label>
              <input type="email" name="user_email" className='rounded text-black'/>
              </div>
              <div className='flex flex-col gap-2'>
              <label>Message</label>
              <textarea name="message" className='rounded text-black'/>
              <input 
              type="submit" 
              value="Send" 
              className="text-white font-bold py-2 px-4 rounded bg-slate-500 hover:bg-slate-700 transition duration-300 font-lato cursor-pointer"
            />
              </div>
            </form>
            </div>
        </div>
    </section>
  )
}

export default ContactPage