"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const MotionDiv = motion.div as any

const galleryImages = [
  {
    id: 1,
    src: '/images/ICE CREAM.png',
    alt: 'Monate Kona ice cream dessert'
  },
  {
    id: 2,
    src: '/images/PHOTO-2026-03-18-20-38-05 2.jpg',
    alt: 'Interior seating at Monate Kona'
  },
  {
    id: 3,
    src: '/images/PHOTO-2026-03-18-20-38-09 3.jpg',
    alt: 'Monate Kona kitchen in action'
  },
  {
    id: 4,
    src: '/images/PHOTO-2026-03-18-20-38-09 6.jpg',
    alt: 'Monate Kona chef plating a dish'
  },
  {
    id: 5,
    src: '/images/Screenshot 2026-07-18 at 00.14.39.png',
    alt: 'Monate Kona dining experience'
  },
  {
    id: 6,
    src: '/images/Screenshot 2026-07-18 at 00.17.11.png',
    alt: 'Monate Kona kitchen staff preparing food'
  }
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <main className="min-h-screen bg-white text-nearblack">
      <Navbar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-500">Gallery</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-heading font-extrabold text-nearblack">Every dish tells a story.</h1>
            <p className="mt-6 text-lg text-gray-600">Premium photography showcasing the premium quality, vibrant colours and authentic flavours of Monate Kona.</p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px]">
            {galleryImages.map((image, idx) => (
              <MotionDiv
                key={image.id}
                layoutId={`gallery-${image.id}`}
                onClick={() => setSelectedImage(image)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative overflow-hidden rounded-3xl cursor-pointer bg-cover bg-center group ${
                  idx % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ backgroundImage: `url('${image.src}')` }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="rounded-full bg-white px-6 py-3 font-semibold text-nearblack">View</button>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <MotionDiv
              layoutId={`gallery-${selectedImage.id}`}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto" />
            </MotionDiv>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 rounded-full bg-white/95 p-2 hover:bg-white transition"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-nearblack" />
            </button>
          </MotionDiv>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
