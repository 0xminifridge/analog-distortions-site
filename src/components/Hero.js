import { useEffect } from "react";
import { Link } from "react-router-dom";
import Journey from "./Journey";
import Collections from "./AnalogueDistortions";
import Footer from "./Footer";
import RIPDAO from "./RipDAO";

export default function Hero({ title }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const data = [1, 2, 3];

  return (
    <div class="flex flex-col bg-gradient-to-b from-black via-black to-primary">
      <div className="relative w-screen h-[100vh] border-b-4 border-solid border-black">
        <img
          src={`${process.env.PUBLIC_URL}/images/home-hero.png`}
          alt="Background"
          className="w-full h-full object-none"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-black text-center flex flex-col justify-center mx-auto md:w-[60%] p-4 rounded-xl">
            <div class="glitch-wrapper">
              <div class="glitch" data-text="Analog Distortions">
                Analog Distortions
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-40 left-0 right-0 text-center">
          <span class="text-white">Enter the City. A story by WrathTank</span>
        </div>
      </div>
      <Journey />
      <Collections />
      <RIPDAO />
      <Footer />
    </div>
  );
}
