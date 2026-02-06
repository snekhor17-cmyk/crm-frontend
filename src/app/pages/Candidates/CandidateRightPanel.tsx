import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { CandidateComment } from "@/types/candidate"

interface CandidateRightPanelProps {
  comments: CandidateComment[]
  onAddComment: (text: string) => void
}

export function CandidateRightPanel({ comments, onAddComment }: CandidateRightPanelProps) {
  const [tab, setTab] = useState("comments")
  const [comment, setComment] = useState("")

  const orderedComments = useMemo(
    () => [...comments].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [comments]
  )

  const handleSubmit = () => {
    if (!comment.trim()) return
    onAddComment(comment.trim())
    setComment("")
  }

  return (
    <div className="rounded-lg border p-4">
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList>
          <TabsTrigger value="comments">Комментарии</TabsTrigger>
          <TabsTrigger value="tasks">Задачи</TabsTrigger>
        </TabsList>

        <TabsContent value="comments" className="space-y-3">
          <div className="max-h-[420px] space-y-2 overflow-auto pr-1">
            {orderedComments.map((entry) => (
              <div key={entry.id} className="rounded-md border p-2 text-sm">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="font-medium">{entry.author}</span>
                  <span className="text-xs text-muted-foreground">{entry.createdAt}</span>
                </div>
                <p className={entry.type === "system" ? "text-muted-foreground" : ""}>{entry.text}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Добавить комментарий" />
            <Button onClick={handleSubmit}>Добавить</Button>
          </div>
        </TabsContent>

        <TabsContent value="tasks">
          <div className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">Нет задач</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
