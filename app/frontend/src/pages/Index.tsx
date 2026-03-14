import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import About from "@/components/About";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen theme-page">
      <Navbar />
      <Hero />
      <Activities />
      <About />
      <Calendar />
      <Contact />
      <Footer />
    </div>
  );
}
