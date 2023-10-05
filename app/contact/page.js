"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { screenSize } from "../utils/screenSize";
import Link from "next/link";

export default function Page() {
  const [name, setName] = useState(null)
  const [message, setMessage] = useState(null)
  const [phone, setPhone] = useState(null)
  const [email, setEmail] = useState(null)
  const [prossing, setProssing] = useState(false)
  const [status, setStatus] = useState(null)

  async function sendMessage(event) {
    event.preventDefault();
    setProssing(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message, phone, email }),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        setStatus('Email sent successfully');
      } else {
        // Handle non-success status, e.g., show an error message
        setStatus('Failed to send email');
      }
    } catch (error) {
      // Handle any network or fetch-related errors
      setStatus('Failed to send email');
      console.error('Error sending email:', error);
    } finally {
      setProssing(false);
      setEmail('');
      setMessage('');
      setPhone('');
      setName('');
    }
  }
  return <div style={{ backgroundColor: '#d0855d' }} className="h-full min-h-screen md:min-h-screen w-screen text-white relative">

    <Link href={'/'}>
      <div className="absolute top-6 right-6 flex flex-col items-center justify-center" >
        <p className="text-lg font-bold text-white">{`<---`}</p>
        <p className="text-xs font-bold text-white">Go Back</p>
      </div>
    </Link>
    <div className="pt-10 pb-5">
      <h1 className="text-2xl font-bold text-center">Contact Me</h1>
      <h1 className="font-bold text-center text-sm text-gray-100 py-5">Any question or remarks? Just write me a message!</h1>
    </div>

    {!screenSize().isDesktopOrLaptop ? <div className="flex items-center justify-center flex-col">
      <div className="flex flex-row items-center justify-between m-5">
        <div className="flex flex-col items-center justify-center p-2" onClick={() => window.open('tel:+917557877440')}>
          <Image src={require('../Icons/phone.png')} height={25} width={25} />
          <p className="p-2 text-xs font-bold " >+91 75578 77440</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2" onClick={() => window.open('mailto:intiaj.dev@gmail.com?subject=&body=')}>
          <Image src={require('../Icons/mail.png')} height={25} width={25} />
          <p className="p-2 text-xs font-bold">intiaj.dev@gmail.com</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <Image src={require('../Icons/location.png')} height={25} width={25} />
          <p className="p-2 text-xs font-bold">Kolkata</p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col p-4" onClick={() => window.open('https://wa.me/7557877440', '_blank')}>
        <Image src={require('../Icons/whatsapp-button.webp')} height={65} width={130} />
        <p className="p-2 text-xs font-bold">Drop me a message on whatsapp</p>
      </div>
    </div> : null}

    {!status ? <div className="flex items-center justify-center">
      <div className="hidden md:flex md:items-center md:justify-center md:w-1/3 text-black font-bold rounded-xl shadow-sm shadow-fuchsia-400 relative backdrop-blur-xl" style={{ height: 720 }}> {/*'linear-gradient(90deg, rgb(255, 161, 245), rgb(188, 122, 249), rgb(248, 255, 149), rgb(166, 255, 150))'*/}
        <img src="https://img.freepik.com/free-vector/hand-drawn-muted-colors-illustration_23-2150008082.jpg?w=740&t=st=1695723037~exp=1695723637~hmac=cb5f307031c327525e221b05fc4194c30aafc98492ee87026637227185e03328" className="w-auto -z-0 absolute rounded-xl object-cover " style={{ height: 720 }} />
        <div className="z-10 backdrop-blur-sm w-full flex items-center justify-center flex-col">
          <h1 className="text-lg py-5">Get in touch</h1>
          <div className="py-5 flex items-center justify-center flex-col">
            <h2 className="text-base">Chat with me</h2>
            <h3 className="text-sm font-normal">I am always here to help</h3>
            <h3 className="text-sm font-bold hover:cursor-pointer hover:text-rose-500" onClick={() => window.open('mailto:intiaj.dev@gmail.com?subject=&body=')}>intiaj.dev@gmail.com</h3>
            <h3 className="text-sm font-normal text-center">or</h3>
            <div className="hover:cursor-pointer hover:brightness-125" onClick={() => window.open('https://wa.me/7557877440', '_blank')}>
              <Image src={require('../Icons/whatsapp-button.webp')} height={65} width={130} />

            </div>
          </div>

          <div className="py-5 flex items-center justify-center flex-col">
            <h2 className="text-base">Call me</h2>
            <h3 className="text-sm font-normal">Mon-Fri from 10A.M - 5P.M</h3>
            <h3 className="text-sm font-bold hover:cursor-pointer hover:text-rose-500" onClick={() => window.open('tel:+917557877440')}>+91 75578 77440</h3>
          </div>

          <div className="py-5 flex items-center justify-center flex-col">
            <h2 className="text-base">Social media</h2>
            <div onClick={() => window.open('https://instagram.com/just_intiaj?igshid=OGQ5ZDc2ODk2ZA==')} className="bg-white w-6 rounded-full hover:cursor-pointer hover:brightness-110">
              <Image src={require('../Icons/instagram.png')} height={25} width={25} />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 p-5 border bg-white text-black border-black rounded-xl md:w-1/3" style={{ height: 720 }}>
        <h1 className="text-xs font-bold">Contact Form</h1>
        <div>
          <form className="my-5 w-full" id="contact" onSubmit={sendMessage}>
            <label htmlFor="fullName" className="font-bold">Your Name:</label><br />
            <input disabled={prossing} onChange={(e) => setName(e.target.value)} id='fullName' required name="fullName" type="text" className="border border-gray-500 rounded-lg my-2 h-10 w-full p-1" /><br />
            <label htmlFor="emailAdd" className="font-bold">Your Email:</label><br />
            <input disabled={prossing} onChange={(e) => setEmail(e.target.value)} id='emailAdd' required name="emailAdd" type="email" className="border border-gray-500 rounded-lg my-2 h-10 w-full p-1" /><br />
            <label htmlFor="phoneNo" className="font-bold">Phone:</label><br />
            <input disabled={prossing} onChange={(e) => setPhone(e.target.value)} id='phoneNo' required name="phoneNo" type="tel" className="border border-gray-500 rounded-lg my-2 h-10 w-full p-1" /><br />
            <label htmlFor="message" className="font-bold">Your Message:</label><br />
            <textarea disabled={prossing} onChange={(e) => setMessage(e.target.value)} form="cantact" id='message' required rows={10} name="message" className="border border-gray-500 rounded-lg my-2 w-full p-1" /><br />

            <div className="flex items-center justify-center flex-col">
              {!prossing ? <input disabled={prossing} type="submit" className="bg-fuchsia-500 cursor-pointer hover:bg-rose-400 hover:shadow-rose-300 rounded-xl p-2 text-white font-bold shadow-md shadow-fuchsia-700" />
                : <p className="font-bold hover:cursor-wait text-white text-center bg-fuchsia-500 rounded-xl p-2 shadow-md shadow-fuchsia-700">Sending...</p>}

            </div>
          </form>

        </div>
      </div>
    </div> : <div className="flex items-center justify-center flex-col flex-1 mt-24 bg-white p-2">
      {status === 'Email sent successfully' ?
        <Image src={require('../Icons/success.png')} height={75} width={75} /> :
        <Image src={require('../Icons/failed-message.png')} height={75} width={75} className="bg-white rounded-full p-1" />

      }
      <p className={`font-bold ${status === 'Email sent successfully' ? 'text-green-500' : 'text-red-500'} text-center p-2`}>{status}</p>
    </div>}
  </div>;
}
