export type CandidateStatus =
  | "Новый"
  | "Назначено собеседование"
  | "Собеседование подтверждено"
  | "Собеседование с HR состоялось"
  | "Собеседование с руководителем состоялось"
  | "Готов на обучение"
  | "Подтвердил выход"
  | "Вышел на обучение"
  | "Успешно завершил обучение"
  | "Вышел в отдел"
  | "Прошел испытательный срок"
  | "Срыв"

export interface CandidateStatusOption {
  value: CandidateStatus
  label: CandidateStatus
  color: string
}

export type CandidateCommentType = "system" | "user"

export interface CandidateComment {
  id: string
  type: CandidateCommentType
  author: string
  text: string
  createdAt: string
}

export type InterviewState = "scheduled" | "confirmed" | "rescheduled" | "cancelled" | "completed"

export interface CandidateInterview {
  plannedAt: string
  isConfirmed: boolean
  state: InterviewState
}

export interface Candidate {
  id: number
  createdAt: string
  fullName: string
  phone: string
  status: CandidateStatus
  hrName: string
  vacancyTitle: string
  city: string
  recruitmentChannel: string
  attractionType: string
  nextContactAt: string
  notes: string
  interview: CandidateInterview
  comments: CandidateComment[]
}
