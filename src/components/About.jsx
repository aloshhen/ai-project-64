import React from 'react'
import { cn } from '../utils'
import { Clock, Users, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 bg-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-amber-900 mb-16 text-center">Как это работает</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-200/50 shadow-lg">
            <div className="w-16 h-16 bg-amber-200 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Выберите время</h3>
            <p className="text-amber-700">
              Зайдите на страницу бронирования и выберите удобное время и количество гостей.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-200/50 shadow-lg">
            <div className="w-16 h-16 bg-amber-200 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Подтвердите бронь</n
            <p className="text-amber-700">
              Мы отправим подтверждение на ваш email и в Telegram. Приходите за 15 минут до назначенного времени.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-200/50 shadow-lg">
            <div className="w-16 h-16 bg-amber-200 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Наслаждайтесь</h3>
            <p className="text-amber-700">
              Получите бесплатный кофе при заезде и наслаждайтесь уютной атмосферой.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}