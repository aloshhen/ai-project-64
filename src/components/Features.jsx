import React from 'react'
import { cn } from '../utils'
import { Coffee, UtensilsCrossed, Sparkles, Leaf } from 'lucide-react'

export default function Features() {
  return (
    <section id="menu" className="py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-amber-900 mb-16 text-center">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-200/50 shadow-lg hover:shadow-amber-500/10 transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Coffee className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Свежий кофе</h3>
            <p className="text-amber-700">
              Мы используем только арабику, свежеобжаренную вручную. Каждый напиток готовится с любовью.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-200/50 shadow-lg hover:shadow-amber-500/10 transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <UtensilsCrossed className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Десерты</h3>
            <p className="text-amber-700">
              Вафли, тарталетки и кексы от шеф-пека. Всё домашнее, без консервантов и искусственных добавок.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-200/50 shadow-lg hover:shadow-amber-500/10 transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Уютная атмосфера</h3>
            <p className="text-amber-700">
              Интерьер в стиле лофт с деревянными деталями. Идеальное место для встреч с друзьями или работы.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}