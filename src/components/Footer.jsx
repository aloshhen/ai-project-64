import React from 'react'
import { cn } from '../utils'

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">☕ Amber</h3>
            <p className="text-amber-300">
              Кофейня с атмосферой уюта и бронированием столиков
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-amber-300 mb-2">ул. Кофейная, 123</p>
            <p className="text-amber-300 mb-2">+7 (495) 123-45-67</p>
            <p className="text-amber-300">coffee@amber.ru</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Соцсети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-amber-200 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-amber-300 hover:text-amber-200 transition-colors">
                Telegram
              </a>
              <a href="#" className="text-amber-300 hover:text-amber-200 transition-colors">
                VK
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-amber-800 text-center text-amber-400">
          © 2024 Кофейня Amber. Все права защищены.
        </div>
      </div>
    </footer>
  )
}