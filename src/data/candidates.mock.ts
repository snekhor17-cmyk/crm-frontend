import type { Candidate, CandidateStatus, CandidateStatusOption } from "@/types/candidate"

export const CANDIDATE_STATUSES: CandidateStatusOption[] = [
  { value: "Новый", label: "Новый", color: "#9CA3AF" },
  { value: "Назначено собеседование", label: "Назначено собеседование", color: "#F59E0B" },
  { value: "Собеседование подтверждено", label: "Собеседование подтверждено", color: "#14B8A6" },
  { value: "Собеседование с HR состоялось", label: "Собеседование с HR состоялось", color: "#EAB308" },
  { value: "Собеседование с руководителем состоялось", label: "Собеседование с руководителем состоялось", color: "#EAB308" },
  { value: "Готов на обучение", label: "Готов на обучение", color: "#A855F7" },
  { value: "Подтвердил выход", label: "Подтвердил выход", color: "#A855F7" },
  { value: "Вышел на обучение", label: "Вышел на обучение", color: "#3B82F6" },
  { value: "Успешно завершил обучение", label: "Успешно завершил обучение", color: "#3B82F6" },
  { value: "Вышел в отдел", label: "Вышел в отдел", color: "#22C55E" },
  { value: "Прошел испытательный срок", label: "Прошел испытательный срок", color: "#22C55E" },
  { value: "Срыв", label: "Срыв", color: "#EF4444" },
]

export const CANDIDATE_STATUS_VALUES: CandidateStatus[] = CANDIDATE_STATUSES.map(({ value }) => value)

export const HR_LIST = ["Мария Смирнова", "Алексей Волков", "Ирина Орлова", "Никита Романов"]

export const CITY_LIST = [
  "Москва",
  "Санкт-Петербург",
  "Казань",
  "Екатеринбург",
  "Новосибирск",
  "Самара",
]

export const VACANCY_LIST = [
  "Frontend-разработчик",
  "Backend-разработчик",
  "QA Engineer",
  "Product Designer",
  "HR BP",
  "Project Manager",
]

export const RECRUITMENT_CHANNEL_LIST = ["hh.ru", "Telegram", "Реферал", "Сайт компании", "Avito"]

export const ATTRACTION_TYPE_LIST = ["Холодный поиск", "Отклик", "Реферальная программа", "Кадровый резерв"]

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
  const interviewHour = 10 + (index % 8)

  return {
    id,
    createdAt: `0${(index % 9) + 1}.02.2026`,
    fullName: names[index % names.length],
    phone: `+7 (9${(index % 9) + 10}) ${100 + index}-${10 + (index % 80)}-${20 + (index % 70)}`,
    status: CANDIDATE_STATUS_VALUES[index % CANDIDATE_STATUS_VALUES.length],
    hrName: HR_LIST[index % HR_LIST.length],
    vacancyTitle: VACANCY_LIST[index % VACANCY_LIST.length],
    city: CITY_LIST[index % CITY_LIST.length],
    recruitmentChannel: RECRUITMENT_CHANNEL_LIST[index % RECRUITMENT_CHANNEL_LIST.length],
    attractionType: ATTRACTION_TYPE_LIST[index % ATTRACTION_TYPE_LIST.length],
    nextContactAt: `2026-02-${String(10 + (index % 18)).padStart(2, "0")}T${String(interviewHour).padStart(2, "0")}:00`,
    notes: "Кандидат заинтересован, ожидает обратную связь после интервью.",
    interview: {
      plannedAt: `2026-02-${String(10 + (index % 18)).padStart(2, "0")}T${String(interviewHour).padStart(2, "0")}:00`,
      isConfirmed: index % 2 === 0,
      state: index % 5 === 0 ? "rescheduled" : "scheduled",
    },
    comments: [
      {
        id: `${id}-system-created`,
        type: "system",
        author: "Система",
        text: "Карточка кандидата создана.",
        createdAt: `2026-02-${String(2 + (index % 10)).padStart(2, "0")} 09:00`,
      },
      {
        id: `${id}-system-status`,
        type: "system",
        author: "Система",
        text: `Статус изменён на «${CANDIDATE_STATUS_VALUES[index % CANDIDATE_STATUS_VALUES.length]}».`,
        createdAt: `2026-02-${String(3 + (index % 10)).padStart(2, "0")} 11:30`,
      },
    ],
  }
})
