import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import StudyBuddyLogo from "../assets/Logo.svg";

const HomeHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="h-40 w-40">
          <img
            src={StudyBuddyLogo}
            alt="Study Buddy Logo"
            className="h-full w-full object-contain"
          />
        </div>
        <span className="text-3xl font-bold">Study Buddy</span>
      </div>

      {/* Nav (Homepage links) */}
      <nav className="hidden md:flex gap-6 text-lg">
        <a href="#features">Features</a>
        <a href="#how">How It Works</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#about">About Us</a>
      </nav>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/login")}
          className="border px-6 py-2 rounded text-base"
        >
          Log In
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-blue-600 text-white px-6 py-2 rounded text-base"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

const Home = () => {
  return (
    <div className="font-sans">
      
      <HomeHeader />

      
      <main className="px-6 md:px-16 py-12 space-y-20">
       
        <section className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">About Study Buddy</h2>
            <p className="text-gray-600 mb-6 max-w-xl">
              We're on a mission to transform how students learn together.
              Study Buddy was created by a team of educators and technologists
              who believe in the power of collaborative learning.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded">
                Join Our Community
              </button>
              <button className="border px-6 py-2 rounded">Meet Our Team</button>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-gray-200 h-60 rounded shadow" />
        </section>

        
        <section className="text-center max-w-4xl mx-auto" id="how">
          <div className="text-blue-500 text-sm font-semibold mb-2">Our Story</div>
          <h2 className="text-3xl font-bold mb-6">How Study Buddy Began</h2>
          <p className="text-gray-600 leading-relaxed">
            Study Buddy was founded in 2020 by graduate students who experienced
            the challenges of remote learning during the pandemic. It started
            as a tool for virtual study sessions and evolved into a full
            collaborative platform.
          </p>
          <p className="text-gray-600 mt-4">
            Today, we serve thousands of students across the globe, helping them
            connect, collaborate, and achieve academic success.
          </p>
        </section>

        
        <section className="text-center" id="features">
          <div className="text-blue-500 text-sm font-semibold mb-2">Our Values</div>
          <h2 className="text-3xl font-bold mb-8">What Drives Us</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Our Mission",
                text: "To empower students worldwide by creating accessible tools that foster collaborative learning, knowledge sharing, and academic success.",
              },
              {
                title: "Our Vision",
                text: "A world where every student has access to quality collaborative learning experiences that enhance their education and prepare them for future success.",
              },
              {
                title: "Community",
                text: "We believe in the power of community and connection. Study Buddy is built on the principle that learning is more effective when done together.",
              },
              {
                title: "Excellence",
                text: "We’re committed to excellence in everything we do, from the technology we build to the support we provide to our users.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded shadow">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        
        <section className="text-center" id="about">
          <div className="text-blue-500 text-sm font-semibold mb-2">Our Team</div>
          <h2 className="text-3xl font-bold mb-6">Meet the People Behind Study Buddy</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Sarah Johnson",
                title: "Co-Founder & CEO",
                desc: "Former professor with a passion for educational technology and collaborative learning.",
              },
              {
                name: "Michael Chen",
                title: "Co-Founder & CTO",
                desc: "Software engineer with experience building education platforms and management systems.",
              },
              {
                name: "Emily Rodriguez",
                title: "Head of Product",
                desc: "Former teacher with a background in UX design and educational psychology.",
              },
              {
                name: "David Kim",
                title: "Head of Education",
                desc: "Researcher specializing in collaborative learning and student engagement.",
              },
            ].map((member, i) => (
              <div key={i} className="bg-white p-4 rounded shadow text-left">
                <div className="w-full h-32 bg-gray-200 mb-4 rounded" />
                <h4 className="font-bold">{member.name}</h4>
                <p className="text-sm text-blue-500">{member.title}</p>
                <p className="text-sm text-gray-600 mt-2">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default Home;
