import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity:1, y:0 })
    gsap.to('.link', {opacity: 1, y: 0, duration: 1, stagger: 0.25})
  }, [])
  return (
    <section className='bg-zinc w-screen overflow-hidden common-padding h-full'>
      <div className='flex'>
        <p id='title' className='section-heading'>Get the highlights.</p>
        <div className='flex flex-1 gap-5 items-end justify-end w-full'>
          <p className='link gap-3'>
            Watch the film
            <img src={watchImg} alt="watch" />
          </p>
          <p className='link gap-3'>
            Watch the event
            <img src={rightImg} alt="right" />
          </p>
        </div>
      </div>

      <div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights
