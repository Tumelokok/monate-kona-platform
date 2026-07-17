"use client"
import React from 'react'

interface CategoryTabsProps {
  categories: string[]
  activeCategory: string
  onChange: (category: string) => void
}

export default function CategoryTabs({ categories, activeCategory, onChange }: CategoryTabsProps) {
  return (
    <div className="overflow-x-auto py-4">
      <div className="inline-flex gap-3 min-w-full md:min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-full px-5 py-3 text-sm font-medium transition ${
              activeCategory === category
                ? 'bg-pink-500 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-pink-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
