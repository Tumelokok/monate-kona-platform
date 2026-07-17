"use client"
import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MenuCard from '../../components/MenuCard'
import { categories, menuItems } from '../../lib/menu'

const MotionDiv = motion.div as any

const sortOptions = ['Popular', 'Price: Low to High', 'Price: High to Low', 'Newest']

// Color shades for each category (from light to dark)
const colorShades = [
  'bg-pink-50 border-pink-200',
  'bg-pink-100 border-pink-300',
  'bg-pink-200 border-pink-400',
  'bg-rose-100 border-rose-300',
  'bg-rose-200 border-rose-400',
  'bg-fuchsia-100 border-fuchsia-300',
  'bg-fuchsia-200 border-fuchsia-400',
  'bg-purple-100 border-purple-300',
  'bg-purple-200 border-purple-400',
  'bg-violet-100 border-violet-300',
  'bg-violet-200 border-violet-400',
  'bg-indigo-100 border-indigo-300',
  'bg-indigo-200 border-indigo-400',
  'bg-blue-100 border-blue-300'
]

const getCategoryColor = (index: number) => colorShades[index % colorShades.length]

const getCategoryTitle = (category: string) => colorShades[categories.indexOf(category) % colorShades.length]

export default function MenuPage() {
  const [search, setSearch] = useState('')
  const [sortOption, setSortOption] = useState(sortOptions[0])

  // Group items by category
  const groupedItems = useMemo(() => {
    const grouped = new Map<string, typeof menuItems>()
    
    categories.forEach((cat) => {
      grouped.set(cat, [])
    })

    menuItems.forEach((item) => {
      if (grouped.has(item.category)) {
        grouped.get(item.category)!.push(item)
      }
    })

    return grouped
  }, [])

  // Filter and sort all items based on search and sort option
  const filteredAndGroupedItems = useMemo(() => {
    const result = new Map<string, typeof menuItems>()

    groupedItems.forEach((items, category) => {
      let filtered = items.filter((item) => {
        const searchTerm = search.toLowerCase()
        return [item.name, item.description, item.ingredients || ''].some(
          (value) => (value || '').toLowerCase().includes(searchTerm)
        )
      })

      if (sortOption === 'Price: Low to High') {
        filtered = filtered.slice().sort((a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1)))
      } else if (sortOption === 'Price: High to Low') {
        filtered = filtered.slice().sort((a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1)))
      } else if (sortOption === 'Newest') {
        filtered = filtered.slice().reverse()
      }

      if (filtered.length > 0) {
        result.set(category, filtered)
      }
    })

    return result
  }, [groupedItems, search, sortOption])

  return (
    <main className="min-h-screen bg-gray-50 text-nearblack">
      <Navbar />

      <section className="relative overflow-hidden bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-500 font-semibold">Monate Kona Menu</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-heading font-extrabold text-nearblack">Proper food. Real prices. Kasi vibes.</h1>
            <p className="mt-6 text-lg text-gray-600">From kotas to seafood boil. From R20 to R480. Everything you craving is here, served with love straight from Rabie Ridge.</p>
          </div>

          {/* Search and Sort Controls */}
          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <label className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 shadow-sm flex-1">
              <span className="text-sm text-gray-500">Search</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search dishes, ingredients..."
                className="flex-1 bg-transparent outline-none text-sm text-nearblack placeholder:text-gray-400"
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

          {/* Category Sections */}
          <div className="mt-16 space-y-20">
            {Array.from(filteredAndGroupedItems.entries()).map(([category, items], catIndex) => (
              <MotionDiv
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: catIndex * 0.05 }}
                className={`rounded-[40px] border-2 p-10 ${getCategoryColor(catIndex)}`}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-nearblack mb-2">{category}</h2>
                <p className="text-gray-600 mb-8">
                  {items.length} delicious {category.toLowerCase()} option{items.length !== 1 ? 's' : ''} available
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence>
                    {items.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <MenuCard item={item} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </MotionDiv>
            ))}

            {filteredAndGroupedItems.size === 0 && (
              <MotionDiv
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[32px] border border-dashed border-gray-300 bg-white p-12 text-center text-gray-500"
              >
                No items match your search. Try another keyword!
              </MotionDiv>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
