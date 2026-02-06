import type { Candidate } from "@/types/candidate"

export const candidatesMock: Candidate[] = [
  {
    id: 1024,
    createdAt: "12.01.2026",
    fullName: "Иван Петров",
    phone: "+7 (915) 111-22-33",
    status: "Скрининг",
    hrManager: "Мария Смирнова",
    vacancy: "Frontend-разработчик",
    city: "Москва",
    nextContactDate: "08.02.2026",
    comments: [
      {
        id: 1,
        author: "Мария Смирнова",
        message: "Провели первичный звонок, релевантный опыт 4 года.",
        createdAt: "13.01.2026 10:30",
      },
      {
        id: 2,
        author: "Мария Смирнова",
        message: "Назначен технический скрининг на следующую неделю.",
        createdAt: "14.01.2026 15:10",
      },
    ],
  },
  {
    id: 1025,
    createdAt: "14.01.2026",
    fullName: "Ольга Соколова",
    phone: "+7 (921) 444-55-66",
    status: "Собеседование",
    hrManager: "Алексей Волков",
    vacancy: "QA Engineer",
    city: "Санкт-Петербург",
    nextContactDate: "09.02.2026",
    comments: [
      {
        id: 1,
        author: "Алексей Волков",
        message: "Кандидат прошла HR-интервью, мотивация высокая.",
        createdAt: "15.01.2026 09:45",
      },
    ],
  },
  {
    id: 1026,
    createdAt: "16.01.2026",
    fullName: "Дмитрий Козлов",
    phone: "+7 (903) 777-88-99",
    status: "Новый",
    hrManager: "Мария Смирнова",
    vacancy: "Backend-разработчик",
    city: "Казань",
    nextContactDate: "10.02.2026",
    comments: [
      {
        id: 1,
        author: "Мария Смирнова",
        message: "Резюме получено, планирую первый контакт завтра.",
        createdAt: "16.01.2026 18:00",
      },
    ],
  },
  {
    id: 1027,
    createdAt: "18.01.2026",
    fullName: "Екатерина Новикова",
    phone: "+7 (999) 123-45-67",
    status: "Оффер",
    hrManager: "Алексей Волков",
    vacancy: "Product Designer",
    city: "Екатеринбург",
    nextContactDate: "07.02.2026",
    comments: [
      {
        id: 1,
        author: "Алексей Волков",
        message: "Финальный этап пройден, готовим оффер.",
        createdAt: "19.01.2026 12:20",
      },
      {
        id: 2,
        author: "Руководитель отдела",
        message: "Согласованы условия, ждем подтверждения кандидата.",
        createdAt: "20.01.2026 11:05",
      },
    ],
  },
]
