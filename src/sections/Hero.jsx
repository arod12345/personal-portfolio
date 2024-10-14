import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import CyberPunk from "../components/CyberPunk.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Button from "../components/Button.jsx"
import HeroCamera from "../components/HeroCamera.jsx";
import { FaComputerMouse } from 'react-icons/fa6'
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import { useControls, Leva } from 'leva'
import { CgMouse } from "react-icons/cg";


const Hero = () => {

    // const x = useControls("CyberPunk", {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10
    //     }
    // })

    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isTablet, isMobile)

    return (
        <section className="min-h-screen w-full flex flex-col relative">

            <div className="w-full h-full absolute insert-0">
                {/* <Leva /> */}
                <Canvas className="w-full h-full">
                    
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera isMobile={isMobile}>
                            <CyberPunk
                                position={sizes.pcPosition}
                                // rotation={[0, 0, 0]}
                                scale={sizes.pcScale}
                            />

                        </HeroCamera>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        {/* <OrbitControls enableZoom={true} enableRotate={false} enablePan={true} /> */}
                   
                </Canvas>
            </div>

            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-bold text-white text-center">
                    Greetings, I'm Abel <span className="waving-hand">✋</span>
                </p>
                <p className="hero_tag text-slate-200 text-center">
                    Designing solutions and identities
                </p>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 bg-transparent">
                <a href="#contact" className="w-fit">
                    <Button name="Scroll Down" icon={<CgMouse className="mr-6 w-6 h-6" />} containerClass="sm:w-fit w-[90%] sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

export default Hero;