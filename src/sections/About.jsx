import { useState } from 'react';
import List from '../components/List.jsx'
import { FaKeyboard } from "react-icons/fa";
import Globe from 'react-globe.gl';


import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' sisayAbel681@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/arod8911_cartoon_6a2370e0-10fb-4934-b66a-00f363ebdbf7.png" alt="grid-1" className="w-full rounded-md sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Abel Sisay</p>
              <p className="grid-subtext">
                Over the past 3 years, I’ve refined my expertise in both frontend and backend development, building dynamic and responsive websites
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <List />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={426}
                width={426}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">I'm highly adaptable when it comes to communication across time zones and locations.</p>
              <p className="grid-subtext"> I'm enthusiastic about the opportunity to work remotely from anywhere in the world.</p>
              <Button href='#contact' name="Contact Me"  containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <FaKeyboard className="w-full sm:h-[266px] h-fit object-contain text-[#1313130]" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I’m driven by a passion for solving complex challenges through code.&apos;
                Building innovative solutions and turning ideas into reality excites me.&apos;
                Programming isn't just my profession—it’s my purpose&apos;
                I continuously explore new technologies and strive to enhance my skills.&apos;
                Every project is an opportunity to grow, learn, and create impact&apos;
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-SpicyRice font-medium text-gray_gradient text-white">sisayabel681@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;