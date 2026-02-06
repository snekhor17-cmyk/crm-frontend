import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { Candidate } from "@/types/candidate"

interface CandidateDetailsProps {
  candidate: Candidate
  cities: string[]
  hrList: string[]
  vacancies: string[]
  channels: string[]
  attractionTypes: string[]
  onFieldChange: (field: keyof Candidate, value: string) => void
}

const formatContactStatus = (value: string) => {
  const now = new Date()
  const target = new Date(value)
  const nowDay = now.toDateString()

  if (target.toDateString() === nowDay) {
    return { text: "сегодня", className: "border-blue-400 text-blue-600" }
  }

  if (target.getTime() < now.getTime()) {
    return { text: "просрочено", className: "border-red-400 text-red-600" }
  }

  return { text: "запланировано", className: "border-emerald-400 text-emerald-700" }
}

const hrSlots = ["11:30", "13:00", "15:30", "17:00"]

export function CandidateDetails({
  candidate,
  cities,
  hrList,
  vacancies,
  channels,
  attractionTypes,
  onFieldChange,
}: CandidateDetailsProps) {
  const nextContactStatus = formatContactStatus(candidate.nextContactAt)

  return (
    <div className="space-y-4">
      <div className="space-y-2 rounded-lg border p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold">Следующий контакт</h3>
          <Badge className={nextContactStatus.className}>{nextContactStatus.text}</Badge>
        </div>

        <Input
          type="datetime-local"
          value={candidate.nextContactAt}
          onChange={(event) => onFieldChange("nextContactAt", event.target.value)}
        />

        <div className="rounded-md bg-muted p-3 text-sm">
          <p className="font-medium">Ответственный HR занят</p>
          <p className="text-muted-foreground">Доступные слоты: {hrSlots.join(", ")}</p>
        </div>
      </div>

      <div className="grid gap-3 rounded-lg border p-4 md:grid-cols-2">
        <Field label="Контакт">
          <Input value={candidate.fullName} onChange={(event) => onFieldChange("fullName", event.target.value)} />
          <Input value={candidate.phone} onChange={(event) => onFieldChange("phone", event.target.value)} />
        </Field>

        <Field label="Ответственный HR">
          <Select value={candidate.hrName} onChange={(event) => onFieldChange("hrName", event.target.value)}>
            {hrList.map((hr) => (
              <option key={hr} value={hr}>{hr}</option>
            ))}
          </Select>
        </Field>

        <Field label="Город">
          <Select value={candidate.city} onChange={(event) => onFieldChange("city", event.target.value)}>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </Select>
        </Field>

        <Field label="Вакансия">
          <Select value={candidate.vacancyTitle} onChange={(event) => onFieldChange("vacancyTitle", event.target.value)}>
            {vacancies.map((vacancy) => (
              <option key={vacancy} value={vacancy}>{vacancy}</option>
            ))}
          </Select>
        </Field>

        <Field label="Рекламный канал">
          <Select
            value={candidate.recruitmentChannel}
            onChange={(event) => onFieldChange("recruitmentChannel", event.target.value)}
          >
            {channels.map((channel) => (
              <option key={channel} value={channel}>{channel}</option>
            ))}
          </Select>
        </Field>

        <Field label="Тип привлечения">
          <Select
            value={candidate.attractionType}
            onChange={(event) => onFieldChange("attractionType", event.target.value)}
          >
            {attractionTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </Select>
        </Field>

        <Field label="Примечание" className="md:col-span-2">
          <Textarea value={candidate.notes} onChange={(event) => onFieldChange("notes", event.target.value)} />
        </Field>
      </div>
    </div>
  )
}

function Field({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <label className="mb-1 block text-sm text-muted-foreground">{label}</label>
      <div className="space-y-2">{children}</div>
    </div>
  )
}
