import { X } from "lucide-react"

import { CandidateDetails } from "@/app/pages/Candidates/CandidateDetails"
import { CandidateHeader } from "@/app/pages/Candidates/CandidateHeader"
import { CandidateRightPanel } from "@/app/pages/Candidates/CandidateRightPanel"
import {
  ATTRACTION_TYPE_LIST,
  CITY_LIST,
  HR_LIST,
  RECRUITMENT_CHANNEL_LIST,
  VACANCY_LIST,
} from "@/data/candidates.mock"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import type { Candidate, CandidateStatus } from "@/types/candidate"

interface CandidateOverlayProps {
  candidate: Candidate | null
  onOpenChange: (open: boolean) => void
  onFieldChange: (candidateId: number, field: keyof Candidate, value: string) => void
  onInterviewAction: (candidateId: number, action: "cancel" | "confirm" | "reschedule" | "complete") => void
  onStatusChange: (candidateId: number, status: CandidateStatus) => void
  onAddComment: (candidateId: number, text: string) => void
}

export function CandidateOverlay({
  candidate,
  onOpenChange,
  onFieldChange,
  onInterviewAction,
  onStatusChange,
  onAddComment,
}: CandidateOverlayProps) {
  return (
    <Sheet open={Boolean(candidate)} onOpenChange={onOpenChange}>
      <SheetContent className="left-auto right-0 top-0 h-screen w-[95vw] max-w-none translate-x-0 translate-y-0 overflow-auto rounded-none p-0 sm:max-w-none" showCloseButton={false}>
        {candidate ? (
          <div className="h-full p-6">
            <div className="mb-4 flex items-center justify-between">
              <SheetTitle>Карточка кандидата #{candidate.id}</SheetTitle>
              <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
                <X />
              </Button>
            </div>

            <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-4">
                <CandidateHeader
                  candidate={candidate}
                  onInterviewAction={(action) => onInterviewAction(candidate.id, action)}
                  onStatusChange={(status) => onStatusChange(candidate.id, status)}
                />
                <CandidateDetails
                  candidate={candidate}
                  cities={CITY_LIST}
                  hrList={HR_LIST}
                  vacancies={VACANCY_LIST}
                  channels={RECRUITMENT_CHANNEL_LIST}
                  attractionTypes={ATTRACTION_TYPE_LIST}
                  onFieldChange={(field, value) => onFieldChange(candidate.id, field, value)}
                />
              </div>

              <CandidateRightPanel
                comments={candidate.comments}
                onAddComment={(text) => onAddComment(candidate.id, text)}
              />
            </div>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  )
}
