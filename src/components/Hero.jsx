import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero', { opacity:1, delay:2, y:10 })
  }, [])

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  
  const handleVideoSrcSet= () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])
  
  
  return (
    <section className='w-full flex items-center flex-col nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-col flex-center'>
        <p id='hero' className='hero-title'>iPhone 15 Pro</p>

        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc} >
            <source src={videoSrc} type='video/mp4'/>
          </video>
        </div>
      </div>

      

      <div>
        <button>Buy</button>
        <p>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
