import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/Resume.pdf'
import hero from './Data/hero.json'
import Typed from "typed.js";



function Home() {
  const typedRef = useRef(null)
  useEffect(() => {

    const options = {
      strings:[
        "Welcome to my profile", 
        "My Name is Mohd Rizwan", 
        "I'm Full Stack Developer",
      ],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(typedRef.current , options)

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <>
    <div className="container home" id='home'>
        <div className="left"
        data-aos="fade-up-right"
        data-aos-duration="1000">
            <h1 ref={typedRef}>Mohd Rizwan</h1>
            <a href={pdf} download="Resume.pdf" className="btn btn-outline my3" >Download Resume</a>
        </div>
        <div className="right">
        <div className="img"
        data-aos="fade-up-left"
        data-aos-duration="1000">
        <img src={`/image/${hero.imgSrc}`} alt="hero" />
        </div>
        </div>

    </div>
    </>
  )
}

export default Home
