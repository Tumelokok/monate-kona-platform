"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import type { MenuItem } from '../lib/menu'

const MotionArticle = motion.article as any

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <MotionArticle
      layout
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 180, damping: 16 }}
      className="group rounded-[32px] border border-gray-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.05)] overflow-hidden"
    >
      {item.image && (
        <div
          className="relative h-72 bg-cover bg-center"
          style={{ backgroundImage: `url('${item.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-sm font-medium text-nearblack shadow-sm">
            <Heart className="h-4 w-4 text-pink-500" />
            Favorite
          </div>
        </div>
      )}

      <div className={item.image ? "p-6" : "p-6 pt-6"}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-nearblack">{item.name}</h3>
            {item.ingredients && <p className="mt-2 text-sm text-gray-500">{item.ingredients}</p>}
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-pink-500">{item.price}</p>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">{item.category}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-600">{item.description}</p>

        <button className="mt-6 w-full rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-600">
          Add to Cart
        </button>
      </div>
    </MotionArticle>
  )
}
