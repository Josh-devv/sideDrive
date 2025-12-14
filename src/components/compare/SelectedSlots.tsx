import { X, Plus } from "lucide-react"
import { CarSpec } from "../common/Cards"
import { cn } from "@/lib/utils"

interface Props {
  cars: CarSpec[]
  onAdd: () => void
  onRemove: (id: string) => void
}

const SelectedSlots = ({ cars, onAdd, onRemove }: Props) => {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="font-semibold">Selected Vehicles</h2>
        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-sm">
          {cars.length}/4
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[0, 1, 2, 3].map((slot) => {
          const car = cars[slot]

          return (
            <div
              key={slot}
              onClick={() => !car && onAdd()}
              className={cn(
                "relative rounded-xl border-2 border-dashed p-4 cursor-pointer",
                car ? "border-primary/50" : "hover:border-primary/30"
              )}
            >
              {car ? (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onRemove(car.id)
                    }}
                    className="absolute top-2 right-2"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <p className="text-sm text-muted-foreground">{car.make}</p>
                  <p className="font-semibold">{car.model}</p>
                  <p className="text-primary text-sm">{car.year}</p>
                </>
              ) : (
                <div className="flex flex-col items-center text-muted-foreground">
                  <Plus className="h-6 w-6 mb-2" />
                  <span>Add vehicle</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SelectedSlots
