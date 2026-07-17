"use client"
import React, { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'
import Navbar from './Navbar'
import Hero from './Hero'
import FeatureSection from './FeatureSection'
import AboutSection from './AboutSection'
import Footer from './Footer'

export default function HomeClient() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      <div className={`min-h-screen ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <Hero />
        <FeatureSection />
        <AboutSection />
        <Footer />
      </div>
    </>
  )
}
