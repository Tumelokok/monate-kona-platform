"use client"
import React from 'react'
import { motion } from 'framer-motion'

const MotionButton = motion.button as any
const MotionDiv = motion.div as any

export default function Hero() {
  return (
    <section className="min-h-[72vh] flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-nearblack leading-tight">
            South African comfort food that slaps. Made fresh. Made proper.
          </h2>
          <p className="mt-6 text-lg text-gray-600">"If it ain't MONATE, it ain't nice." Real food, real prices, real vibe from the heart of Tembisa.</p>
          <div className="mt-10 flex gap-4">
            <MotionButton whileHover={{ scale: 1.03 }} className="px-8 py-3 bg-pink-500 text-white rounded-full font-semibold shadow-lg">Order Now</MotionButton>
            <MotionButton whileHover={{ scale: 1.03 }} className="px-8 py-3 bg-transparent border border-gray-200 rounded-full font-medium">View Menu</MotionButton>
          </div>
        </MotionDiv>

        <MotionDiv
          className="w-full h-72 md:h-96 rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/STAFF BACKGROUND .png"
            alt="Monate Kona team preparing dishes"
            className="w-full h-full object-cover"
          />
        </MotionDiv>
      </div>
    </section>
  )
}
