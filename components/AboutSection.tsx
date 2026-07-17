"use client"
import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div as any

const story = [
  {
    title: 'A story of taste and community',
    description: 'Monate Kona was created to celebrate South African comfort food with a modern edge. Owner Palesa Ephodia Kok brings heritage recipes, fresh ingredients and a welcoming atmosphere to every table.',
    imagePosition: 'left'
  },
  {
    title: 'From tradition to bold presentation',
    description: 'Every recipe is reimagined for a premium dining experience—offering warmth, bold spice and a sense of home in each bite.',
    imagePosition: 'right'
  }
]

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 space-y-20">
        {story.map((item, index) => (
          <MotionDiv
            key={item.title}
            className={`grid gap-10 items-center ${item.imagePosition === 'left' ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-[0.9fr_1.1fr]'} `}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <div className="rounded-[36px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] bg-white min-h-[360px] flex items-end justify-start p-8 bg-[radial-gradient(circle_at_top_right,_rgba(230,0,141,0.15),_transparent_55%)]">
              <div className="w-full h-full rounded-[36px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=1200&q=80')]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-500">Meet Monate Kona</p>
              <h3 className="mt-4 text-3xl md:text-4xl font-heading font-extrabold text-nearblack">{item.title}</h3>
              <p className="mt-6 text-gray-600 text-lg leading-8">{item.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 bg-white p-6">
                  <h4 className="font-semibold text-nearblack">Family first</h4>
                  <p className="mt-3 text-gray-600">A warm atmosphere where every guest feels at home.</p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-6">
                  <h4 className="font-semibold text-nearblack">Crafted daily</h4>
                  <p className="mt-3 text-gray-600">Traditional recipes paired with modern plating and premium service.</p>
                </div>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}
