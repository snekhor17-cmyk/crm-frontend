import { Input } from "@/components/ui/input"
import type { Candidate } from "@/types/candidate"

interface CandidateDrawerProps {
  candidate: Candidate
}

const profileFields = [
  { key: "phone", label: "Телефон" },
  { key: "status", label: "Статус" },
  { key: "city", label: "Город" },
  { key: "vacancy", label: "Вакансия" },
  { key: "hrManager", label: "Ответственный HR" },
] as const

export function CandidateDrawer({ candidate }: CandidateDrawerProps) {
  return (
    <aside className="grid gap-6 rounded-lg border bg-background p-4 lg:grid-cols-2">
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">{candidate.fullName}</h3>
        <dl className="space-y-3">
          {profileFields.map(({ key, label }) => (
            <div key={key}>
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd className="text-sm font-medium">{candidate[key]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-4">
        <h4 className="text-sm font-semibold">Комментарии</h4>
        <div className="max-h-56 space-y-3 overflow-y-auto pr-1">
          {candidate.comments.map((comment) => (
            <article key={comment.id} className="rounded-md border p-3">
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="text-xs font-medium">{comment.author}</span>
                <span className="text-xs text-muted-foreground">{comment.createdAt}</span>
              </div>
              <p className="text-sm">{comment.message}</p>
            </article>
          ))}
        </div>

        <div className="space-y-2">
          <label htmlFor="new-comment" className="text-xs text-muted-foreground">
            Добавить комментарий
          </label>
          <Input id="new-comment" placeholder="Введите комментарий" />
        </div>
      </section>
    </aside>
  )
}
