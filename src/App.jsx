import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import ProjectSection from "./components/Projects";
import TimelineSection from "./components/Timeline";
import ServiceSection from "./components/Service";
import TestimonialsSection from "./components/Testimonials";
import ContactForm from "./components/Contact";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="h-screen">
      <Navbar />
      {data && (
        <>
          <Hero user={data.user} />
          <AboutSection user={data.user} />
          <SkillsSection skills={data.user.skills} />
          <ProjectSection projects={data.user.projects} />
          <TimelineSection timeline={data.user.timeline} />
          <ServiceSection services={data.user.services} />
          <TestimonialsSection testimonials={data.user.testimonials} />
          <ContactForm user={data.user} />
        </>
      )}
    </div>
  );
}

export default App;
