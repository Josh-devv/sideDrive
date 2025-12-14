import { GitCompare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComparisonGrid } from "../common/ComparisonGrid"
import { CarSpec } from "../common/Cards"

interface Props {
  cars: CarSpec[]
  onBrowse: () => void
}

const ComparisonSection = ({ cars, onBrowse }: Props) => {
  if (cars.length < 2) {
    return (
      <div className="text-center py-16 rounded-xl gradient-card">
        <GitCompare className="h-14 w-14 mx-auto mb-4 opacity-30" />
        <h3 className="text-xl font-semibold mb-2">
          Select at least 2 vehicles
        </h3>
        <Button variant="secondary" onClick={onBrowse}>
          Browse Vehicles
        </Button>
      </div>
    )
  }

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <GitCompare className="h-5 w-5 text-primary" />
        <h2 className="font-semibold">Comparison</h2>
      </div>

      <ComparisonGrid cars={cars} />
    </section>
  )
}

export default ComparisonSection
