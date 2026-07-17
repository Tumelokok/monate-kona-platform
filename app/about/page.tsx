"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const MotionDiv = motion.div as any

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-nearblack">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-500 font-semibold">Our Story</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-heading font-extrabold text-nearblack leading-tight">From passion to a plate...</h1>
            <p className="mt-6 text-lg text-gray-600">Monate Kona is more than just food. It's love, hustle, and the taste of home served fresh every single day in the heart of Tembisa.</p>
          </div>
        </div>
      </section>

      {/* Founder Story - Palesa */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <div className="rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] h-96">
              <img
                src="/images/PHOTO-2026-03-18-20-38-09 4.jpg"
                alt="Palesa Ephodia Kok, founder of Monate Kona"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-500 font-semibold">Meet The Chef</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-heading font-extrabold text-nearblack">Palesa Ephodia Kok</h2>
              <p className="mt-6 text-lg text-gray-700 leading-8">
                "Ayoba," as some know her, grew up watching her grandmother cook in Tembisa. Food was never just food—it was medicine, it was love, it was how you showed someone they belonged. Every dish carried stories. Every recipe carried souls.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-8">
                Palesa's passion for cooking wasn't just about filling stomachs. It was about feeding the community. She wanted to bring the flavours, the warmth, and the spirit of South African comfort food to a place where real people live, hustle, and deserve the best.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-8">
                In March 2026, she took the leap. Monate Kona was born in Rabie Ridge, Tembisa—a kasi with big dreams and even bigger appetites. The name says it all: "If it ain't MONATE, it ain't nice."
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-nearblack mb-12">How It Started</h2>
            <div className="space-y-8">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-pink-500 mb-3">The Kasi Spirit</h3>
                <p className="text-lg text-gray-700 leading-8">
                  Tembisa, Rabie Ridge—this is where dreams are real and food even more so. Palesa saw a gap. She saw people chasing greatness on empty stomachs. She saw Mondays that needed mogodu, Fridays that needed wings, and every single day that needed a reason to celebrate being alive.
                </p>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold text-pink-500 mb-3">Founded March 2026</h3>
                <p className="text-lg text-gray-700 leading-8">
                  With nothing but passion, a recipe book passed down from her ancestors, and a dream bigger than the kitchen could hold, Palesa opened the doors to Monate Kona. No fancy stuff. Just real food, real prices, and real flavour that speaks to the soul.
                </p>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-pink-500 mb-3">The Vibe</h3>
                <p className="text-lg text-gray-700 leading-8">
                  Every plate that leaves the kitchen carries intention. Whether it's a R20 kota or a R480 seafood boil, we treat it like it's for the ones we love most. We're not just serving food—we're serving hope, community, and the taste of home.
                </p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real Food",
                description: "No shortcuts. No freezer magic. Fresh ingredients, cooked with love, every single day. That's the Monate Kona way."
              },
              {
                title: "Real Prices",
                description: "Premium quality doesn't have to break the bank. We believe everyone in the kasi deserves to eat good. Period."
              },
              {
                title: "Real Community",
                description: "We're not just a spot—we're your spot. Your birthday? Your hustle wins? Your Tuesday blues? We got you."
              }
            ].map((item, idx) => (
              <MotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-[32px] border border-gray-200 bg-gradient-to-br from-pink-50 to-white p-8 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-nearblack">{item.title}</h3>
                <p className="mt-4 text-gray-700 text-lg">{item.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
