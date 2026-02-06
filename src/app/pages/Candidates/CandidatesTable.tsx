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
  selectedCandidateId: number | null
  onSelectCandidate: (candidate: Candidate) => void
}

export function CandidatesTable({
  candidates,
  selectedCandidateId,
  onSelectCandidate,
}: CandidatesTableProps) {
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
            <TableRow
              key={candidate.id}
              data-state={candidate.id === selectedCandidateId ? "selected" : undefined}
              className="cursor-pointer"
              onClick={() => onSelectCandidate(candidate)}
            >
              <TableCell>{candidate.id}</TableCell>
              <TableCell>{candidate.createdAt}</TableCell>
              <TableCell>
                <div className="font-medium">{candidate.fullName}</div>
                <div className="text-xs text-muted-foreground">{candidate.phone}</div>
              </TableCell>
              <TableCell>{candidate.status}</TableCell>
              <TableCell>{candidate.hrManager}</TableCell>
              <TableCell>{candidate.vacancy}</TableCell>
              <TableCell>{candidate.city}</TableCell>
              <TableCell>{candidate.nextContactDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
