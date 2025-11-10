import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import CynefinSVG from "./CynefinSVG";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;
        
        // Calcular el offset parallax cuando el elemento está en el viewport
        // El elemento se mueve más lento que el scroll (efecto parallax)
        if (elementTop < windowHeight && elementTop > -elementHeight) {
          // Factor de velocidad parallax: 0.4 significa que se mueve al 40% de la velocidad del scroll
          const offset = (windowHeight - elementTop) * 0.4;
          parallaxRef.current.style.transform = `translateY(${offset}px)`;
        } else if (elementTop >= windowHeight) {
          // Resetear cuando el elemento está arriba del viewport
          parallaxRef.current.style.transform = `translateY(0px)`;
        }
      }
    };

    handleParallax();
    window.addEventListener("scroll", handleParallax, { passive: true });
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <>
    <div className="flex items-center justify-center max-w-screen h-screen overflow-x-hidden">
      <CynefinSVG />
    </div>

    <Image src={"background.png"}
            width={250} height={250} alt="Background" className="mx-auto w-full absolute top-[150vh]" />

    {/* Sección de contenido explicativo */}
    <div className="w-full py-16">



      <div className="max-w-[1200px] mx-auto px-4">
        {/* Título */}
        <h1 className="text-[88px] font-serif leading-[72px] mb-24 px-12 block" style={{ fontFamily: 'Georgia, serif' }}>
          Marco <br/>
          <i>Cynefin.</i>
        </h1>

        {/* Contenedor blanco con SVG y texto */}
        <div 
          ref={parallaxRef}
          className="bg-white rounded-[24px] p-8 flex gap-8 relative z-10 will-change-transform"
        >
          {/* SVG - 1/3 del ancho */}
          <div className="w-1/3 flex-shrink-0">
            <Image src={"cynefin-esquema-blanco.png"}
            width={250} height={250} alt="Esquema Cynefin" className="mx-auto w-full px-12 py-12" />

          </div>

          {/* Texto explicativo - 2/3 del ancho */}
          <div className="w-2/3 text-[18px] leading-relaxed my-auto" style={{ fontFamily: 'Georgia, serif' }}>
            <p className="italic">
              Aquí va el texto explicativo sobre el Marco Cynefin. <br/><br/> 
              
              Este texto puede incluir información 
              sobre los diferentes dominios del marco: Simple, Complicado, Complejo y Caótico. 
              El contenido se puede personalizar según las necesidades específicas.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

