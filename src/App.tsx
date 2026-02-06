import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppLayout } from "@/layout/AppLayout"

const overviewCards = [
  { title: "Open positions", value: "12", description: "3 added this week" },
  { title: "Active candidates", value: "87", description: "14 in interview stage" },
  { title: "Offers sent", value: "6", description: "2 pending response" },
]

export default function App() {
  return (
    <AppLayout>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {overviewCards.map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold tracking-tight">{card.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </AppLayout>
  )
}
