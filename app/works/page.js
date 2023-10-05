"use client"

import Navbar from "@/components/Home/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import { screenSize } from "../utils/screenSize";

export default function Works(params) {
  const sParam = params?.searchParams?.project ? params.searchParams.project : 'cooker'
  const [selectedProject, setSelectedProject] = useState(sParam)
  const laptopScreen = screenSize().isDesktopOrLaptop
  return (
    <div className="bg-white text-black p-4">
      <Navbar />
      <div className="w-full mt-16">

        {selectedProject === 'cooker' ?
          <div className={`p-4 ${selectedProject === 'cooker' ? "bg-yellow-300" : selectedProject === 'cpp' ? 'bg-teal-400' : 'bg-rose-400'} rounded-lg`}>
            <h2 className={`text-lg font-bold ${selectedProject === 'cooker' ? 'text-yellow-800' : selectedProject === 'cpp' ? 'text-indigo-800' : 'text-rose-800'} pb-5`}>Projects:</h2>
            <div className="flex flex-row text-white font-bold overflow-x-scroll md:no-scrollbar">
              <h2 onClick={() => setSelectedProject('cooker')} className={`p-2 hover:cursor-pointer border border-yellow-900 rounded-lg ${selectedProject === 'cooker' ? 'bg-yellow-600 ' : 'bg-gray-100'} mr-2`}>Cooker</h2>
              <h2 onClick={() => setSelectedProject('cpp')} className={`p-2 hover:cursor-pointer border border-cyan-900 rounded-lg ${selectedProject === 'cpp' ? 'bg-cyan-600' : 'bg-gray-400'} mr-2`}>Cooker Partner</h2>
              <h2 onClick={() => setSelectedProject('cAdmin')} className={`p-2 hover:cursor-pointer border border-rose-900 rounded-lg ${selectedProject === 'cAdmin' ? 'bg-rose-600' : 'bg-gray-400'} mr-2`}>Cooker Admin</h2>
            </div>

            <div className="mt-20 p-2 md:flex md:items-center md:justify-center md:flex-col">
              <h1 style={{ color: '#713e12' }} className="text-center font-bold text-3xl md:text-5xl md:w-1/2">“Cooker: Transforming Food Ordering for the Modern World”</h1>
              <h2 className="text-center mt-10 md:mt-20 text-sm md:text-xl md:w-1/2 md:text-center md:p-2">Unveiling Cooker: Where Purposeful Design and User-Centered Strategy Converge for Exceptional Results</h2>
              <div className="mt-10 max-w-screen md:mt-32 flex flex-row items-center justify-between overflow-x-scroll md:no-scrollbar">
                <Image src={require('../Icons/gif_1.gif')} height={!laptopScreen ? 200 : 500} className="mx-2" />
                <Image src={require('../Icons/8.png')} height={!laptopScreen ? 200 : 500} className="mx-2" />
                <Image src={require('../Icons/gif_2.gif')} height={!laptopScreen ? 200 : 500} className="mx-2" />
              </div>

              <div className="mt-10 md:mt-20 text-center font-bold md:flex md:items-center md:justify-center md:flex-col">
                <h1 style={{ color: '#713e12' }}>Core Software & Framework Used</h1>
                <div className="mt-5 flex items-center justify-between text-center pb-5  md:rounded-lg md:w-1/3 md:p-10">
                  <div style={{ height: 45, width: 45 }} className="rounded-full">
                    <Image style={{ height: 45, width: 45 }} src={require('../Icons/rn.png')} className="rounded-full mb-1" />
                    <p className="text-xs">React Native</p>
                  </div>

                  <div style={{ height: 45, width: 45 }} className="rounded-full">
                    <Image style={{ height: 45, width: 45 }} src={require('../Icons/expo.png')} className="rounded-full mb-1 bg-white" />
                    <p className="text-xs">Expo</p>
                  </div>

                  <div style={{ height: 45, width: 45 }} className="rounded-full">
                    <Image style={{ height: 45, width: 45 }} src={require('../Icons/firebase.png')} className="rounded-full mb-1 bg-white" />
                    <p className="text-xs">Firebase</p>
                  </div>

                  <div style={{ height: 45, width: 45 }} className="rounded-full">
                    <Image style={{ height: 45, width: 45 }} src={require('../Icons/figma.png')} className="rounded-full mb-1" />
                    <p className="text-xs">Figma</p>
                  </div>

                  <div style={{ height: 45, width: 45 }} className="rounded-full">
                    <Image style={{ height: 45, width: 45 }} src={require('../Icons/stripe-logo-1.png')} className="rounded-full mb-1" />
                    <p className="text-xs">Stripe</p>
                  </div>
                </div>

                <div className="my-16 md:mx-52 text-start">
                  <h2 style={{ color: '#713e12' }} className="my-2 md:text-2xl">The Birth of Cooker</h2>
                  <h3 className="font-medium text-sm md:text-xl">Cooker was born from the desire to bridge the gap between food enthusiasts and delicious,
                    restaurant-quality meals, right at their doorstep. As a freelance developer,
                    I took on the challenge of transforming this vision into a tangible reality.
                    From the inception of the project, it was clear that attention to detail, a user-centric approach,
                    and a seamless user experience were essential ingredients for Cooker's success.</h3>
                </div>

                <div className="my-16 md:mx-52 text-start">
                  <h2 style={{ color: '#713e12' }} className="my-2 md:text-2xl">Frontend and Backend Development</h2>
                  <h3 className="font-medium text-sm pb-4 md:text-xl">Implemented the frontend of the mobile app using React Native, ensuring smooth navigation, user-friendly interfaces, and responsive layouts.</h3>
                  <h3 className="font-medium text-sm pb-4 md:text-xl">Utilized Firebase's authentication, Firestore database, and Cloud Functions to handle user data, order management, and real-time updates.</h3>
                  <h3 className="font-medium text-sm pb-4 md:text-xl">Integrated the Stripe API for secure payment processing, including support for credit/debit card payments. </h3>
                </div>

                <div className="mt-10 max-w-screen md:mt-32 flex flex-row items-center justify-between overflow-x-scroll md:no-scrollbar py-5">
                  <Image src={require('../Icons/2.png')} height={!laptopScreen ? 200 : 500} style={{ borderWidth: !laptopScreen ? 2 : 0 }} className="mx-2 shadow-lg rounded-xl border border-rose-400" />
                  <Image src={require('../Icons/5.png')} height={!laptopScreen ? 200 : 500} style={{ borderWidth: !laptopScreen ? 2 : 0 }} className="mx-2 shadow-lg rounded-xl border border-indigo-400" />
                  <Image src={require('../Icons/4.png')} height={!laptopScreen ? 200 : 500} style={{ borderWidth: !laptopScreen ? 2 : 0 }} className="mx-2 shadow-lg rounded-xl border border-fuchsia-400" />
                </div>

                <div className="mt-16 md:mx-52 text-start">
                  <h2 style={{ color: '#713e12' }} className="my-2 md:text-2xl">Graphic Design Work</h2>
                  <h3 className="font-medium text-sm pb-4 md:text-xl">The branding elements of Cooker, including logos, posters and banners were carefully crafted using Figma and Photoshop.
                    This attention to design detail contributed to the app's visual appeal and brand recognition.</h3>
                </div>

                <div className="mt-10 max-w-screen md:mt-32 flex flex-row items-center justify-between overflow-x-scroll md:no-scrollbar py-5">
                  <Image src={require('../Icons/d1.png')} height={!laptopScreen ? 200 : 500} style={{ borderWidth: !laptopScreen ? 1 : 2 }} className="mx-2 shadow-md shadow-rose-300 rounded-lg border border-rose-400" />
                  <Image src={require('../Icons/d2.png')} height={!laptopScreen ? 200 : 500} style={{ borderWidth: !laptopScreen ? 1 : 2 }} className="mx-2 shadow-md shadow-indigo-300 rounded-lg border border-indigo-400" />
                  <Image src={require('../Icons/d3.png')} height={!laptopScreen ? 200 : 500} style={{ borderWidth: !laptopScreen ? 1 : 2 }} className="mx-2 shadow-md shadow-fuchsia-300 rounded-lg border border-fuchsia-400" />
                </div>



                <div className="mt-10 max-w-screen md:mt-24 flex flex-col md:flex-row items-center justify-between overflow-x-scroll md:no-scrollbar py-5">
                  <Image src={require('../Icons/d4.gif')} height={!laptopScreen ? 150 : 200} className="mx-2" />
                  <Image src={require('../Icons/d5.png')} height={!laptopScreen ? 150 : 200} className="mx-2" />

                </div>




                <div className="my-10 text-start md:mx-52">
                  <h2 style={{ color: '#713e12' }} className="my-2 text-2xl">User Adoption and Impact</h2>

                  <div style={{ color: '#713e12' }} className="py-4 flex items-center justify-start">
                    <div className="text-center mr-5">
                      <p className="text-sm md:text-xl">4000+</p>
                      <p className="font-light text-xs md:text-lg">Downloads</p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm md:text-xl">4.2★</p>
                      <p className="font-light text-xs md:text-lg">25 reviews</p>
                    </div>

                    <div onClick={() => window.open('https://play.google.com/store/apps/details?id=com.cookernht.cooker')} className="ml-5 hover:cursor-pointer hover:brightness-90">
                      <Image src={require('../Icons/gplay.png')} height={75} />
                    </div>
                  </div>
                  <h3 className="font-medium text-sm md:text-xl">Cooker's journey from concept to reality was rewarded with an enthusiastic response from users.
                    The app quickly gained traction, amassing more than <span className="font-bold">4000+ downloads</span> and carried through <span className="font-bold">over 700 deliveries</span> in a relatively short time.
                    These numbers are a testament to the app's appeal and its ability to meet the needs of food enthusiasts and busy individuals seeking convenient dining solutions.</h3>
                </div>
              </div>
            </div>
          </div> : selectedProject === 'cAdmin' ?
            <div className={`p-4 ${selectedProject === 'cooker' ? "bg-yellow-300" : selectedProject === 'cpp' ? 'bg-teal-400' : 'bg-rose-400'} rounded-lg`}>
              <h2 className={`text-lg font-bold ${selectedProject === 'cooker' ? 'text-yellow-950' : selectedProject === 'cpp' ? 'text-indigo-950' : 'text-rose-9'} pb-5`}>Projects:</h2>
              <div className="flex flex-row text-white font-bold">
                <h2 onClick={() => setSelectedProject('cooker')} className={`p-2 hover:cursor-pointer border border-yellow-900 rounded-lg ${selectedProject === 'cooker' ? 'bg-yellow-600' : 'bg-gray-400'} mr-2`}>Cooker</h2>
                <h2 onClick={() => setSelectedProject('cpp')} className={`p-2 hover:cursor-pointer border border-cyan-900 rounded-lg ${selectedProject === 'cpp' ? 'bg-cyan-600' : 'bg-gray-400'} mr-2`}>Cooker Partner</h2>
                <h2 onClick={() => setSelectedProject('cAdmin')} className={`p-2 hover:cursor-pointer border border-rose-900 rounded-lg ${selectedProject === 'cAdmin' ? 'bg-rose-600' : 'bg-gray-400'} mr-2`}>Cooker Admin</h2>
              </div>



              <div className="mt-20 p-2 md:flex md:items-center md:justify-center md:flex-col">
                <h1 className="text-center text-rose-950 font-bold text-3xl md:text-5xl md:w-1/2">“Cooker Admin: A Bird's Eye View”</h1>
                <h2 className="text-center mt-10 md:mt-20 text-sm md:text-xl md:w-1/2 md:text-center md:p-2">Cooker Admin is the command center for the Cooker ecosystem</h2>
                <div className="mt-10 max-w-screen md:mt-32 flex flex-row items-center justify-between overflow-x-scroll md:no-scrollbar">
                  <Image quality={100} src={require('../Icons/ca1.gif')} height={!laptopScreen ? 200 : 500} className="mx-2" />
                  <Image quality={100} src={require('../Icons/ca2.png')} height={!laptopScreen ? 200 : 500} className="mx-2" />
                  <Image quality={100} src={require('../Icons/ca3.jpg')} height={!laptopScreen ? 200 : 500} className="mx-2" />
                </div>

                <div className="mt-10 md:mt-20 text-center font-bold md:flex md:items-center md:justify-center md:flex-col">
                  <h1 className="text-rose-950">Core Software & Framework Used</h1>
                  <div className="mt-5 flex items-center justify-between text-center pb-5  md:rounded-lg md:w-1/3 md:p-10">
                    <div style={{ height: 45, width: 45 }} className="rounded-full">
                      <Image style={{ height: 45, width: 45 }} src={require('../Icons/rn.png')} className="rounded-full mb-1" />
                      <p className="text-xs">React Native</p>
                    </div>

                    <div style={{ height: 45, width: 45 }} className="rounded-full">
                      <Image style={{ height: 45, width: 45 }} src={require('../Icons/expo.png')} className="rounded-full mb-1 bg-white" />
                      <p className="text-xs">Expo</p>
                    </div>

                    <div style={{ height: 45, width: 45 }} className="rounded-full">
                      <Image style={{ height: 45, width: 45 }} src={require('../Icons/firebase.png')} className="rounded-full mb-1 bg-white" />
                      <p className="text-xs">Firebase</p>
                    </div>

                    <div style={{ height: 45, width: 45 }} className="rounded-full">
                      <Image style={{ height: 45, width: 45 }} src={require('../Icons/figma.png')} className="rounded-full mb-1" />
                      <p className="text-xs">Figma</p>
                    </div>
                  </div>

                  <div className="my-16 md:mx-52 text-start">
                    <h2 className="text-rose-950 my-2 md:text-2xl">Introduction</h2>
                    <h3 className="font-medium text-sm md:text-xl"> Cooker Admin serves as the central hub of the Cooker ecosystem,
                      offering comprehensive tools for administrators to oversee and optimize operations.
                      This case study explores the development of Cooker Admin, an essential extension of the Cooker app,
                      designed to enhance the platform's administrative capabilities.</h3>
                  </div>

                  <div className="my-16 md:mx-52 text-start">
                    <h2 className="text-rose-950 my-2 md:text-2xl">Real-Time Insights</h2>
                    <h3 className="font-medium text-sm md:text-xl">The admin panel needed to provide real-time insights into platform activity,
                      allowing administrators to make informed decisions and quickly address any issues that arose.</h3>
                  </div>

                  <div className="my-16 md:mx-52 text-start">
                    <h2 className="my-2 md:text-2xl text-rose-950">Comprehensive Features</h2>
                    <h3 className="font-medium text-sm pb-4 md:text-xl">User and Restaurant Management: Cooker Admin provides tools for administrators to manage user accounts and restaurant partnerships.
                      This includes user verification, restaurant onboarding, and access control.</h3>
                    <h3 className="font-medium text-sm pb-4 md:text-xl">Order Monitoring: Administrators have real-time access to order data, allowing them to monitor order status,
                      resolve issues, and ensure smooth order processing.</h3>
                    <h3 className="font-medium text-sm pb-4 md:text-xl">Data Analytics: Cooker Admin includes data analytics dashboards that offer insights into platform performance, user behavior, and order trends.
                      These insights are valuable for making data-driven decisions.</h3>
                    <h3 className="font-medium text-sm pb-4 md:text-xl">Support and Issue Resolution: Cooker Admin facilitates efficient support ticket management,
                      ensuring that user queries and issues are addressed promptly.</h3>
                  </div>
                </div>
              </div>
            </div> :
            <div className={`p-4 ${selectedProject === 'cooker' ? "bg-yellow-300" : selectedProject === 'cpp' ? 'bg-teal-400' : 'bg-rose-400'} rounded-lg`}>
              <h2 className={`text-lg font-bold ${selectedProject === 'cooker' ? 'text-yellow-950' : selectedProject === 'cpp' ? 'text-indigo-950' : 'text-rose-9'} pb-5`}>Projects:</h2>
              <div className="flex flex-row text-white font-bold">
                <h2 onClick={() => setSelectedProject('cooker')} className={`p-2 hover:cursor-pointer border border-yellow-900 rounded-lg ${selectedProject === 'cooker' ? 'bg-yellow-600' : 'bg-gray-400'} mr-2`}>Cooker</h2>
                <h2 onClick={() => setSelectedProject('cpp')} className={`p-2 hover:cursor-pointer border border-cyan-900 rounded-lg ${selectedProject === 'cpp' ? 'bg-cyan-600' : 'bg-gray-400'} mr-2`}>Cooker Partner</h2>
                <h2 onClick={() => setSelectedProject('cAdmin')} className={`p-2 hover:cursor-pointer border border-rose-900 rounded-lg ${selectedProject === 'cAdmin' ? 'bg-rose-600' : 'bg-gray-400'} mr-2`}>Cooker Admin</h2>
              </div>



              <div className="mt-20 p-2 md:flex md:items-center md:justify-center md:flex-col">
                <h1 className="text-center text-teal-900 font-bold text-3xl md:text-5xl md:w-1/2">“Cooker Partner - Empowering Restaurants with React Native”</h1>
                <h2 className="text-center mt-10 md:mt-20 text-sm md:text-xl md:w-1/2 md:text-center md:p-2">A Comprehensive Overview of Mobile Restaurant Management Interfaces</h2>
                <div className="mt-10 max-w-screen md:mt-32 flex flex-row items-center justify-between overflow-x-scroll md:no-scrollbar">
                  <Image quality={100} src={require('../Icons/cpp3.gif')} height={!laptopScreen ? 200 : 500} className="mx-2" />
                  <Image quality={100} src={require('../Icons/cpp1.png')} height={!laptopScreen ? 200 : 500} className="mx-2" />
                  <Image quality={100} src={require('../Icons/cpp2.png')} height={!laptopScreen ? 200 : 500} className="mx-2" />
                </div>

                <div className="mt-10 md:mt-20 text-center font-bold md:flex md:items-center md:justify-center md:flex-col">
                  <h1 className="text-teal-900">Core Software & Framework Used</h1>
                  <div className="mt-5 flex items-center justify-between text-center pb-5  md:rounded-lg md:w-1/3 md:p-10">
                    <div style={{ height: 45, width: 45 }} className="rounded-full">
                      <Image style={{ height: 45, width: 45 }} src={require('../Icons/rn.png')} className="rounded-full mb-1" />
                      <p className="text-xs">React Native</p>
                    </div>

                    <div style={{ height: 45, width: 45 }} className="rounded-full">
                      <Image style={{ height: 45, width: 45 }} src={require('../Icons/expo.png')} className="rounded-full mb-1 bg-white" />
                      <p className="text-xs">Expo</p>
                    </div>

                    <div style={{ height: 45, width: 45 }} className="rounded-full">
                      <Image style={{ height: 45, width: 45 }} src={require('../Icons/firebase.png')} className="rounded-full mb-1 bg-white" />
                      <p className="text-xs">Firebase</p>
                    </div>

                    <div style={{ height: 45, width: 45 }} className="rounded-full">
                      <Image style={{ height: 45, width: 45 }} src={require('../Icons/figma.png')} className="rounded-full mb-1" />
                      <p className="text-xs">Figma</p>
                    </div>
                  </div>

                  <div className="my-16 md:mx-52 text-start">
                    <h2 className="text-teal-900 my-2 md:text-2xl">Introduction</h2>
                    <h3 className="font-medium text-sm md:text-xl">In the ever-evolving realm of food delivery,
                      seamless communication between restaurants and food delivery platforms is pivotal. Cooker Partner,
                      an extension of the Cooker ecosystem, is a restaurant management app designed exclusively for restaurant owners who have partnered with Cooker.
                      Developed with React Native, Cooker Partner provides restaurant owners with a comprehensive toolkit to manage their operations efficiently.</h3>
                  </div>

                  <div className="my-16 md:mx-52 text-start">
                    <h2 className="text-teal-900 my-2 md:text-2xl">Seamless Integration</h2>
                    <h3 className="font-medium text-sm md:text-xl">It was crucial to create an app that seamlessly integrated with the Cooker user app and backend systems.
                      The challenge was to make Cooker Partner an intuitive and user-friendly solution,
                      allowing restaurant owners to access and manage their Cooker partnership effortlessly.</h3>
                  </div>

                  <div className="my-16 md:mx-52 text-start">
                    <h2 className="my-2 md:text-2xl text-teal-900">Comprehensive Features</h2>
                    <h3 className="font-medium text-sm pb-4 md:text-xl">Order Management: Cooker Partner allows restaurant owners to view, confirm, or cancel incoming orders in real-time.
                      This feature ensures that restaurants can efficiently manage their order flow and reduce processing times.</h3>
                    <h3 className="font-medium text-sm pb-4 md:text-xl">Menu Customization: Restaurant owners can easily update their menus within the app, ensuring that customers have access to the latest offerings.
                      This flexibility empowers restaurants to make quick changes in response to demand or supply.</h3>
                    <h3 className="font-medium text-sm pb-4 md:text-xl">Payment Tracking: Cooker Partner provides insights into payment history and transaction details,
                      allowing restaurant owners to keep tabs on their financial interactions with Cooker.</h3>
                    <h3 className="font-medium text-sm pb-4 md:text-xl">Operational Insights: The app offers valuable insights into order performance and customer feedback,
                      enabling restaurants to make data-driven decisions and enhance their service quality.</h3>
                  </div>


                </div>
              </div>
            </div>
        }
      </div>
    </div>
  );
}
