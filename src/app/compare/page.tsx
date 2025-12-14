'use client'

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { CarSpec } from "@/components/common/Cards"
import { sampleCars } from "../data/SampleCars"
import SelectedSlots from "@/components/compare/SelectedSlots"
import VehicleSelector from "@/components/compare/VehicleSelector"
import ComparisonSection from "@/components/compare/ComparisonSelector"

const ComparePage = () => {
  const [selectedCars, setSelectedCars] = useState<CarSpec[]>([])
  const [showSelector, setShowSelector] = useState(false)

  const toggleCar = (car: CarSpec) => {
    setSelectedCars((prev) =>
      prev.some((c) => c.id === car.id)
        ? prev.filter((c) => c.id !== car.id)
        : prev.length < 4
        ? [...prev, car]
        : prev
    )
  }

  const removeCar = (id: string) => {
    setSelectedCars((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className="min-h-screen gradient-hero">
      <Header />

      <main className="pt-24 pb-20 container mx-auto px-4">
        <header className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Compare <span className="text-gradient">Vehicles</span>
          </h1>
          <p className="text-muted-foreground">
            Select up to 4 vehicles and compare specifications.
          </p>
        </header>

        <SelectedSlots
          cars={selectedCars}
          onAdd={() => setShowSelector(true)}
          onRemove={removeCar}
        />

        <ComparisonSection
          cars={selectedCars}
          onBrowse={() => setShowSelector(true)}
        />

        {showSelector && (
          <VehicleSelector
            cars={sampleCars}
            selected={selectedCars}
            onSelect={toggleCar}
            onClose={() => setShowSelector(false)}
          />
        )}
      </main>
    </div>
  )
}

export default ComparePage
