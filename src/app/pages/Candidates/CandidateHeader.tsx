import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Candidate, InterviewState } from "@/types/candidate"

interface CandidateHeaderProps {
  candidate: Candidate
  onInterviewAction: (action: "cancel" | "confirm" | "reschedule" | "complete") => void
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

export function CandidateHeader({ candidate, onInterviewAction }: CandidateHeaderProps) {
  return (
    <div className="space-y-3 rounded-lg border p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge>{candidate.status}</Badge>
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
