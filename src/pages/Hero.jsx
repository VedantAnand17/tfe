import React from 'react'
import Navbar from '../components/Navbar'
import HeroText from '../components/HeroText'

export default function Hero() {
  return (
    <div className='max-h-screen relative'>
        <img src="https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='absolute h-screen object-cover w-full z-0'/>
        <Navbar className='absolute top-0 w-full z-10' />
        <HeroText />
    </div>
  )
}