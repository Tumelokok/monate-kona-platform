"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Leaf, DollarSign } from 'lucide-react'

const MotionArticle = motion.article as any

const features = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'Seasonal South African produce and premium flavours sourced daily for every plate.'
  },
  {
    icon: Sparkles,
    title: 'Made Daily',
    description: 'From slow-cooked stews to crispy wraps, every dish is ready fresh on demand.'
  },
  {
    icon: DollarSign,
    title: 'Affordable Luxury',
    description: 'Premium dining experience with thoughtful prices for every craving.'
  }
]

export default function FeatureSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl text-center mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-pink-500">What makes Monate Kona special</p>
          <h3 className="mt-4 text-4xl md:text-5xl font-heading font-extrabold text-nearblack">Premium comfort food with a South African soul.</h3>
          <p className="mt-4 text-gray-600 text-lg">Every dish is designed to be rich, balanced and inviting—crafted for guests who want warmth, flavour and an elevated dining experience.</p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <MotionArticle
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-[32px] border border-gray-200 bg-white p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-pink-50 text-pink-600 mb-6 shadow-sm">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h4 className="text-2xl font-semibold text-nearblack">{feature.title}</h4>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </MotionArticle>
            )
          })}
        </div>
      </div>
    </section>
  )
}
