"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Trash2, Plus, Minus } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const MotionDiv = motion.div as any

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export default function OrderPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'comfort-1',
      name: 'Spicy Bobotie Bowl',
      price: 129,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'wrap-1',
      name: 'Chakalaka Chicken Wrap',
      price: 89,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80'
    }
  ])
  const [promoCode, setPromoCode] = useState('')

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = subtotal > 0 ? 30 : 0
  const total = subtotal + deliveryFee

  return (
    <main className="min-h-screen bg-gray-50 text-nearblack">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold">Your order</h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <MotionDiv
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="mt-1 text-pink-600 font-medium">R{item.price}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 hover:border-pink-300"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-6 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 hover:border-pink-300"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </MotionDiv>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center text-gray-500">
                  Your cart is empty. Add items from the menu to get started.
                </div>
              )}

              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Promo code</span>
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-pink-500"
                    />
                    <button className="rounded-lg bg-pink-500 px-6 py-2 font-semibold text-white hover:bg-pink-600">
                      Apply
                    </button>
                  </div>
                </label>
              </div>
            </div>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 h-fit sticky top-24"
            >
              <h3 className="text-lg font-semibold">Order summary</h3>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>R{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Delivery fee</span>
                  <span>R{deliveryFee}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-pink-600">R{total}</span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-full bg-pink-500 px-6 py-3 font-semibold text-white hover:bg-pink-600 transition">
                Proceed to checkout
              </button>

              <p className="mt-4 text-xs text-gray-500 text-center">
                Payment and delivery options available at checkout.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
