import React from 'react'
import { cn } from '../utils'

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-stone-800 to-amber-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-bold text-amber-100 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            ☕ Кофейня Amber
          </h1>
          <p className="mt-6 text-xl text-amber-200">
            Настоящий кофе, ароматный десерт и уютная атмосфера. Забронируйте столик и наслаждайтесь каждым глотком.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="px-8 py-4 bg-amber-600 text-amber-900 rounded-2xl font-medium hover:bg-amber-500 transition-colors">
              Забронировать столик
            </a>
            <a
              href="#menu"
              className="px-8 py-4 border-2 border-amber-600 text-amber-600 rounded-2xl font-medium hover:bg-amber-600/10 transition-colors">
              Посмотреть меню
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}