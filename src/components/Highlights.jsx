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
      <div className='flex max-lg:flex-col'>
        <p id='title' className='section-heading max-lg:text-3xl'>Get the highlights.</p>
        <div className='flex flex-1 gap-5 items-end justify-end w-full max-lg:flex-col max-lg:items-start'>
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

      <div className='pt-10'>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights
