import React from 'react'
import { cn } from '../utils'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-amber-800/80 border-b border-amber-700/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-amber-100">☕ Amber</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">Главная</a>
          <a href="#menu" className="text-amber-100 hover:text-amber-300 transition-colors">Меню</a>
          <a href="#booking" className="text-amber-100 hover:text-amber-300 transition-colors">Бронирование</a>
        </div>
      </div>
    </nav>
  )
}