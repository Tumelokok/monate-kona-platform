"use client"
import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CategoryTabs from '../../components/CategoryTabs'
import MenuCard from '../../components/MenuCard'
import { categories, menuItems } from '../../lib/menu'

const MotionDiv = motion.div as any

const sortOptions = ['Popular', 'Price: Low to High', 'Price: High to Low', 'Newest']

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Comfort Food')
  const [search, setSearch] = useState('')
  const [sortOption, setSortOption] = useState(sortOptions[0])

  const filteredItems = useMemo(() => {
    const filtered = menuItems.filter((item) => {
      const categoryMatch = item.category === activeCategory
      const searchTerm = search.toLowerCase()
      const searchMatch = [item.name, item.description, item.ingredients].some((value) => value.toLowerCase().includes(searchTerm))
      return categoryMatch && searchMatch
    })

    if (sortOption === 'Price: Low to High') {
      return filtered.slice().sort((a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1)))
    }
    if (sortOption === 'Price: High to Low') {
      return filtered.slice().sort((a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1)))
    }
    if (sortOption === 'Newest') {
      return filtered.slice().reverse()
    }
    return filtered
  }, [activeCategory, search, sortOption])

  return (
    <main className="min-h-screen bg-gray-50 text-nearblack">
      <Navbar />

      <section className="relative overflow-hidden bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-500">Monate Kona menu</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-heading font-extrabold text-nearblack">Discover our South African comfort food menu.</h1>
            <p className="mt-6 text-lg text-gray-600">Browse curated categories, instantly filter the menu, and choose the perfect dish for every craving.</p>
          </div>

          <div className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <CategoryTabs categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <label className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <span className="text-sm text-gray-500">Search</span>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search dishes, ingredients..."
                  className="w-72 bg-transparent outline-none text-sm text-nearblack placeholder:text-gray-400"
                  aria-label="Search menu items"
                />
              </label>
              <div className="rounded-full border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <select
                  value={sortOption}
                  onChange={(event) => setSortOption(event.target.value)}
                  className="bg-transparent text-sm outline-none text-nearblack"
                  aria-label="Sort menu items"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                  >
                    <MenuCard item={item} />
                  </motion.div>
                ))
              ) : (
                <MotionDiv
                  key="empty"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[32px] border border-dashed border-gray-300 bg-white p-12 text-center text-gray-500"
                >
                  No items match your search. Try another keyword or category.
                </MotionDiv>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
