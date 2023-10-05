"use client"

import HeroSection from "../components/Home/HeroSection";

import Head from "next/head";
import MyworksComponent from "@/components/Home/MyworksComponent";
import MyworksComponent2 from "@/components/Home/MyworksComponent2";
import MyDesigns from "@/components/Home/MyDesigns";
import MySkills from "@/components/Home/MySkills";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col backdrop-blur-md bg-white w-screen overflow-hidden">
        <HeroSection />
        <h1 style={{ fontFamily: 'Bebas-Regular' }} className="text-center text-black text-3xl p-4 my-10">
          My recent
          <Link href={{
            pathname: '/works',
            query: { project: 'cooker' }
          }}><span
            className="font-bold bg-white hover:text-rose-500 hover:cursor-pointer"

          >
              {" "}
              Works
            </span></Link>

        </h1>
        <MyworksComponent />
        <MyworksComponent2 />
        <MyDesigns />

        <MySkills />
      </main>
      <footer className="flex items-center justify-center flex-col md:text-sm text-xs text-center relative text-white bg-indigo-800">
        <div className="flex items-center justify-around font-bold flex-col md:flex-row w-11/12 p-5 bg-indigo-500 rounded-lg absolute -top-12 md:-top-6">
          <div className="m-2 text-lg">
            <p>Start a project</p>
          </div>
          <div className="m-2">
            <p>Interested in working together? We should queue up a time to chat.</p>
          </div>
          <Link href={'/contact'}>
            <div style={{ borderWidth: 2 }} className="cursor-pointer pr-1 m-2 text-lg border border-emerald-500 rounded-xl p-1 text-white flex items-center justify-center hover:text-black hover:bg-emerald-500">
              <Image alt="green-tea" src={require('./Icons/green-tea.png')} height={20} width={20} className="mx-1" />
              <p className="mx-1">Lets do this</p>
            </div>
          </Link>
        </div>
        <div className="py-40 md:py-24 flex items-center justify-center flex-col">
          <Image alt="intiaj1" quality={100} src={require('../app/Icons/intiaj.jpg')} height={45} width={45} className="rounded-full my-2" />
          <p className="font-light p-2 text-white">“Growing and improving every day.”</p>

          <div className="pt-10 flex items-center flex-row justify-around">
            <div onClick={() => window.open('mailto:intiaj.dev@gmail.com')} className="rounded-full p-2 m-2 bg-white border border-emerald-400 cursor-pointer hover:brightness-110 brightness-95 hover:bg-emerald-400">
              <Image alt="gmail" src={require('../app/Icons/gmail.png')} height={25} width={25} />
            </div>
            <div onClick={() => window.open('https://instagram.com/just_intiaj?igshid=OGQ5ZDc2ODk2ZA==')} className="rounded-full p-2 m-2 bg-white border border-emerald-400 cursor-pointer hover:brightness-110 brightness-95 hover:bg-emerald-400">
              <Image alt="insta" src={require('../app/Icons/instagram.png')} height={25} width={25} />
            </div>

          </div>

          <div className="pt-10 ">
            <p>Handcrafted by me © 2023</p>

            <div className="flex items-center flex-row my-5 ">
              <p className="pr-2">Made with</p>
              <Image alt="next" src={require('../app/Icons/next.png')} height={25} width={25} className="rounded-full" />
              <p className="px-2">&</p>
              <Image alt="tailwind" src={require('../app/Icons/Tailwinds.png')} height={25} width={25} className="rounded-full bg-white" />
            </div>
          </div>
        </div>


      </footer>
    </>
  );
}
