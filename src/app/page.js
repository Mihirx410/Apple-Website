import Image from "next/image";
import Navbar from "./pages/navbar/page";
import Hero from "./pages/hero/page";
import Highilight from "./pages/highilight/page";
import Model from "./pages/model/page";
import Features from "./pages/features/page";
import HowItWorks from "./pages/howitworks/page";
import Footer from "./pages/footer/page";

export default function Home() {
  return (
    <>
  <Navbar/>
  <Hero/>
  <Highilight/>
  <Model/>
  <Features/>
  <HowItWorks/>
  <Footer/>
    </>
  );
}
