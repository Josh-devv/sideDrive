import { cn } from "@/lib/utils";
import type { CarSpec } from "./Cards";

interface SpecsTableProps {
  car: CarSpec;
  className?: string;
}

const specLabels: { key: keyof CarSpec; label: string }[] = [
  { key: "make", label: "Make" },
  { key: "model", label: "Model" },
  { key: "year", label: "Year" },
  { key: "bodyType", label: "Body Type" },
  { key: "fuelType", label: "Fuel Type" },
  { key: "engineSize", label: "Engine Size" },
  { key: "horsepower", label: "Horsepower" },
  { key: "torque", label: "Torque" },
  { key: "transmission", label: "Transmission" },
  { key: "drivetrain", label: "Drivetrain" },
  { key: "doors", label: "Doors" },
  { key: "seats", label: "Seats" },
  { key: "countryOfOrigin", label: "Country of Origin" },
];

export function SpecsTable({ car, className }: SpecsTableProps) {
  return (
    <div className={cn("rounded-xl gradient-card border border-border/50 overflow-hidden", className)}>
      <div className="p-4 border-b border-border/50">
        <h3 className="font-semibold text-lg">
          {car.year} {car.make} {car.model}
        </h3>
      </div>
      <div className="divide-y divide-border/50">
        {specLabels.map(({ key, label }) => {
          const value = car[key];
          if (value === undefined || value === null) return null;
          
          return (
            <div key={key} className="flex items-center justify-between px-4 py-3 hover:bg-secondary/30 transition-colors">
              <span className="text-muted-foreground text-sm">{label}</span>
              <span className="font-medium text-sm">
                {key === "horsepower" ? `${value} HP` : key === "torque" ? `${value} lb-ft` : String(value)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
