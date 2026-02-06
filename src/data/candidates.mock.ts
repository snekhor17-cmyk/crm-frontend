import type { Candidate, CandidateStatus } from "@/types/candidate"

export const CANDIDATE_STATUSES: CandidateStatus[] = [
  "Новый",
  "Скрининг",
  "Собеседование",
  "Оффер",
  "На паузе",
  "Отказ",
]

export const HR_LIST = ["Мария Смирнова", "Алексей Волков", "Ирина Орлова", "Никита Романов"]

export const CITY_LIST = [
  "Москва",
  "Санкт-Петербург",
  "Казань",
  "Екатеринбург",
  "Новосибирск",
  "Самара",
]

const vacancies = [
  "Frontend-разработчик",
  "Backend-разработчик",
  "QA Engineer",
  "Product Designer",
  "HR BP",
  "Project Manager",
]

const names = [
  "Иван Петров",
  "Ольга Соколова",
  "Дмитрий Козлов",
  "Екатерина Новикова",
  "Сергей Михайлов",
  "Анна Павлова",
  "Кирилл Егоров",
  "Марина Власова",
  "Артём Логинов",
  "Виктория Громова",
]

export const candidatesMock: Candidate[] = Array.from({ length: 36 }, (_, index) => {
  const id = 1001 + index

  return {
    id,
    createdAt: `0${(index % 9) + 1}.02.2026`,
    fullName: names[index % names.length],
    phone: `+7 (9${(index % 9) + 10}) ${100 + index}-${10 + (index % 80)}-${20 + (index % 70)}`,
    status: CANDIDATE_STATUSES[index % CANDIDATE_STATUSES.length],
    hrName: HR_LIST[index % HR_LIST.length],
    vacancyTitle: vacancies[index % vacancies.length],
    city: CITY_LIST[index % CITY_LIST.length],
    nextContactAt: `${10 + (index % 18)}.02.2026`,
  }
})
