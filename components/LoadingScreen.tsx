"use client"
import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div as any

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <MotionDiv
          className="w-24 h-24 rounded-full bg-pink-500 shadow-2xl flex items-center justify-center"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />

        <div className="w-48">
          <MotionDiv
            className="h-1 bg-pink-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </div>
      </MotionDiv>
    </div>
  )
}
