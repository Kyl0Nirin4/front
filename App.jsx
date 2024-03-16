import React, { useEffect, useRef } from "react"; // Import useRef
import gsap from "gsap";
import './App.css';
import 'boxicons';
import svgpapth from './svg';
import Spline from "@splinetool/react-spline";


const HeroTitle = () => {
  // Create refs
  const h1Ref = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Use refs in GSAP animations
    gsap.to(h1Ref.current, {
      duration: 2,
      opacity: 100,
      y: 50,
      ease: "power3.out",
    });

    gsap.from(paragraphRef.current, {
      duration: 1.5,
      opacity: 100,
      y: 20,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []); // Dependency array remains empty to run once on mount

  return (
    <>
      <div className="hero-container">
        <div className="hero">
          {/* Attach refs to elements */}
          <h1 ref={h1Ref}>L'avenir <br />est circulaire</h1>
          <p className="slog" ref={paragraphRef}>Recyclons transformons consommons</p>
            
        </div>
        <Spline scene="https://prod.spline.design/gDXlTrW0doDWb6St/scene.splinecode" className="spline-background" />  
      </div>
   <h2>Pourquoi trier ?</h2>
   <p className="info">La gestion des déchets est un défi majeur à Madagascar. <br/> Le développement de l'industrie du recyclage est essentiel pour <br /> réduire la pollution et protéger l'environnement..</p>
      <div className="miniBento">
          <div className="bentoItem1"><box-icon name='recycle'></box-icon></div>
          <div className="bentoItem2"><p className="textbento" > <span className="num">En 2020,</span><br />    Madagascar a généré 3,2 millions de tonnes de déchets solides urbains.</p></div>
          <div className="bentoItem3"><p className="textbento"> <span className="num">2%</span><br />Est le taux de recyclage a Madagascar</p></div>
          <div className="bentoItem4">  </div>

</div>

    <h3>Impactes</h3>
    <p className="textimp">Conservation des ressources naturelles et réduction de l'empreinte carbone.</p>


    </>
  );
}

export default HeroTitle;