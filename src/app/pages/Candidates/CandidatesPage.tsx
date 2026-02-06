import { useMemo, useState } from "react"

import { CandidateOverlay } from "@/app/pages/Candidates/CandidateOverlay"
import { CandidatesTable } from "@/app/pages/Candidates/CandidatesTable"
import { CandidatesToolbar } from "@/app/pages/Candidates/CandidatesToolbar"
import { CANDIDATE_STATUSES, CITY_LIST, HR_LIST, candidatesMock } from "@/data/candidates.mock"
import type { Candidate, CandidateStatus, InterviewState } from "@/types/candidate"

const includesText = (value: string, query: string) =>
  value.toLowerCase().includes(query.trim().toLowerCase())

const toggleValue = (list: string[], value: string) =>
  list.includes(value) ? list.filter((item) => item !== value) : [...list, value]

const getNowLabel = () =>
  new Date().toLocaleString("ru-RU", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })

const interviewActions: Record<"cancel" | "confirm" | "reschedule" | "complete", { status: CandidateStatus; interviewState: InterviewState; message: string }> = {
  cancel: {
    status: "На паузе",
    interviewState: "cancelled",
    message: "Собеседование отменено.",
  },
  confirm: {
    status: "Назначено собеседование",
    interviewState: "confirmed",
    message: "Собеседование подтверждено.",
  },
  reschedule: {
    status: "Назначено собеседование",
    interviewState: "rescheduled",
    message: "Собеседование перенесено.",
  },
  complete: {
    status: "Собеседование завершено",
    interviewState: "completed",
    message: "Собеседование отмечено как состоявшееся.",
  },
}

export function CandidatesPage() {
  const [query, setQuery] = useState("")
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [selectedHr, setSelectedHr] = useState<string[]>([])
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [candidates, setCandidates] = useState(candidatesMock)
  const [activeCandidateId, setActiveCandidateId] = useState<number | null>(null)

  const filteredCandidates = useMemo(() => {
    return candidates.filter((candidate) => {
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
  }, [candidates, query, selectedCities, selectedHr, selectedStatuses])

  const activeCandidate = useMemo(
    () => candidates.find((candidate) => candidate.id === activeCandidateId) ?? null,
    [activeCandidateId, candidates]
  )

  const addSystemComment = (candidate: Candidate, text: string) => ({
    ...candidate,
    comments: [
      {
        id: crypto.randomUUID(),
        type: "system" as const,
        author: "Система",
        text,
        createdAt: getNowLabel(),
      },
      ...candidate.comments,
    ],
  })

  const updateCandidate = (candidateId: number, updater: (candidate: Candidate) => Candidate) => {
    setCandidates((prev) => prev.map((candidate) => (candidate.id === candidateId ? updater(candidate) : candidate)))
  }

  const handleInterviewAction = (
    candidateId: number,
    action: "cancel" | "confirm" | "reschedule" | "complete"
  ) => {
    const config = interviewActions[action]

    updateCandidate(candidateId, (candidate) => {
      const updated = {
        ...candidate,
        status: config.status,
        interview: {
          ...candidate.interview,
          isConfirmed: action === "confirm" || action === "complete",
          state: config.interviewState,
        },
      }

      return addSystemComment(updated, config.message)
    })
  }

  const handleFieldChange = (candidateId: number, field: keyof Candidate, value: string) => {
    updateCandidate(candidateId, (candidate) => {
      const updated = { ...candidate, [field]: value }
      return addSystemComment(updated, `Поле «${field}» изменено.`)
    })
  }

  const handleAddComment = (candidateId: number, text: string) => {
    updateCandidate(candidateId, (candidate) => ({
      ...candidate,
      comments: [
        {
          id: crypto.randomUUID(),
          type: "user",
          author: "HR",
          text,
          createdAt: getNowLabel(),
        },
        ...candidate.comments,
      ],
    }))
  }

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
        onRowClick={(candidate) => setActiveCandidateId(candidate.id)}
      />

      <CandidateOverlay
        candidate={activeCandidate}
        onOpenChange={(open) => setActiveCandidateId(open ? activeCandidateId : null)}
        onFieldChange={handleFieldChange}
        onInterviewAction={handleInterviewAction}
        onAddComment={handleAddComment}
      />
    </section>
  )
}
