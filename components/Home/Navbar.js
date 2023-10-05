import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { screenSize } from "@/app/utils/screenSize";

function Navbar() {
  const [hoverIn, setHoverIn] = useState(false);
  const [hoverInHi, setHoverInHi] = useState(false);
  const [hoverInWork, setHoverInWork] = useState(false);

  const handleDownload = () => {
    const pdfUrl =
      "https://drive.google.com/uc?export=download&id=1t3WPcJk44wyGL9VxZ5SDz6_OQtDkdNqw"; // Replace with the actual URL of your PDF
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "downloaded.pdf"; // Specify the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`flex items-center justify-evenly absolute top-0 -left-5 w-screen mx-1 md:w-1/2 md:justify-around overflow-x-scroll md:no-scrollbar`}>
      <Link href={'/'}>
        <div style={{ height: 50, width: 50 }}>
          <Image
            alt="Logo"
            quality={100}
            src={require('../../app/Icons/intiaj-gif.gif')}
            className="bg-gray-500 rounded-full m-2"
            height={50}
            width={50}
          />
        </div></Link>

      <div
        onClick={() => handleDownload()}
        onMouseLeave={() => {
          setHoverIn(false);
        }}
        onMouseEnter={() => {
          setHoverIn(true);
        }}
        className="hover:cursor-pointer flex items-center hover:text-bold"
        style={{ height: 50, width: 50 }}
      >
        <Image
          src={require("../../app/Icons/download.png")}
          height={25}
          width={25}
          className={`${hoverIn ? "animate-ping" : "animate-none"}`}
        />

        <p
          className={` text-xs mx-2 ${!hoverIn ? "text-blue-400" : "text-rose-400"
            }`}
        >
          {screenSize().isDesktopOrLaptop ? 'Résumé' : 'Résumé'}
        </p>
      </div>

      <Link
        style={{ height: 50, width: 50 }}
        href={"/works"}
        onMouseLeave={() => {
          setHoverInWork(false);
        }}
        onMouseEnter={() => {
          setHoverInWork(true);
        }}
        className="hover:cursor-pointer flex items-center hover:text-bold "
      >
        <Image
          src={require("../../app/Icons/briefcase.png")}
          height={25}
          width={25}
          className={`${hoverInWork ? "animate-pulse" : "animate-none"}`}
        />

        <p
          className={`mx-2 text-xs ${!hoverInWork ? "text-blue-400" : "text-rose-400"
            }`}
        >

          {screenSize().isDesktopOrLaptop ? 'My Works' : 'Works'}
        </p>
      </Link>

      <Link
        style={{ height: 50, width: 50 }}
        href={"/contact"}
        onMouseLeave={() => {
          setHoverInHi(false);
        }}
        onMouseEnter={() => {
          setHoverInHi(true);
        }}
        className=" hover:cursor-pointer flex items-center hover:text-bold "
      >
        <Image
          src={require("../../app/Icons/hi.png")}
          height={25}
          width={25}
          className={`${hoverInHi ? "animate-wiggle" : "animate-none"}`}
        />

        <p
          className={`mx-2  text-xs ${!hoverInHi ? "text-blue-400" : "text-rose-400"
            }`}
        >

          {screenSize().isDesktopOrLaptop ? 'Say Hi!' : 'Contact'}
        </p>
      </Link>
    </div>
  );
}

export default Navbar;
