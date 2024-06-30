import React from 'react'
import { experienceData } from '../constant/userData'
import ExpItem from './ExpItem'

const Experience = () => {
  return (
    <section className="relative mb-20 mt-20">
      <div className="container mx-auto max-w-screen-lg px-5">
        <h2 className="mb-8 text-center text-3xl font-bold transition-all">
          Experience & Training
        </h2>
        <div>
          {experienceData
            .sort((a, b) => a.orderId - b.orderId)
            .map((ex, index) => (
              <ExpItem
                key={index}
                image={ex.image}
                position={ex.position}
                place={ex.place}
                description={ex.description}
                startDate={ex.startDate}
                endDate={ex.endDate}
                active={index === 0}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Experience