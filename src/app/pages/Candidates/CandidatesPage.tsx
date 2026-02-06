import { useMemo, useState } from "react"

import { CandidatesTable } from "@/app/pages/Candidates/CandidatesTable"
import { CandidatesToolbar } from "@/app/pages/Candidates/CandidatesToolbar"
import { CANDIDATE_STATUSES, CITY_LIST, HR_LIST, candidatesMock } from "@/data/candidates.mock"

const includesText = (value: string, query: string) =>
  value.toLowerCase().includes(query.trim().toLowerCase())

const toggleValue = (list: string[], value: string) =>
  list.includes(value) ? list.filter((item) => item !== value) : [...list, value]

export function CandidatesPage() {
  const [query, setQuery] = useState("")
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [selectedHr, setSelectedHr] = useState<string[]>([])
  const [selectedCities, setSelectedCities] = useState<string[]>([])

  const filteredCandidates = useMemo(() => {
    return candidatesMock.filter((candidate) => {
      const matchesQuery =
        query.length === 0 ||
        includesText(candidate.fullName, query) ||
        includesText(candidate.phone, query) ||
        includesText(candidate.vacancyTitle, query) ||
        includesText(candidate.city, query)

      const matchesStatus =
        selectedStatuses.length === 0 || selectedStatuses.includes(candidate.status)
      const matchesHr = selectedHr.length === 0 || selectedHr.includes(candidate.hrName)
      const matchesCity = selectedCities.length === 0 || selectedCities.includes(candidate.city)

      return matchesQuery && matchesStatus && matchesHr && matchesCity
    })
  }, [query, selectedCities, selectedHr, selectedStatuses])

  const handleToggleFilter = (type: "status" | "hr" | "city", value: string) => {
    if (type === "status") {
      setSelectedStatuses((prev) => toggleValue(prev, value))
      return
    }

    if (type === "hr") {
      setSelectedHr((prev) => toggleValue(prev, value))
      return
    }

    setSelectedCities((prev) => toggleValue(prev, value))
  }

  const handleReset = () => {
    setQuery("")
    setSelectedStatuses([])
    setSelectedHr([])
    setSelectedCities([])
  }

  return (
    <section className="space-y-4">
      <CandidatesToolbar
        query={query}
        onQueryChange={setQuery}
        shownCount={filteredCandidates.length}
        statuses={CANDIDATE_STATUSES}
        hrList={HR_LIST}
        cities={CITY_LIST}
        selectedStatuses={selectedStatuses}
        selectedHr={selectedHr}
        selectedCities={selectedCities}
        onToggleFilter={handleToggleFilter}
        onReset={handleReset}
      />

      <CandidatesTable
        candidates={filteredCandidates}
        onRowClick={(candidate) => console.log("candidate row click", candidate.id)}
      />
    </section>
  )
}
