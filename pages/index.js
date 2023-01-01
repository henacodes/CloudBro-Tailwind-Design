import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pricin from "../components/Pricin";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <div className="bg-purple-accent">
        <div className="px-10 md:px-20">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="pricing-grid grid justify-items-stretch md:grid-cols-3">
        <Pricin />
        <Pricin />
        <Pricin />
      </div>
      <Footer />
    </>
  );
}
