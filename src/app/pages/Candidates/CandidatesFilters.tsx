import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type FilterType = "status" | "hr" | "city"

interface CandidatesFiltersProps {
  statuses: string[]
  hrList: string[]
  cities: string[]
  selectedStatuses: string[]
  selectedHr: string[]
  selectedCities: string[]
  onToggleFilter: (type: FilterType, value: string) => void
}

export function CandidatesFilters({
  statuses,
  hrList,
  cities,
  selectedStatuses,
  selectedHr,
  selectedCities,
  onToggleFilter,
}: CandidatesFiltersProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          Быстрые фильтры <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-72">
        <DropdownMenuLabel>Статус</DropdownMenuLabel>
        {statuses.map((status) => (
          <DropdownMenuCheckboxItem
            key={status}
            checked={selectedStatuses.includes(status)}
            onCheckedChange={() => onToggleFilter("status", status)}
          >
            {status}
          </DropdownMenuCheckboxItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Ответственный HR</DropdownMenuLabel>
        {hrList.map((hr) => (
          <DropdownMenuCheckboxItem
            key={hr}
            checked={selectedHr.includes(hr)}
            onCheckedChange={() => onToggleFilter("hr", hr)}
          >
            {hr}
          </DropdownMenuCheckboxItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Город</DropdownMenuLabel>
        {cities.map((city) => (
          <DropdownMenuCheckboxItem
            key={city}
            checked={selectedCities.includes(city)}
            onCheckedChange={() => onToggleFilter("city", city)}
          >
            {city}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
