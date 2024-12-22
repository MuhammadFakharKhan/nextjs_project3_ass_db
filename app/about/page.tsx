import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col items-center mt-[52px] px-4 animate__animated animate__fadeInRight">
      <h1 className="text-center text-2xl font-semibold mb-6 animate__animated animate__fadeInLeft animate__delay-1s">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
        <Image 
          src="/images/fk pic5.png" 
          alt="About Me Image" 
          width={300} 
          height={300} 
          className="rounded-full shadow-lg"
        />
        <div className="max-w-lg text-center md:text-left">
          <p className="text-lg">
            Hi, My name is Muhammad Fakhar Khan. I&apos;m a passionate developer with a knack for creating seamless user experiences and robust web applications. My journey in tech began 2 years ago, and I&apos;ve loved every moment of it. Whether I&apos;m working on a complex frontend interface or designing a sleek backend system, I always aim for excellence.
          </p>
          <p className="mt-4 text-lg">
            When I&apos;m not coding, you can find me on the cricket ground. I believe in continuous learning and always strive to improve my skills and knowledge in the ever-evolving tech landscape.
          </p>
          <p className="mt-4 text-lg">
            As a TypeScript developer, I am constantly expanding my expertise in the language to build robust and scalable applications. My current focus is on learning about Next.js, Generative AI, and Agentic AI to leverage these technologies in my future projects and further enhance my development skills.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;