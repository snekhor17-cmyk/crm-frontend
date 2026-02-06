import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function App() {
  return (
    <div className="p-8">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>CRM стартанул 🚀</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button>Добавить кандидата</Button>
          <Button variant="outline">Настройки</Button>
        </CardContent>
      </Card>
    </div>
  )
}
