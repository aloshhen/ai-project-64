import React from 'react'
import { cn } from '../utils'

export default function CTA() {
  return (
    <section id="booking" className="py-24 bg-amber-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-100 mb-6">
            Забронируйте столик
          </h2>
          <p className="text-amber-200 mb-10">
            Мы ждем вас каждый день с 9:00 до 23:00. Бронирование доступно на весь день.
          </p>
          <a
            href="#"
            className="px-8 py-4 bg-amber-600 text-amber-900 rounded-2xl font-medium hover:bg-amber-500 transition-colors">
            Перейти к бронированию
          </a>
        </div>
      </div>
    </section>
  )
}