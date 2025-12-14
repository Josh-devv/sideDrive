import { cn } from "@/lib/utils";
import type { CarSpec } from "./Cards";
import { Check, X, Minus } from "lucide-react";

interface ComparisonGridProps {
  cars: CarSpec[];
  className?: string;
}

const comparisonSpecs: { key: keyof CarSpec; label: string; format?: (val: any) => string }[] = [
  { key: "bodyType", label: "Body Type" },
  { key: "fuelType", label: "Fuel Type" },
  { key: "engineSize", label: "Engine" },
  { key: "horsepower", label: "Horsepower", format: (v) => `${v} HP` },
  { key: "torque", label: "Torque", format: (v) => `${v} lb-ft` },
  { key: "transmission", label: "Transmission" },
  { key: "drivetrain", label: "Drivetrain" },
  { key: "doors", label: "Doors" },
  { key: "seats", label: "Seats" },
  { key: "countryOfOrigin", label: "Origin" },
];

export function ComparisonGrid({ cars, className }: ComparisonGridProps) {
  const getHighestValue = (key: keyof CarSpec) => {
    const values = cars.map((car) => car[key]).filter((v) => typeof v === "number") as number[];
    return Math.max(...values);
  };

  return (
    <div className={cn("overflow-x-auto", className)}>
      <div className="min-w-[600px]">
        {/* Header */}
        <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${cars.length}, 1fr)` }}>
          <div className="p-4" />
          {cars.map((car) => (
            <div
              key={car.id}
              className="p-4 rounded-t-xl gradient-card border border-border/50 border-b-0 text-center"
            >
              <p className="text-sm text-muted-foreground">{car.make}</p>
              <h3 className="font-bold text-lg">{car.model}</h3>
              <p className="text-primary font-semibold">{car.year}</p>
            </div>
          ))}
        </div>

        {/* Specs rows */}
        <div className="rounded-xl gradient-card border border-border/50 overflow-hidden">
          {comparisonSpecs.map(({ key, label, format }, index) => {
            const highestValue = getHighestValue(key);
            
            return (
              <div
                key={key}
                className={cn(
                  "grid gap-4 items-center hover:bg-secondary/30 transition-colors",
                  index !== comparisonSpecs.length - 1 && "border-b border-border/50"
                )}
                style={{ gridTemplateColumns: `200px repeat(${cars.length}, 1fr)` }}
              >
                <div className="p-4 font-medium text-muted-foreground text-sm">
                  {label}
                </div>
                {cars.map((car) => {
                  const value = car[key];
                  const isHighest = typeof value === "number" && value === highestValue && cars.length > 1;
                  
                  return (
                    <div
                      key={car.id}
                      className={cn(
                        "p-4 text-center font-medium",
                        isHighest && "text-primary"
                      )}
                    >
                      {value !== undefined && value !== null ? (
                        <span className={cn(isHighest && "relative")}>
                          {format ? format(value) : String(value)}
                          {isHighest && (
                            <span className="absolute -top-1 -right-4 text-xs text-primary">★</span>
                          )}
                        </span>
                      ) : (
                        <Minus className="h-4 w-4 mx-auto text-muted-foreground/50" />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
