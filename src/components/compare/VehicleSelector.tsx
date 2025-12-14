import { Button } from "@/components/ui/button"
import { CarSpec, CarCard } from "../common/Cards"

interface Props {
  cars: CarSpec[]
  selected: CarSpec[]
  onSelect: (car: CarSpec) => void
  onClose: () => void
}

const VehicleSelector = ({ cars, selected, onSelect, onClose }: Props) => {
  return (
    <section className="mt-12">
      <div className="flex justify-between mb-6">
        <h2 className="font-semibold">Available Vehicles</h2>
        <Button size="sm" variant="ghost" onClick={onClose}>
          Hide
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            selected={selected.some((c) => c.id === car.id)}
            onClick={() => onSelect(car)}
          />
        ))}
      </div>
    </section>
  )
}

export default VehicleSelector
