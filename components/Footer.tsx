import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-500 rounded-full" aria-hidden />
          <div>
            <div className="font-heading font-semibold">Monate Kona</div>
            <div className="text-sm text-gray-500">Designed with ❤️</div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 text-sm text-gray-600">© {new Date().getFullYear()} Monate Kona. All rights reserved.</div>
      </div>
    </footer>
  )
}
