export type CandidateStatus =
  | "Новый"
  | "Скрининг"
  | "Собеседование"
  | "Оффер"
  | "На паузе"
  | "Отказ"

export interface Candidate {
  id: number
  createdAt: string
  fullName: string
  phone: string
  status: CandidateStatus
  hrName: string
  vacancyTitle: string
  city: string
  nextContactAt: string
}
