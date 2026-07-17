"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Music, MessageCircle } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const MotionDiv = motion.div as any

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-nearblack">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-500">Get in touch</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-heading font-extrabold text-nearblack">We'd love to hear from you.</h1>
            <p className="mt-6 text-lg text-gray-600">Visit us, call, or connect on social. Monate Kona is here to serve you with warmth and premium food.</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-3xl bg-pink-50 text-pink-600 mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <a href="tel:0680422285" className="mt-2 text-lg text-pink-600 hover:text-pink-700">
                  068 042 2285
                </a>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-3xl bg-pink-50 text-pink-600 mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">WhatsApp</h3>
                <a href="https://wa.me/27680422285" target="_blank" rel="noopener noreferrer" className="mt-2 text-lg text-pink-600 hover:text-pink-700">
                  Message us
                </a>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-3xl bg-pink-50 text-pink-600 mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Hours</h3>
                <div className="mt-3 space-y-1 text-gray-600">
                  <p>Monday–Friday: 11 AM – 10 PM</p>
                  <p>Saturday: 12 PM – 11 PM</p>
                  <p>Sunday: 12 PM – 9 PM</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow us</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/monatekonaza/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-pink-600 hover:bg-pink-100 transition">
                    <Instagram className="w-5 h-5" /> Instagram
                  </a>
                  <a href="https://www.tiktok.com/@monatekonaza" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-purple-600 hover:bg-purple-100 transition">
                    <Music className="w-5 h-5" /> TikTok
                  </a>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] min-h-[500px] bg-white"
            >
              <div className="h-72 w-full overflow-hidden">
                <img
                  src="/images/Screenshot 2026-07-18 at 00.16.46.png"
                  alt="Monate Kona dining area"
                  className="h-full w-full object-cover"
                />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.3245123456783!2d24.627!3d25.927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee47bffe5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sMonate%20Kona!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
