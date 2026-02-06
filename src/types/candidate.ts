export type CandidateStatus =
  | "Новый"
  | "Скрининг"
  | "Собеседование"
  | "Оффер"
  | "На паузе"

export interface CandidateComment {
  id: number
  author: string
  message: string
  createdAt: string
}

export interface Candidate {
  id: number
  createdAt: string
  fullName: string
  phone: string
  status: CandidateStatus
  hrManager: string
  vacancy: string
  city: string
  nextContactDate: string
  comments: CandidateComment[]
}
