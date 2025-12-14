import { Car, Fuel, Gauge, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarSpec {
  id: string;
  make: string;
  model: string;
  year: number;
  bodyType?: string;
  fuelType?: string;
  engineSize?: string;
  horsepower?: number;
  torque?: number;
  transmission?: string;
  drivetrain?: string;
  countryOfOrigin?: string;
  doors?: number;
  seats?: number;
}

interface CarCardProps {
  car: CarSpec;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}

export function CarCard({ car, onClick, selected, className }: CarCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-xl gradient-card border border-border/50 p-6 transition-all duration-300 card-hover cursor-pointer",
        selected && "border-primary glow-primary",
        className
      )}
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-10 blur-3xl" />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground font-medium">{car.make}</p>
            <h3 className="text-xl font-bold tracking-tight">{car.model}</h3>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Calendar className="h-3.5 w-3.5" />
            {car.year}
          </div>
        </div>

        {/* Car icon placeholder */}
        <div className="flex items-center justify-center h-32 mb-6 rounded-lg bg-secondary/50">
          <Car className="h-16 w-16 text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-300" />
        </div>

        {/* Quick specs */}
        <div className="grid grid-cols-2 gap-3">
          {car.horsepower && (
            <div className="flex items-center gap-2 text-sm">
              <Gauge className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{car.horsepower} HP</span>
            </div>
          )}
          {car.fuelType && (
            <div className="flex items-center gap-2 text-sm">
              <Fuel className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{car.fuelType}</span>
            </div>
          )}
          {car.countryOfOrigin && (
            <div className="flex items-center gap-2 text-sm col-span-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{car.countryOfOrigin}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
