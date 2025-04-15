import Image from "next/image";
import Navbar from "./pages/navbar/page";
import Hero from "./pages/hero/page";
import Highilight from "./pages/highilight/page";

export default function Home() {
  return (
    <>
  <Navbar/>
  <Hero/>
  <Highilight/>
    </>
  );
}
