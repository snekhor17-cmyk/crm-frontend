import { X } from "lucide-react"

import { CandidatesFilters } from "@/app/pages/Candidates/CandidatesFilters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type FilterType = "status" | "hr" | "city"

interface FilterChip {
  type: FilterType
  label: string
  value: string
}

interface CandidatesToolbarProps {
  query: string
  onQueryChange: (value: string) => void
  shownCount: number
  statuses: string[]
  hrList: string[]
  cities: string[]
  selectedStatuses: string[]
  selectedHr: string[]
  selectedCities: string[]
  onToggleFilter: (type: FilterType, value: string) => void
  onReset: () => void
}

export function CandidatesToolbar({
  query,
  onQueryChange,
  shownCount,
  statuses,
  hrList,
  cities,
  selectedStatuses,
  selectedHr,
  selectedCities,
  onToggleFilter,
  onReset,
}: CandidatesToolbarProps) {
  const chips: FilterChip[] = [
    ...selectedStatuses.map((value) => ({ type: "status" as const, label: `Статус: ${value}`, value })),
    ...selectedHr.map((value) => ({ type: "hr" as const, label: `HR: ${value}`, value })),
    ...selectedCities.map((value) => ({ type: "city" as const, label: `Город: ${value}`, value })),
  ]

  return (
    <div className="space-y-3 rounded-lg border bg-background p-3">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-xl font-semibold">Кандидаты</h1>
          <p className="text-sm text-muted-foreground">Операционный список кандидатов по открытым вакансиям.</p>
        </div>
        <Input
          placeholder="Поиск кандидата"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          className="w-full lg:max-w-sm"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <CandidatesFilters
          statuses={statuses}
          hrList={hrList}
          cities={cities}
          selectedStatuses={selectedStatuses}
          selectedHr={selectedHr}
          selectedCities={selectedCities}
          onToggleFilter={onToggleFilter}
        />
        <Button variant="outline" size="sm">
          Отчёты
        </Button>
        <span className="rounded-md border px-2 py-1 text-sm text-muted-foreground">Показано {shownCount}</span>
        <Button variant="ghost" size="sm" onClick={onReset}>
          Сбросить
        </Button>
      </div>

      {chips.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <button
              key={`${chip.type}-${chip.value}`}
              type="button"
              onClick={() => onToggleFilter(chip.type, chip.value)}
              className="inline-flex items-center gap-1 rounded-full border bg-muted px-3 py-1 text-xs"
            >
              {chip.label}
              <X className="size-3" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
