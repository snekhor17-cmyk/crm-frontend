import { ChevronDown } from "lucide-react"

import { CANDIDATE_STATUSES } from "@/data/candidates.mock"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Candidate, CandidateStatus, InterviewState } from "@/types/candidate"

interface CandidateHeaderProps {
  candidate: Candidate
  onInterviewAction: (action: "cancel" | "confirm" | "reschedule" | "complete") => void
  onStatusChange: (status: CandidateStatus) => void
}

const interviewStateLabels: Record<InterviewState, string> = {
  scheduled: "Назначено",
  confirmed: "Подтверждено",
  rescheduled: "Перенесено",
  cancelled: "Отменено",
  completed: "Проведено",
}

const formatDateTime = (value: string) =>
  new Date(value).toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })

export function CandidateHeader({ candidate, onInterviewAction, onStatusChange }: CandidateHeaderProps) {
  const currentStatus = CANDIDATE_STATUSES.find(({ value }) => value === candidate.status)

  return (
    <div className="space-y-3 rounded-lg border p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-8 gap-2 px-3">
                <span
                  className="size-2.5 rounded-full"
                  style={{ backgroundColor: currentStatus?.color }}
                  aria-hidden="true"
                />
                {candidate.status}
                <ChevronDown className="size-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-80">
              <DropdownMenuRadioGroup
                value={candidate.status}
                onValueChange={(value) => onStatusChange(value as CandidateStatus)}
              >
                {CANDIDATE_STATUSES.map((statusOption) => (
                  <DropdownMenuRadioItem key={statusOption.value} value={statusOption.value}>
                    <span
                      className="size-2.5 rounded-full"
                      style={{ backgroundColor: statusOption.color }}
                      aria-hidden="true"
                    />
                    <span>{statusOption.label}</span>
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Badge className="text-muted-foreground">{interviewStateLabels[candidate.interview.state]}</Badge>
        </div>
        <Button onClick={() => onInterviewAction("complete")}>Собеседование состоялось</Button>
      </div>

      <p className="text-sm text-muted-foreground">
        Назначено на {formatDateTime(candidate.interview.plannedAt)}
      </p>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => onInterviewAction("cancel")}>Отменить</Button>
        <Button variant="outline" onClick={() => onInterviewAction("confirm")}>Подтвердить</Button>
        <Button variant="outline" onClick={() => onInterviewAction("reschedule")}>Перенести</Button>
      </div>
    </div>
  )
}
