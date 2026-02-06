import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Candidate } from "@/types/candidate"

interface CandidatesTableProps {
  candidates: Candidate[]
  onRowClick: (candidate: Candidate) => void
}

export function CandidatesTable({ candidates, onRowClick }: CandidatesTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Дата создания</TableHead>
            <TableHead>Кандидат</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Ответственный HR</TableHead>
            <TableHead>Вакансия</TableHead>
            <TableHead>Город</TableHead>
            <TableHead>Дата следующего контакта</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((candidate) => (
            <TableRow key={candidate.id} className="cursor-pointer" onClick={() => onRowClick(candidate)}>
              <TableCell>{candidate.id}</TableCell>
              <TableCell>{candidate.createdAt}</TableCell>
              <TableCell>
                <div className="font-medium">{candidate.fullName}</div>
                <div className="text-xs text-muted-foreground">{candidate.phone}</div>
              </TableCell>
              <TableCell>
                <span className="rounded-full border px-2 py-0.5 text-xs">{candidate.status}</span>
              </TableCell>
              <TableCell>{candidate.hrName}</TableCell>
              <TableCell>{candidate.vacancyTitle}</TableCell>
              <TableCell>{candidate.city}</TableCell>
              <TableCell>{candidate.nextContactAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
