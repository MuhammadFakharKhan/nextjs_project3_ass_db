import React from "react";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 text-center animate__animated animate__fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-2xl animate__animated animate__fadeInUp animate__delay-1s">Showcasing my projects and skills</p>
      </section>

      {/* About Me Preview */}
      <section className="py-20 text-center animate__animated animate__fadeIn animate__delay-2s">
        <h2 className="text-3xl font-bold mb-6 text-black">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-6">
          <Image 
            src="/images/fk pic5.png" 
            alt="About Me Image" 
            width={300} 
            height={300} 
            className="rounded-full shadow-lg animate__animated animate__zoomIn"
          />
          <p className="max-w-lg text-black text-lg text-left animate__animated animate__fadeInRight animate__delay-3s">
            Hi, My name is Muhammad Fakhar Khan. I&apos;m a passionate developer and graphic designer with a knack for creating seamless user experiences and robust web applications. Learn more about my journey and interests on the <Link href="/about" className="text-black hover:underline hover:bg-black hover:text-white font-semibold">About Me</Link> page.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 text-center animate__animated animate__fadeIn animate__delay-3s">
        <h2 className="text-3xl font-bold mb-6 text-black">My Skills</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full max-w-xl mb-4">
            <label className="block text-left text-lg font-bold mb-2 text-black">HTML</label>
            <div className="bg-gray-300 w-full h-6 rounded-full">
              <div className="bg-black h-full rounded-full text-white animate__animated animate__slideInRight" style={{ width: "90%" }}>90%</div>
            </div>
          </div>
          <div className="w-full max-w-xl mb-4">
            <label className="block text-left text-lg font-bold mb-2 text-black">CSS</label>
            <div className="bg-gray-300 w-full h-6 rounded-full">
              <div className="bg-black h-full rounded-full text-white animate__animated animate__slideInLeft" style={{ width: "85%" }}>85%</div>
            </div>
          </div>
          <div className="w-full max-w-xl mb-4">
            <label className="block text-left text-lg font-bold mb-2 text-black">JavaScript</label>
            <div className="bg-gray-300 w-full h-6 rounded-full">
              <div className="bg-black h-full rounded-full text-white animate__animated animate__slideInLeft" style={{ width: "75%" }}>75%</div>
            </div>
          </div>
          <div className="w-full max-w-xl mb-4">
            <label className="block text-left text-lg font-bold mb-2 text-black">TypeScript</label>
            <div className="bg-gray-300 w-full h-6 rounded-full">
              <div className="bg-black h-full text-white rounded-full animate__animated animate__slideInRight" style={{ width: "80%" }}>80%</div>
            </div>
          </div>
          <div className="w-full max-w-xl mb-4">
            <label className="block text-left text-lg font-bold mb-2 text-black">Next.js</label>
            <div className="bg-gray-300 w-full h-6 rounded-full">
              <div className="bg-black h-full rounded-full text-white animate__animated animate__slideInRight" style={{ width: "70%" }}>70%</div>
            </div>
          </div>
          <div className="w-full max-w-xl mb-4">
            <label className="block text-left text-lg font-bold mb-2 text-black">Adobe Illustrator</label>
            <div className="bg-gray-300 w-full h-6 rounded-full">
              <div className="bg-black h-full rounded-full text-white animate__animated animate__slideInRight" style={{ width: "90%" }}>90%</div>
            </div>
          </div>
          <div className="w-full max-w-xl mb-4">
            <label className="block text-left text-lg font-bold mb-2 text-black">Adobe Photoshop</label>
            <div className="bg-gray-300 w-full h-6 rounded-full">
              <div className="bg-black h-full rounded-full text-white animate__animated animate__slideInRight" style={{ width: "85%" }}>85%</div>
            </div>
          </div>
          <div className="w-full max-w-xl">
            <label className="block text-left text-black text-lg font-bold mb-2">Canva</label>
            <div className="bg-gray-300 w-full h-6 rounded-full">
              <div className="bg-black h-full rounded-full text-white animate__animated animate__slideInRight" style={{ width: "70%" }}>70%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-20 text-center animate__animated animate__fadeIn animate__delay-4s">
        <h2 className="text-3xl font-bold mb-6 text-black">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <Link href="https://hackathon-project-5.vercel.app/">
              
                <Image 
                  src="/images/coding (1).png" 
                  alt="Project One" 
                  width={300} 
                  height={200} 
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-black">HTML & CSS PROJECT</h3>
                <p className="text-black">Generate a unique URL for each resume based on the users username, and allow the resume to be shared and downloaded.</p>
              
            </Link>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
            <Link href="/path/to/project-two">
            
                <Image 
                  src="/images/nextjs-img.png" 
                  alt="Project Two" 
                  width={300} 
                  height={200} 
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-black">NEXTJS PROJECT</h3>
                <p className="text-black">This is a brief description of Project Two.</p>
              
            </Link>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
            <Link href="https://drive.google.com/file/d/1IE3F8eq-mxt0v3uT3grPqtoKra5jF9-C/view?usp=sharing&usp=embed_facebook">
            
                <Image 
                  src="/images/adobe ai photo.png" 
                  alt="Project Three" 
                  width={300} 
                  height={300} 
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-black">GRAPHIC DESIGNING PROJECT</h3>
                <p className="text-black">My graphic design portfolio.</p>
              
            </Link>
          </div>
        </div>
        <p className="mt-8 text-black">
          Explore more projects on the <Link href="/projects" className="text-black hover:bg-black hover:text-white hover:underline font-semibold animate__animated animate__fadeIn">Projects</Link> page.
        </p>
      </section>

      {/* Contact Information */}
      <section className="text-white bg-black py-20 text-center animate__animated animate__fadeIn animate__delay-5s">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to reach out to me via the following contact information:</p>
        <div className="flex flex-col items-center space-y-4">
          <p><strong>Email:</strong> fk8201610@gmail.com</p>
          <p><strong>Phone:</strong> +923353610778</p>
          <p><strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/muhammad-fakhar-khan-291bb0226" className="text-white hover:underline hover:bg-white hover:text-black"target="_blank" rel="noopener noreferrer">linkedin.com/in/muhammad-fakhar-khan-291bb0226</Link></p>
          <p><strong>Github:</strong> <Link href="https://github.com/MuhammadFakharKhan" className="text-white hover:underline hover:bg-white hover:text-black" target="_blank" rel="noopener noreferrer">github.com/MuhammadFakharKhan</Link></p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;