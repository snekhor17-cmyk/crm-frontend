import { useMemo, useState } from "react"

import { CandidateDrawer } from "@/app/pages/Candidates/CandidateDrawer"
import { CandidatesTable } from "@/app/pages/Candidates/CandidatesTable"
import { candidatesMock } from "@/data/candidates.mock"
import type { Candidate } from "@/types/candidate"

export function CandidatesPage() {
  const [selectedCandidateId, setSelectedCandidateId] = useState<number | null>(null)

  const selectedCandidate = useMemo<Candidate | null>(
    () => candidatesMock.find((candidate) => candidate.id === selectedCandidateId) ?? null,
    [selectedCandidateId]
  )

  return (
    <section className="space-y-4">
      <CandidatesTable
        candidates={candidatesMock}
        selectedCandidateId={selectedCandidateId}
        onSelectCandidate={(candidate) => setSelectedCandidateId(candidate.id)}
      />

      {selectedCandidate ? (
        <CandidateDrawer candidate={selectedCandidate} />
      ) : (
        <div className="rounded-lg border border-dashed bg-background p-8 text-center text-sm text-muted-foreground">
          Выберите кандидата в таблице, чтобы открыть карточку.
        </div>
      )}
    </section>
  )
}
